import { Color } from '@/colors'
import { renderComponent } from '@/helpers/render-component'

import { Component, computed, defineComponent, PropType, Slot } from 'vue'
import Check from '../icons/Check'
import ExclamationCircle from '../icons/ExclamationCircle'
import Warning from '../icons/Warning'
import PLabel from './PLabel'
import {
  getFocusClass,
  getFocusWithinClass,
  statusClass,
} from './PWrapper.classes'

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
  invalidMsg: String,
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
  noFocus: Boolean,
} as const

const StatusIcon = (status?: Status) => {
  switch (status) {
    case 'error':
      return <ExclamationCircle class="h-5" />
    case 'warning':
      return <Warning class="h-5" />
    case 'success':
      return <Check class="h-5 " />
    default:
      return undefined
  }
}

export default defineComponent({
  name: 'PWrapper',
  props: wrapperProps,
  setup(props, { slots, attrs }) {
    const wrapperClass = computed(() => [
      'border rounded w-full flex bg-white mt-0.5 p-wrapper',
      props.status
        ? statusClass[props.status]
        : `${
            !props.noFocus && getFocusWithinClass(props.color)
          } border-gray-300`,
      props.disabled && 'bg-gray-100 cursor-not-allowed',
    ])

    return () => (
      <div
        class={[
          'flex flex-col dark:text-white w-full',
          !props.invalidMsg
            ? `focus-within:text-${props.color}-500`
            : 'text-red-500',
        ]}
        {...attrs}
      >
        <PLabel
          for={props.name ?? ''}
          required={props.required}
          helper={props.helper}
          class={[props.invalidMsg && 'text-red-500']}
        >
          {props.label}
        </PLabel>
        <div class={wrapperClass.value}>
          {props.prepend && (
            <div class="flex justify-center items-center">
              {renderComponent(props.prepend, { class: ['h-4 px-3'] })}
            </div>
          )}
          {slots.default?.()}
          {props.append && (
            <div class="flex justify-center items-center">
              {renderComponent(props.append, { class: ['h-4 px-3'] })}
            </div>
          )}
          {props.status && (
            <div
              class={[
                `flex justify-center items-center pr-2.5 ${
                  !props.noFocus && getFocusClass(props.color)
                }`,
                ,
              ]}
            >
              {StatusIcon(props.status)}
            </div>
          )}
        </div>
        {props.invalidMsg && (
          <small class="text-xs text-left mt-0.5 ml-1 text-red-500">
            {props.invalidMsg}
          </small>
        )}
        {props.hint && !props.invalidMsg && (
          <span class="text-xs mt-px text-left px-1 text-gray-500">
            {props.hint}
          </span>
        )}
      </div>
    )
  },
})
