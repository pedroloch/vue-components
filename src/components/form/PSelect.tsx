import { defineComponent, PropType } from 'vue'
import PWrapper, { wrapperProps } from './PWrapper'

export interface OptionObj<T = string | number> {
  value: T | null
  label: string
}

const fontSizes = {
  xs: 'py-1 px-1.5 text-xs ',
  sm: 'py-2 px-3 text-sm',
  md: 'text-md py-2 px-3',
  lg: 'text-lg py-3 px-4',
}

export default defineComponent({
  name: 'PSelect',
  props: {
    ...wrapperProps,
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array as PropType<(string | OptionObj)[]>,
      default: () => [],
    },
    size: {
      type: String as PropType<keyof typeof fontSizes>,
      default: 'sm',
    },
  },
  setup(props, { attrs, emit }) {
    return () => (
      <PWrapper {...attrs} {...props}>
        <select
          class={[
            'border-none focus:outline-none focus:ring-0 apperance-none flex-grow bg-white rounded pr-9',
            props.invalidMsg ? null : 'text-gray-600',
            fontSizes[props.size],
          ]}
          //@ts-ignore
          value={props.modelValue}
          {...attrs}
          onChange={(e) => {
            emit('update:modelValue', (e.target as HTMLSelectElement).value)
          }}
        >
          {props.options.map((option, index) =>
            typeof option === 'string' ? (
              <option
                value={option}
                selected={
                  props.modelValue ? option === props.modelValue : index === 0
                }
              >
                {option}
              </option>
            ) : (
              <option
                value={option.value!}
                selected={
                  props.modelValue
                    ? option.value === props.modelValue
                    : index === 0
                }
              >
                {option.label}
              </option>
            )
          )}
        </select>
      </PWrapper>
    )
  },
})
