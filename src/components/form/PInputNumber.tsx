import { getId } from '@/helpers/uuid'
import { maska } from 'maska'
import { defineComponent, getCurrentInstance, PropType } from 'vue'
import PWrapper, { wrapperProps } from './PWrapper'

export default defineComponent({
  name: 'SInputNumber',
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    ...wrapperProps,
    modelValue: {
      type: [String, Number, Date],
      default: '',
    },
    id: String,
    min: Number,
    step: Number,
    max: Number,
    disabled: Boolean,
    name: String,
    lazy: Boolean,
  },
  setup(props, { attrs, emit }) {
    const id = getId('input')
    const name = props.name ?? id
    const instance = getCurrentInstance() as any

    const validateNumber = (number: number) => {
      if (!number) return 0
      if ((props.min === 0 || props.min) && number < props.min) return props.min
      if (props.max && number > props.max) return props.max
      return number
    }

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      const newVal = validateNumber(parseFloat(val))

      emit('update:modelValue', newVal)
      instance.ctx.$forceUpdate()
    }

    const update = (val: number | string) => {
      if (typeof val === 'string') parseFloat(val)
      emit('update:modelValue', val)
    }

    const inputClasses = [
      'text-center py-2 border-none focus:outline-none focus:ring-0 apperance-none text-sm flex-grow rounded w-full dark:text-white disabled:bg-transparent disabled:cursor-not-allowed placeholder-gray-400 p-input number-input',
      !props.prepend && 'pl-3',
      !props.append && 'pr-3',
      props.invalidMsg ? null : 'text-gray-600',
    ]

    const signClass = `flex justify-center items-center w-10 bg-${props.color}-500 text-white text-2xl flex-none cursor-pointer select-none `

    const onSignClick = (dir: 'up' | 'down') => {
      const step = props.step || 1
      const newVal =
        dir === 'up' ? +props.modelValue + step : +props.modelValue - step
      update(validateNumber(newVal))
    }

    const onDoubleClick = (dir: 'up' | 'down') => {
      const step = props.step || 1

      const newVal =
        dir === 'up'
          ? +props.modelValue + 1 - step
          : +props.modelValue - 1 + step
      update(validateNumber(newVal))
    }

    return () => (
      <PWrapper {...props} name={id}>
        <div
          class={signClass}
          onClick={() => onSignClick('down')}
          onDblclick={() => onDoubleClick('down')}
        >
          -
        </div>
        <input
          id={props.id}
          name={name}
          class={inputClasses}
          value={props.modelValue}
          onInput={(e) => !props.lazy && handleInput(e)}
          onBlur={(e) => props.lazy && handleInput(e)}
          type={'number'}
          min={props.min}
          step={props.step}
          max={props.max}
          disabled={props.disabled}
          {...attrs}
        />
        <div
          class={signClass}
          onClick={() => onSignClick('up')}
          onDblclick={(e) => {
            e.preventDefault()
            onDoubleClick('up')
          }}
        >
          +
        </div>
      </PWrapper>
    )
  },
})
