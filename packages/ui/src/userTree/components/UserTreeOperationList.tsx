import { type PropType, defineComponent } from 'vue'
import './style/userTreeOperationList.less'
import { CloseCircle } from '@vicons/ionicons5'
import type { TreeNode } from '../type'

export const UserTreeOperationList = defineComponent({
  name: 'UserTreeOperationList',
  props: {
    checkedNodes: {
      type: Array as PropType<TreeNode[]>,
      required: true,
    },
  },
  emits: ['delete'],
  setup(props, { emit }) {
    function deleteNode(node: TreeNode) {
      emit('delete', node)
    }
    function createName(node: TreeNode) {
      return node.name.slice(0, 2)
    }
    return () => {
      return (
        <div class="dtd-user-tree-operation-layout">
          <p class="dtd-user-tree-operation-count">
            <span>已选择 ：</span>
            <span>{props.checkedNodes.length}</span>
          </p>
          <div class="dtd-user-tree-operation-list-wrapper">
            <ul class="dtd-user-tree-operation-list">
              {props.checkedNodes.map(node => (
                <li key={node.id} class="dtd-user-tree-operation-item">
                  {node.avatar
                    ? (
                    <img src={node.avatar} alt="" class="dtd-user-tree-operation-item-img" />
                      )
                    : (
                    <span class="dtd-user-tree-operation-item-name">{() => createName(node)}</span>
                      )}
                  <span>{node.name}</span>
                  <CloseCircle onClick={() => deleteNode(node)} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  },
})
