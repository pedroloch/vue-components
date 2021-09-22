import { getId } from '@/helpers/uuid'
import { maska } from 'maska'
import { defineComponent, PropType } from 'vue'
import PWrapper, { wrapperProps } from './PWrapper'

export default defineComponent({
  name: 'PInput',
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    ...wrapperProps,
    id: String,
    modelValue: { type: String, default: '' },
    maxLength: {
      type: Number,
    },
    rows: {
      type: Number,
      default: 5,
    },
    showCounter: Boolean,
    placeholder: String,
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
      <div>
        <PWrapper {...props} name={id}>
          <textarea
            id={props.id}
            name={name}
            class={inputClasses}
            value={props.modelValue}
            onInput={(e) => {
              const { value } = e.target as HTMLInputElement
              emit('update:modelValue', value)
            }}
            maxlength={props.maxLength}
            placeholder={props.placeholder}
            rows={props.rows}
            {...attrs}
          />
        </PWrapper>
        {props.showCounter && (
          <div class="flex justify-between text-gray-600 text-xs">
            <small>Max Char: {props.maxLength}</small>
            <small>Total: {props.modelValue.length}</small>
          </div>
        )}
      </div>
    )
  },
})
