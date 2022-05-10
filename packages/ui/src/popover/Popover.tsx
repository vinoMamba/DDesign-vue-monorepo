import { defineComponent, nextTick, onMounted, onUnmounted, ref, type PropType } from 'vue'
import './style'

export default defineComponent({
  name: 'DPopover',
  props: {
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click',
    },
  },
  setup(props, { slots }) {
    const popoverRef = ref<HTMLDivElement | null>(null)
    const visible = ref(false)

    function onClickOutside(event: MouseEvent) {
      if (popoverRef.value && !popoverRef.value.contains(event.target as Node)) {
        close()
      }
    }
    function open() {
      visible.value = true
      nextTick(() => {
        document.addEventListener('click', onClickOutside)
      })
    }

    function close() {
      visible.value = false
      nextTick(() => {
        document.removeEventListener('click', onClickOutside)
      })
    }

    function toggleVisibility(event: MouseEvent) {
      if (popoverRef.value && popoverRef.value.contains(event.target as Node)) {
        visible.value ? close() : open()
      }
    }

    function bindEventToPopover() {
      if (popoverRef.value) {
        if (props.trigger === 'click') {
          popoverRef.value.addEventListener('click', toggleVisibility)
        } else {
          popoverRef.value.addEventListener('mouseenter', open)
          popoverRef.value.addEventListener('mouseleave', close)
        }
      }
    }
    function unbindEventToPopover() {
      if (popoverRef.value) {
        if (props.trigger === 'click') {
          popoverRef.value.removeEventListener('click', toggleVisibility)
        } else {
          popoverRef.value.removeEventListener('mouseenter', open)
          popoverRef.value.removeEventListener('mouseleave', close)
        }
      }
    }

    onMounted(() => {
      bindEventToPopover()
    })
    onUnmounted(() => {
      unbindEventToPopover()
    })
    return () => (
      <div class="dtd-popover" ref={popoverRef}>
        {visible.value ? <div class="dtd-popover-content-wrapper">{slots.content?.()}</div> : null}
        {slots.default?.()}
      </div>
    )
  },
})
