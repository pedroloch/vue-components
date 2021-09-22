import { Color } from '@/colors'
import { getId } from '@/helpers/uuid'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [Boolean, Number],
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    color: {
      type: String as PropType<Color>,
      default: 'brand',
    },
    name: {
      type: Array,
    },
    onChange: {
      type: Function as PropType<(e: Event) => void>,
    },
    checked: Boolean,
  },
  setup(props, { emit, attrs }) {
    const id = getId('checkbox')

    const onChange = (e: Event) =>
      emit(
        'update:modelValue',
        typeof props.modelValue === 'number'
          ? (e.target as HTMLInputElement).checked
            ? 1
            : 0
          : (e.target as HTMLInputElement).checked
      )

    return () => (
      <div class="flex items-center space-x-2">
        <input
          id={id}
          type="checkbox"
          class={[
            'rounded',
            `focus:ring-${props.color}-500 text-${props.color}-500`,
          ]}
          checked={props.checked ?? Boolean(props.modelValue)}
          onChange={props.onChange ?? onChange}
          {...attrs}
        />
        {props.label ? (
          <div class="flex flex-col">
            <label class="text-gray-600 text-sm text-left" for={id}>
              {props.label}
            </label>
            {props.hint && (
              <span class="text-2xs mt-px text-left px-1 text-gray-500">
                {props.hint}
              </span>
            )}
          </div>
        ) : null}
      </div>
    )
  },
})
