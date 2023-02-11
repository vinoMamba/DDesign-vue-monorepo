import { type PropType, defineComponent, ref, watch, watchEffect } from 'vue'
import { DInput } from '../components'
import { type UniqueTreeNode, UserTreeNodeList } from './components/UserTreeNodeList'
import type { TreeNode } from './type'
import { UserTreeOperationList } from './components/UserTreeOperationList'
import './style'

export const UserTreeContent = defineComponent({
  name: 'UserTreeContent',
  props: {
    treeData: {
      type: Array as PropType<TreeNode[]>,
      required: true,
    },
    checked: {
      type: Array as PropType<TreeNode[]>,
      required: true,
      default: () => [],
    },
  },
  emits: ['checked', 'search'],
  setup(props, { emit }) {
    const searchContent = ref('')
    const checkedNodes = ref<TreeNode[]>([])
    const deleteNode = ref<UniqueTreeNode>()
    function createUniqueNode(node: TreeNode) {
      deleteNode.value = {
        ...node,
        uniqueId: Symbol('uniqueId'),
      }
    }
    watch(checkedNodes, (newValue) => {
      emit('checked', newValue)
    })
    watch(searchContent, (value) => {
      emit('search', value)
    })
    watchEffect(() => {
      checkedNodes.value = props.checked
    })
    return () => (
      <div class="dtd-user-tree-content-layout">
        <div class="dtd-user-tree-content-left">
          <DInput v-model:value={searchContent.value} placeholder="搜索" />
          <UserTreeNodeList
            list={props.treeData}
            v-model:checkedNodes={checkedNodes.value}
            deleteNode={deleteNode.value}
          />
        </div>
        <div class="dtd-user-tree-content-right">
          <UserTreeOperationList
            checkedNodes={checkedNodes.value}
            onDelete={node => createUniqueNode(node)}
          />
        </div>
      </div>
    )
  },
})
