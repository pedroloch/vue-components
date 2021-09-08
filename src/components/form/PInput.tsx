import { getId } from '@/helpers/uuid'
import { maska } from 'maska'
import Maska from 'maska'
import { defineComponent, PropType } from 'vue'
import PWrapper, { wrapperProps } from './PWrapper'

export default defineComponent({
  inheritAttrs: false,
  name: 'SInput',
  props: {
    ...wrapperProps,
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
  },
  directives: {
    mask: maska,
  },
  setup(props, { attrs, emit }) {
    const id = getId('input')
    const name = props.name ?? id

    return () => (
      <PWrapper {...props} name={id}>
        <input
          id={props.id}
          name={name}
          class={[
            'py-2 border-none focus:outline-none focus:ring-0 apperance-none text-sm flex-grow rounded w-full dark:text-white disabled:bg-transparent disabled:cursor-not-allowed placeholder-gray-400',
            !props.prepend && 'pl-3',
            !props.append && 'pr-3',
            props.invalid ? null : 'text-gray-600',
          ]}
          value={props.modelValue}
          onInput={(e) => {
            const value =
              props.type === 'number'
                ? parseInt((e.target as HTMLInputElement).value)
                : (e.target as HTMLInputElement).value

            emit('update:modelValue', value)
          }}
          type={props.type}
          maxlength={props.maxLength}
          min={props.min}
          v-mask={props.mask && `${props.mask}`}
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
