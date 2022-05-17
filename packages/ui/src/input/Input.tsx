import { computed, defineComponent } from 'vue'
import './style'

export default defineComponent({
  name: 'DInput',
  props: {
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  emits: ['change', 'input', 'blur', 'focus', 'update:value'],
  setup(props, { emit, slots }) {
    function onInputHandle(e: Event) {
      emit('update:value', (e.target as HTMLInputElement).value)
      emit('input', (e.target as HTMLInputElement).value)
    }
    const inputClassRef = computed(() => {
      return {
        'dtd-input': true,
        'dtd-input-prefix-wrapper': slots.prefix ? true : false,
        'dtd-input-suffix-wrapper': slots.suffix ? true : false,
      }
    })
    return () => (
      <span class="dtd-input-wrapper">
        {slots.prefix ? (
          <span class="dtd-input-prefix">
            <span class="dtd-input-prefix-inner">{slots.prefix()}</span>
          </span>
        ) : null}
        <input
          class={inputClassRef.value}
          type="text"
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readonly}
          value={props.value}
          onInput={(e) => onInputHandle(e)}
          onChange={(e) => emit('change', (e.target as HTMLInputElement).value)}
          onFocus={(e) => emit('focus', (e.target as HTMLInputElement).value)}
          onBlur={(e) => emit('blur', (e.target as HTMLInputElement).value)}
        />
        {slots.suffix ? (
          <span class="dtd-input-suffix">
            <span class="dtd-input-suffix-inner">{slots.suffix()}</span>
          </span>
        ) : null}
      </span>
    )
  },
})
