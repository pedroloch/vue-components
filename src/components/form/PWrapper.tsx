import { renderComponent } from '@/helpers/render-component'
import { Color } from '@/types'
import { Component, defineComponent, PropType, Slot } from 'vue'
import Check from '../icons/Check'
import ExclamationCircle from '../icons/ExclamationCircle'
import Warning from '../icons/Warning'
import PLabel from './PLabel'
import { focusClass, focusWithinClass, statusClass } from './PWrapper.classes'

type Status = 'success' | 'error' | 'warning'

export const wrapperProps = {
  color: {
    type: String as PropType<Color>,
    default: 'brand',
  },
  status: {
    type: String as PropType<Status>,
  },
  disabled: Boolean,
  invalid: String,
  type: {
    type: String as PropType<'text' | 'number' | 'password'>,
  },
  label: String,
  append: {
    type: [String, Object] as PropType<string | Component>,
  },
  prepend: {
    type: [String, Object] as PropType<string | Component>,
  },
  helper: String,
  required: Boolean,
  hint: String,
  name: { type: String },
} as const

const StatusIcon = (status?: Status) => {
  switch (status) {
    case 'error':
      return <ExclamationCircle class='h-5' />
    case 'warning':
      return <Warning class='h-5' />
    case 'success':
      return <Check class='h-5 ' />
    default:
      return undefined
  }
}

export default defineComponent({
  name: 'SWrapper',
  props: wrapperProps,
  setup(props, { slots, attrs }) {
    return () => (
      <div
        class={[
          'flex flex-col dark:text-white w-full ',
          !props.invalid
            ? `text-gray-700 ${
                focusClass[props.color]
              } dark:focus-within:border-mix-50`
            : 'text-red-500',
        ]}
        {...attrs}
      >
        <PLabel
          required={props.required}
          helper={props.helper}
          for={props.name ?? ''}
          class={props.invalid && 'text-red-500'}
        >
          {props.label}
        </PLabel>
        <div
          class={[
            'border rounded w-full flex bg-white mt-0.5',
            props.status
              ? statusClass[props.status]
              : `${focusWithinClass[props.color]} border-gray-300`,
            props.disabled && 'bg-gray-100 cursor-not-allowed',
          ]}
        >
          {props.prepend && (
            <div class='flex justify-center items-center'>
              {renderComponent(props.prepend, { class: ['h-4 px-3'] })}
            </div>
          )}
          {slots.default?.()}
          {props.append && (
            <div class='flex justify-center items-center '>
              {renderComponent(props.append, { class: ['h-4 px-3'] })}
            </div>
          )}

          {props.status && (
            <div
              class={[
                'flex justify-center items-center pr-2.5 ',
                focusClass[props.color],
              ]}
            >
              {StatusIcon(props.status)}
            </div>
          )}
        </div>
        {props.invalid && (
          <small class='text-xs text-left mt-0.5 ml-1 text-red-500'>
            {props.invalid}
          </small>
        )}
        {props.hint && !props.invalid && (
          <span class='text-xs mt-px text-left px-1 text-gray-500'>
            {props.hint}
          </span>
        )}
      </div>
    )
  },
})
