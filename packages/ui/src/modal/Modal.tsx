import { defineComponent, computed, ref, watch, nextTick } from 'vue'
import './style'
import { DButton } from '../components'
import { CloseOutline } from '@vicons/ionicons5'

export default defineComponent({
  name: 'DModal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    hideHeader: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    okText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    dense: {
      type: Boolean,
      default: false,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, slots }) {
    const wrapperRef = ref<HTMLDivElement | null>(null)
    const classesRef = computed(() => {
      return ['dtd-modal-display', props.visible ? 'dtd-modal-visible' : '']
    })
    const wrapperClassesRef = computed(() => {
      return ['dtd-modal-wrapper', props.centered ? 'dtd-modal-centered' : '']
    })

    function close() {
      emit('update:visible', false)
    }
    function ok(e: MouseEvent) {
      emit('ok', e)
      emit('update:visible', false)
    }
    function cancel() {
      emit('update:visible', false)
    }
    watch(
      () => props.visible,
      (value) => {
        if (value) {
          nextTick(() => {
            document.body.appendChild(wrapperRef.value!)
          })
        }
      },
    )
    return () => (
      <div ref={wrapperRef}>
        {props.visible ? (
          <div class={classesRef.value}>
            <div class="dtd-modal-overlay" />
            <div class={wrapperClassesRef.value}>
              <div class="dtd-modal">
                {!props.hideHeader && (
                  <header>
                    <div class="dtd-modal-title">{slots.title?.()}</div>
                    {props.closable && (
                      <i class="dtd-modal-close" onClick={() => close()}>
                        <CloseOutline />
                      </i>
                    )}
                  </header>
                )}
                <main class={props.dense ? 'dtd-modal-dense' : ''}>{slots.content?.()}</main>
                <footer>
                  {slots.footer ? (
                    slots.footer?.()
                  ) : (
                    <div class="dtd-modal-button-wrapper">
                      <DButton onClick={() => cancel()}>{props.cancelText}</DButton>
                      <DButton type="primary" onClick={(e: MouseEvent) => ok(e)}>
                        {props.okText}
                      </DButton>
                    </div>
                  )}
                </footer>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  },
})
