import { computed, defineComponent, inject, onMounted, type PropType, ref, watch } from 'vue'
import type { TreeNode } from '../type'
import './style/userTreeNodeList.less'
import { type UserTreeInjection, userTreeInjection } from '../UserTree'
import { getCheckedNodes, traverseNodeList, traverseTree, traverseTreeByType } from '../utils'
import { ChevronForward } from '@vicons/ionicons5'
//@ts-ignore
import imgUrl from '../images/dep.png'

// 由于vue3 里面的watch 是懒监听，必须加一个symbol值保证唯一
export interface UniqueTreeNode extends TreeNode {
  uniqueId: Symbol
}

export const UserTreeNodeList = defineComponent({
  name: 'UserTreeNodeList',
  props: {
    list: {
      type: Array as PropType<TreeNode[]>,
      default: () => [],
    },
    deleteNode: {
      // TreeNode | undefined
      type: Object as PropType<UniqueTreeNode>,
    },
  },
  emits: ['update:checkedNodes'],
  setup(props, { emit }) {
    const UserTree = inject(userTreeInjection, {
      mode: () => 'department',
      multiple: () => true,
      showUserCount: () => true,
      showAllCheckedButton: () => true,
    } as UserTreeInjection)
    const userCountVisible = computed(() => {
      return UserTree.showUserCount() && UserTree.mode() === 'andUser'
    })
    const checkedAll = ref(false)
    const breadcrumbList = ref<TreeNode[]>([])
    const nodeList = ref<TreeNode[]>([])
    const reset = () => {
      breadcrumbList.value = []
      updateNodeList(props.list, { mode: UserTree.mode() })
    }
    const getNext = (node: TreeNode) => {
      checkedAll.value = false
      if (node.type === 1) return
      breadcrumbList.value.push(node)
      updateNodeList(node.children, { mode: UserTree.mode() })
    }
    const getPrev = (node: TreeNode) => {
      const index = breadcrumbList.value.findIndex((n) => n.id === node.id)
      breadcrumbList.value = breadcrumbList.value.slice(0, index + 1)
      updateNodeList(node.children, { mode: UserTree.mode() })
    }

    function updateNodeList(data: TreeNode[], options: { mode: 'andUser' | 'department' }) {
      nodeList.value = data
      const { mode } = options
      if (mode === 'department') {
        nodeList.value = nodeList.value.filter((node) => node.type === 0)
      }
    }

    function toggleChecked(e: Event, node: TreeNode) {
      if (UserTree.multiple()) {
        node.checked = !node.checked
        // change children checked state
        if (UserTree.mode() === 'department') {
          traverseTreeByType(node, 0, (n: TreeNode) => {
            n.checked = node.checked
          })
        } else {
          traverseTree(node, (n: TreeNode) => {
            n.checked = node.checked
          })
        }
        // change parent checked state
        updateParentCheckedState()
      } else {
        setBrotherNodeCheckedState(node)
        node.checked = !node.checked
      }
      updateCheckedNodes()
    }

    function setBrotherNodeCheckedState(node: TreeNode) {
      if (node.checked) {
      } else {
        const lastNode = breadcrumbList.value[breadcrumbList.value.length - 1]
        lastNode && lastNode.children.forEach((n) => (n.checked = false))
      }
    }

    function updateParentCheckedState() {
      const lastNode = breadcrumbList.value[breadcrumbList.value.length - 1]
      if (lastNode && lastNode.children.every((n) => n.checked)) {
        lastNode.checked = true
      } else if (lastNode && !lastNode.children.some((n) => n.checked)) {
        lastNode.checked = false
      }
    }

    function updateCheckedNodes() {
      const checkedNodes = getCheckedNodes(nodeList.value)
      emit('update:checkedNodes', checkedNodes)
    }

    function toggleCheckedAll() {
      checkedAll.value = !checkedAll.value
      const lastNode = breadcrumbList.value[breadcrumbList.value.length - 1]
      if (lastNode) {
        lastNode.children.forEach((node) => (node.checked = checkedAll.value))
      } else {
        nodeList.value.forEach((node) => (node.checked = checkedAll.value))
      }
      updateCheckedNodes()
    }
    const departmentDisabled = (node: TreeNode) => {
      return UserTree.mode() === 'andUser' && node.type === 0
    }
    //watch deleteNode and changed checked state
    watch(
      () => props.deleteNode,
      (newVal) => {
        //traverse  nodeList to find node
        traverseNodeList(nodeList.value, (node: TreeNode) => {
          if (node.id === newVal!.id) {
            node.checked = false
            updateParentCheckedState()
            updateCheckedNodes()
          }
        })
      },
    )
    watch(
      () => props.list,
      (val) => {
        updateNodeList(val, { mode: UserTree.mode() })
      },
    )
    onMounted(() => {
      updateNodeList(props.list, { mode: UserTree.mode() })
    })
    function createName(node: TreeNode) {
      return node.name.slice(0, 2)
    }
    const firstLoad = ref(true)
    const length = computed(() => nodeList.value.length)
    watch(length, (newValue, oldValue) => {
      firstLoad.value = oldValue === 0 && newValue > 0
    })
    return () => (
      <div class="dtd-user-tree-node-list-layout">
        <ol class="dtd-user-tree-node-list-breadcrumb">
          <li onClick={() => reset()}>
            <span class="dtd-user-tree-node-list-breadcrumb-title">通讯录</span>
            {breadcrumbList.value.length > 0 && (
              <ChevronForward class="dtd-user-tree-node-list-breadcrumb-separator" />
            )}
          </li>
          {breadcrumbList.value.map((node, index) => (
            <li title={node.name} key={node.id} onClick={() => getPrev(node)}>
              <span class="dtd-user-tree-node-list-breadcrumb-title">{node.name}</span>
              {index < breadcrumbList.value.length - 1 && (
                <ChevronForward class="dtd-user-tree-node-list-breadcrumb-separator" />
              )}
            </li>
          ))}
        </ol>
        <ul class="dtd-user-tree-node-list">
          {UserTree.showAllCheckedButton() && UserTree.multiple() ? (
            <li class="dtd-user-tree-node-list-checkedAll">
              <input
                type="checkbox"
                class="dtd-user-tree-node-list-checkbox"
                checked={checkedAll.value}
                onChange={() => toggleCheckedAll()}
              />
              <span>全选</span>
            </li>
          ) : null}
          {nodeList.value.length === 0 ? (
            firstLoad.value ? (
              <li class="dtd-user-tree-node-list-loading">
                <div class="letter-holder">
                  <div class="l-1 letter">数</div>
                  <div class="l-2 letter">据</div>
                  <div class="l-3 letter">加</div>
                  <div class="l-4 letter">载</div>
                  <div class="l-5 letter">中</div>
                  <div class="l-6 letter">.</div>
                  <div class="l-7 letter">.</div>
                  <div class="l-8 letter">.</div>
                  <div class="l-9 letter">.</div>
                  <div class="l-10 letter">.</div>
                  <div class="l-10 letter">.</div>
                </div>
              </li>
            ) : (
              <li class="dtd-user-tree-node-list-empty">暂无数据</li>
            )
          ) : (
            nodeList.value.map((node) => (
              <li key={node.id}>
                <input
                  type="checkbox"
                  class="dtd-user-tree-node-list-checkbox"
                  checked={node.checked}
                  disabled={departmentDisabled(node)}
                  onChange={(e: Event) => toggleChecked(e, node)}
                />
                <p class="dtd-user-tree-node">
                  {node.type === 0 ? (
                    <img src={imgUrl} alt="" class="dtd-user-tree-node-list-item-img" />
                  ) : node.avatar ? (
                    <img src={node.avatar} alt="" class="dtd-user-tree-node-list-item-img" />
                  ) : (
                    <span class="dtd-user-tree-node-list-item-name">{() => createName(node)}</span>
                  )}
                  <span class="dtd-user-tree-node-name">{node.name}</span>
                  {node.type === 0 && userCountVisible.value ? (
                    <span class="dtd-user-tree-node-count">（{node.peopleCount || 0}）</span>
                  ) : null}
                </p>
                {node.type === 0 && (
                  <span class="dtd-user-tree-node-next" onClick={() => getNext(node)}>
                    下级
                    <ChevronForward class="dtd-user-tree-node-next-icon" />
                  </span>
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    )
  },
})
