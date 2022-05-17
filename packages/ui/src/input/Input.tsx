import { defineComponent } from 'vue'
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
  setup(props, { emit }) {
    function onInputHandle(e: Event) {
      emit('update:value', (e.target as HTMLInputElement).value)
      emit('input', (e.target as HTMLInputElement).value)
    }
    return () => (
      <input
        class="dtd-input"
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
    )
  },
})
