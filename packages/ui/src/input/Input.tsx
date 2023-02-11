import { type PropType, computed, defineComponent } from 'vue'
import './style'
import { CloseCircle } from '@vicons/ionicons5'

export default defineComponent({
  name: 'DInput',
  props: {
    type: {
      type: String as PropType<
        | 'text'
        | 'password'
        | 'email'
        | 'number'
        | 'tel'
        | 'url'
        | 'search'
        | 'date'
        | 'time'
        | 'datetime-local'
        | 'month'
        | 'week'
        | 'color'
      >,
      default: 'text',
    },
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
    allowClear: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change', 'input', 'blur', 'focus', 'update:value'],
  setup(props, { emit, slots }) {
    function onInputHandle(e: Event) {
      emit('update:value', (e.target as HTMLInputElement).value)
      emit('input', (e.target as HTMLInputElement).value)
    }
    function clearValue() {
      emit('update:value', '')
    }
    const inputClassRef = computed(() => {
      return {
        'dtd-input': true,
        'dtd-input-prefix-wrapper': !!slots.prefix,
        'dtd-input-suffix-wrapper': !!slots.suffix,
        'dtd-input-close-wrapper': !!props.allowClear,
      }
    })
    const closeIconRef = computed(() => {
      return !!props.value
    })
    return () => (
      <span class="dtd-input-wrapper">
        {slots.prefix
          ? (
          <span class="dtd-input-prefix">
            <span class="dtd-input-prefix-inner">{slots.prefix()}</span>
          </span>
            )
          : null}
        <input
          class={inputClassRef.value}
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readonly}
          value={props.value}
          onInput={e => onInputHandle(e)}
          onChange={e => emit('change', (e.target as HTMLInputElement).value)}
          onFocus={e => emit('focus', (e.target as HTMLInputElement).value)}
          onBlur={e => emit('blur', (e.target as HTMLInputElement).value)}
        />
        {props.allowClear
          ? (
          <span class="dtd-input-close">
            {closeIconRef.value
              ? (
              <span class="dtd-input-close-inner">
                <CloseCircle onClick={() => clearValue()} />
              </span>
                )
              : (
                  ''
                )}
          </span>
            )
          : null}
        {slots.suffix
          ? (
          <span class="dtd-input-suffix">
            <span class="dtd-input-suffix-inner">{slots.suffix()}</span>
          </span>
            )
          : null}
      </span>
    )
  },
})
