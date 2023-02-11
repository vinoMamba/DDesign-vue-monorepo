import {
  type PropType,
  Transition,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
  watchEffect,
} from 'vue'
import './style'

export default defineComponent({
  name: 'DPopover',
  props: {
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click',
    },
    placement: {
      type: String as PropType<
        | 'topLeft'
        | 'top'
        | 'topRight'
        | 'rightTop'
        | 'right'
        | 'rightBottom'
        | 'bottomRight'
        | 'bottom'
        | 'bottomLeft'
        | 'leftBottom'
        | 'left'
        | 'leftTop'
      >,
      default: 'top',
    },
    show: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:show'],
  setup(props, { slots, emit }) {
    const popoverRef = ref<HTMLDivElement | null>(null)
    const popoverContentRef = ref<HTMLDivElement | null>(null)
    const popoverTriggerRef = ref<HTMLDivElement | null>(null)
    const visible = ref(false)

    function positionContent() {
      document.body.appendChild(popoverContentRef.value!)
      const { width, height, left, top } = popoverTriggerRef.value!.getBoundingClientRect()
      const { height: height2, width: width2 } = popoverContentRef.value!.getBoundingClientRect()
      const positions = {
        top: {
          top: top + window.scrollY - height2 - 10,
          left: left + window.scrollX - width2 / 2 + width / 2,
        },
        topRight: {
          top: top + window.scrollY - height2 - 10,
          left: left + window.scrollX - width2 + width,
        },
        topLeft: {
          top: top + window.scrollY - height2 - 10,
          left: left + window.scrollX,
        },
        right: {
          top: top + window.scrollY - height2 / 2 + height / 2,
          left: left + window.scrollX + width + 10,
        },
        rightTop: {
          top: top + window.scrollY,
          left: left + window.scrollX + width + 10,
        },
        rightBottom: {
          top: top + window.scrollY + height - height2,
          left: left + window.scrollX + width + 10,
        },
        bottom: {
          top: top + height + window.scrollY + 10,
          left: left + window.scrollX - width2 / 2 + width / 2,
        },
        bottomLeft: {
          top: top + height + window.scrollY + 10,
          left: left + window.scrollX,
        },
        bottomRight: {
          top: top + height + window.scrollY + 10,
          left: left + window.scrollX - width2 + width,
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX - width2 - 10,
        },
        leftTop: {
          top: top + window.scrollY,
          left: left + window.scrollX - width2 - 10,
        },
        leftBottom: {
          top: top + window.scrollY + height - height2,
          left: left + window.scrollX - width2 - 10,
        },
      }
      popoverContentRef.value!.style.left = `${positions[props.placement].left}px`
      popoverContentRef.value!.style.top = `${positions[props.placement].top}px`
    }
    function onClickOutside(event: MouseEvent) {
      if (
        !popoverContentRef.value?.contains(event.target as Node)
        && !popoverTriggerRef.value?.contains(event.target as Node)
      )
        close()
    }
    function open() {
      visible.value = true
      nextTick(() => {
        positionContent()
        document.addEventListener('click', onClickOutside)
      })
    }

    function close() {
      visible.value = false
      nextTick(() => {
        popoverContentRef.value && document.body.removeChild(popoverContentRef.value)
        document.removeEventListener('click', onClickOutside)
      })
    }

    function toggleVisibility(event: MouseEvent) {
      if (popoverTriggerRef.value && popoverTriggerRef.value.contains(event.target as Node))
        visible.value ? close() : open()
    }

    function bindEventToPopover() {
      if (popoverRef.value) {
        if (props.trigger === 'click') {
          popoverRef.value.addEventListener('click', toggleVisibility)
        }
        else {
          popoverRef.value.addEventListener('mouseenter', open)
          popoverRef.value.addEventListener('mouseleave', close)
        }
      }
    }
    function unbindEventToPopover() {
      if (popoverRef.value) {
        if (props.trigger === 'click') {
          popoverRef.value.removeEventListener('click', toggleVisibility)
        }
        else {
          popoverRef.value.removeEventListener('mouseenter', open)
          popoverRef.value.removeEventListener('mouseleave', close)
        }
      }
    }

    onMounted(() => {
      bindEventToPopover()
    })
    // watch visible
    watch(visible, (value1) => {
      emit('update:show', value1)
    })
    watchEffect(() => {
      if (!props.show)
        close()
    })
    onUnmounted(() => {
      unbindEventToPopover()
    })
    return () => (
      <div class="dtd-popover" ref={popoverRef}>
        <Transition>
          {visible.value
            ? (
            <div class="dtd-popover-content-wrapper" ref={popoverContentRef}>
              {slots.title ? <div class="dtd-popover-title">{slots.title()}</div> : null}
              {slots.content ? <div class="dtd-popover-content">{slots.content()}</div> : null}
            </div>
              )
            : null}
        </Transition>
        <div ref={popoverTriggerRef}>{slots.default?.()}</div>
      </div>
    )
  },
})
