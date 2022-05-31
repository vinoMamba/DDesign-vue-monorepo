import { defineComponent, ref } from 'vue'
import { DInput } from '../components'
import { UserTreeNodeList, type UniqueTreeNode } from './components/UserTreeNodeList'
import type { TreeNode } from './type'
import { mockTree } from './mock'
import { UserTreeOperationList } from './components/UserTreeOperationList'
import './style'

export const UserTreeContent = defineComponent({
  name: 'UserTreeContent',
  setup() {
    const searchContent = ref('')
    const listRef = ref<TreeNode[]>(mockTree)
    const checkedNodes = ref<TreeNode[]>([])
    const deleteNode = ref<UniqueTreeNode>()
    function createUniqueNode(node: TreeNode) {
      deleteNode.value = {
        ...node,
        uniqueId: Symbol(),
      }
    }
    return () => (
      <div class="dtd-user-tree-content-layout">
        <div class="dtd-user-tree-content-left">
          <DInput v-model:value={searchContent.value} placeholder="搜索" />
          <UserTreeNodeList
            list={listRef.value}
            v-model:checkedNodes={checkedNodes.value}
            deleteNode={deleteNode.value}
          />
        </div>
        <div class="dtd-user-tree-content-right">
          <UserTreeOperationList
            checkedNodes={checkedNodes.value}
            onDelete={(node) => createUniqueNode(node)}
          />
        </div>
      </div>
    )
  },
})
