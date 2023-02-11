import { type InjectionKey, type PropType, defineComponent, provide, ref, watch } from 'vue'
import { DButton, DModal } from '../components'
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
    checked: {
      type: Array as PropType<TreeNode[]>,
      required: true,
      default: () => [],
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
  emits: ['update:visible', 'update:checked', 'update:search', 'submit', 'cancel'],
  setup(props, { emit }) {
    provide(userTreeInjection, {
      multiple: () => props.multiple,
      mode: () => props.mode,
      showUserCount: () => props.showUserCount,
      showAllCheckedButton: () => props.showAllCheckedButton,
    })
    const search = ref('')
    const checked = ref<TreeNode[]>([])
    const handleClose = (e: MouseEvent) => {
      emit('cancel', e)
      emit('update:visible', false)
    }
    const handleOk = (e: MouseEvent) => {
      emit('update:checked', checked.value)
      emit('submit', e)
    }
    function onChecked(e: TreeNode[]) {
      checked.value = e
    }
    watch(search, () => {
      emit('update:search', search.value)
    })
    function onSearch(e: string) {
      search.value = e
    }
    return () => (
      <div>
        <DModal v-model:visible={props.visible} hideHeader>
          {{
            content: () => (
              <UserTreeContent
                checked={props.checked}
                treeData={props.treeData}
                onSearch={e => onSearch(e)}
                onChecked={e => onChecked(e)}
              />
            ),
            footer: () => (
              <div class="dtd-user-tree-footer">
                <DButton onClick={() => handleClose()}>取消</DButton>
                <DButton type="primary" onClick={() => handleOk()}>
                  确认
                </DButton>
              </div>
            ),
          }}
        </DModal>
      </div>
    )
  },
})
