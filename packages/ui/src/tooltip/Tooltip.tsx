import { Transition, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import './style'

export default defineComponent({
  name: 'DTooltip',
  props: {
    title: {
      type: String,
    },
  },
  setup(props, { slots }) {
    const contentRef = ref<HTMLDivElement | null>(null)
    const visible = ref(false)
    function showTooltip() {
      visible.value = true
    }
    function hiddenTooltip() {
      visible.value = false
    }
    function bindEvent() {
      contentRef.value && contentRef.value.addEventListener('mouseenter', showTooltip)
      contentRef.value && contentRef.value.addEventListener('mouseleave', hiddenTooltip)
    }
    function unbindEvent() {
      contentRef.value && contentRef.value.removeEventListener('mouseenter', showTooltip)
      contentRef.value && contentRef.value.removeEventListener('mouseleave', hiddenTooltip)
    }
    onMounted(() => {
      bindEvent()
    })
    onUnmounted(() => {
      unbindEvent()
    })

    return () => (
      <div class="dtd-tooltip-wrapper">
        <Transition>
          {visible.value && props.title && <span class="dtd-tooltip-tip">{props.title}</span>}
        </Transition>
        <div ref={contentRef} class="dtd-tooltip-content">
          {slots.default?.()}
        </div>
      </div>
    )
  },
})
