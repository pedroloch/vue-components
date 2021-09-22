import { getId } from '@/helpers/uuid'
import { maska } from 'maska'
import { defineComponent, PropType } from 'vue'
import PWrapper, { wrapperProps } from './PWrapper'

export const pInputProps = {
  modelValue: {
    type: [String, Number, Date],
    default: '',
  },
  type: {
    type: String as PropType<'text' | 'number' | 'password'>,
  },
  maxLength: {
    type: Number,
  },
  id: String,
  min: Number,
  step: Number,
  disabled: Boolean,
  placeholder: String,
  mask: {
    type: [String, Object, Array] as PropType<string | object | string[]>,
  },
  name: String,
  autocomplete: String,
}

export default defineComponent({
  name: 'PInput',
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    ...wrapperProps,
    ...pInputProps,
  },
  directives: {
    mask: maska,
  },
  setup(props, { attrs, emit }) {
    const id = getId('input')
    const name = props.name ?? id

    const handleInput = (e: Event) => {
      const value =
        props.type === 'number'
          ? parseFloat((e.target as HTMLInputElement).value)
          : (e.target as HTMLInputElement).value

      emit('update:modelValue', value)
    }

    const inputClasses = [
      'py-2 px-0 border-none focus:outline-none focus:ring-0 apperance-none text-sm flex-grow rounded w-full dark:text-white disabled:bg-transparent disabled:cursor-not-allowed placeholder-gray-400 p-input',
      !props.prepend && 'pl-3',
      !props.append && 'pr-3',
      props.invalidMsg ? null : 'text-gray-600',
    ]

    return () => (
      <PWrapper {...props} name={id}>
        <input
          id={props.id}
          name={name}
          class={inputClasses}
          value={props.modelValue}
          onInput={handleInput}
          type={props.type}
          maxlength={props.maxLength}
          min={props.min}
          v-mask={props.mask}
          step={props.step}
          disabled={props.disabled}
          placeholder={props.placeholder}
          autocomplete={props.autocomplete}
          {...attrs}
        />
      </PWrapper>
    )
  },
})
