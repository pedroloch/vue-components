import { Color } from '@/colors'
import { getId } from '@/helpers/uuid'
import { computed, defineComponent, PropType, ref } from 'vue'
import Search from '../icons/Search'
import PCheckbox from './PCheckbox'
import PInput from './PInput'
import PWrapper, { wrapperProps } from './PWrapper'
import { Option } from './SListbox'

export default defineComponent({
  name: 'MultiSelectCheckbox',
  props: {
    ...wrapperProps,
    modelValue: {
      type: Array as PropType<(string | number)[]>,
      default: [],
    },
    options: {
      type: Array as PropType<string[] | Option[]>,
      default: () => [],
    },
    color: {
      type: String as PropType<Color>,
      default: 'brand',
    },
    label: String,
    search: Boolean,
    mySearch: {
      type: Function as PropType<(search: string) => boolean>,
    },
  },
  setup(props, { emit }) {
    const id = getId('multi-checkbox')
    const search = ref('')

    const isSelected = (option: string | Option) => {
      if (typeof option === 'string') {
        const i = props.modelValue.indexOf(option)
        return i !== -1
      }
      return props.modelValue.findIndex((o) => o === option.value) !== -1
    }

    const handleCheckbox = (option: string | Option) => {
      if (typeof option === 'string') {
        const i = props.modelValue.indexOf(option)
        if (i === -1) emit('update:modelValue', [...props.modelValue, option])
        else
          emit(
            'update:modelValue',
            props.modelValue.filter((_, index) => i !== index)
          )
      } else {
        const i = props.modelValue.findIndex((o) => option.value === o)
        if (i === -1)
          emit('update:modelValue', [...props.modelValue, option.value])
        else
          emit(
            'update:modelValue',
            props.modelValue.filter((_, index) => i !== index)
          )
      }
    }

    const isStringArray = (opt: (string | Option)[]): opt is string[] =>
      opt.every((o) => typeof o === 'string')

    const filteredOptions = computed(() => {
      if (isStringArray(props.options)) {
        return props.options.filter((option) =>
          option.toLowerCase().includes(search.value.toLowerCase())
        )
      } else {
        return props.options.filter((option) => {
          if (option.searchVal)
            return option.searchVal
              .toLowerCase()
              .includes(search.value.toLowerCase())

          if (typeof option.label === 'string')
            return option.label
              .toLowerCase()
              .includes(search.value.toLowerCase())

          return true
        })
      }
    })

    return () => (
      <PWrapper {...props} name={id} noFocus>
        <div class="overflow-y-auto max-h-48 text-sm w-full rounded text-gray-700">
          {props.search && (
            <div class="px-2 py-1 bg-gray-50">
              <PInput
                prepend={Search}
                class="py-1.5"
                v-model={search.value}
                color={props.color}
              />
            </div>
          )}
          {filteredOptions.value.map((option, i) => (
            <div
              key={i}
              class={[
                'flex justify-between items-center px-2.5 py-1.5 text-gray-700',
                isSelected(option)
                  ? `bg-${props.color}-50 even:bg-${props.color}-100`
                  : 'bg-gray-50 even:bg-white',
              ]}
            >
              <label for={`select-option-${i}`}>
                {typeof option === 'string'
                  ? option
                  : typeof option.label === 'string'
                  ? option.label
                  : option.label()}
              </label>
              <PCheckbox
                id={`select-option-${i}`}
                color={props.color}
                checked={isSelected(option)}
                onChange={() => handleCheckbox(option)}
              />
            </div>
          ))}
        </div>
      </PWrapper>
    )
  },
})
