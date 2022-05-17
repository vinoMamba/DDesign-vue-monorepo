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
  setup(props, { emit }) {
    return () => (
      <input
        class="dtd-input"
        type="text"
        placeholder={props.placeholder}
        disabled={props.disabled}
        readonly={props.readonly}
        value={props.value}
        onChange={(e) => emit('change', (e.target as HTMLInputElement).value)}
        onInput={(e) => emit('input', (e.target as HTMLInputElement).value)}
        onBlur={(e) => emit('blur', e)}
        onFocus={(e) => emit('focus', e)}
      />
    )
  },
})
