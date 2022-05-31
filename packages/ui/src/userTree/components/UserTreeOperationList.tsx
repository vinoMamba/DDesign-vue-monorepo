import { defineComponent, type PropType } from 'vue'
import './style/userTreeOperationList.less'
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

    return () => {
      return (
        <div>
          <p>
            <span>已选择 ：</span>
            <span>{props.checkedNodes.length}</span>
          </p>
          <ul>
            {props.checkedNodes.map((node) => (
              <li key={node.id}>
                <img src={node.avatar} alt="" />
                <span>{node.name}</span>
                <i onClick={() => deleteNode(node)} />
              </li>
            ))}
          </ul>
        </div>
      )
    }
  },
})
