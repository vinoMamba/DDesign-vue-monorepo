import { defineComponent, type InjectionKey, onMounted, type PropType, provide } from 'vue'
import { DModal, DButton } from '../components'
import { UserTreeContent } from './UserTreeContent'
import type { TreeNode } from './type'
import './style'

export interface UserTreeInjection {
  multiple: () => Boolean
  mode: () => 'department' | 'andUser'
  showUserCount: () => Boolean
  showAllCheckedButton: () => Boolean
}

export const userTreeInjection: InjectionKey<UserTreeInjection> = Symbol('UserTree')

export default defineComponent({
  name: 'UserTree',
  props: {
    treeData: {
      type: Array as PropType<TreeNode[]>,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    mode: {
      type: String as PropType<'department' | 'andUser'>,
      default: 'department',
    },
    showUserCount: {
      type: Boolean,
      default: false,
    },
    showAllCheckedButton: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    provide(userTreeInjection, {
      multiple: () => props.multiple,
      mode: () => props.mode,
      showUserCount: () => props.showUserCount,
      showAllCheckedButton: () => props.showAllCheckedButton,
    })
    const handleClose = () => {
      emit('update:visible', false)
    }
    onMounted(() => {})
    return () => (
      <>
        <DModal v-model:visible={props.visible} hideHeader>
          {{
            content: () => <UserTreeContent />,
            footer: () => (
              <div class="dtd-user-tree-footer">
                <DButton onClick={() => handleClose()}>取消</DButton>
                <DButton type="primary" onClick={() => handleClose()}>
                  确认
                </DButton>
              </div>
            ),
          }}
        </DModal>
      </>
    )
  },
})
