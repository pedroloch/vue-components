import Spinner from '@/components/icons/Spinner'
import { renderComponent } from '@/helpers/render-component'
import { defineComponent, Slots } from 'vue'
import Check from '../icons/Check'
import ExclamationCircle from '../icons/ExclamationCircle'
import { getBgClass, getOutlineClass, sizeClass } from './PButton.classes'
import PButtonProps from './PButton.props'
import { getSize } from './PButton.utils'

export default defineComponent({
  name: 'PButton',
  props: PButtonProps,
  setup(props, { slots }) {
    const buttonClasses = [
      'relative overflow-hidden flex items-center justify-center focus:outline-none active:scale-95 active:shadow-none focus:ring focus:ring-offset-1 disabled:opacity-50 disabled:cursor-default disabled:cursor-not-allowed',

      props.outlined
        ? getOutlineClass(props.color, props.colorShade)
        : getBgClass(props.color, props.colorShade),
      sizeClass[props.size],
      props.pill ? 'rounded-full' : 'rounded',
    ]

    const progressClass = [
      'absolute inset-y-0 left-0',
      props.outlined
        ? `bg-${props.color}-${props.colorShade} opacity-10`
        : 'bg-white opacity-20',
    ]

    const getButtonWidth = (slots: Slots) =>
      props.block
        ? 'width: 100%'
        : `width: ${
            typeof slots.default?.()[0].children === 'string'
              ? //@ts-ignore
                slots.default?.()[0].children.length + (props.icon ? 3 : 2)
              : 1
          }ch`

    return () => (
      <button
        style={getButtonWidth(slots)}
        class={buttonClasses}
        disabled={props.disabled}
        onClick={(e) => {
          if (props.loading) return
          else props.onClick?.(e)
        }}
      >
        {props.loading ? (
          slots.loading?.() ?? (
            <Spinner class={[getSize(props.size), 'stroke-2']} />
          )
        ) : props.success ? (
          <span>
            {slots.success?.() ?? <Check class={getSize(props.size)} />}
          </span>
        ) : props.error ? (
          <span>
            {slots.error?.() ?? (
              <ExclamationCircle class={getSize(props.size)} type="solid" />
            )}
          </span>
        ) : (
          <span class="flex items-center">
            {props.icon &&
              renderComponent(props.icon, {
                class: [getSize(props.size), 'p-0.5 -ml-0.5'],
              })}
            {slots.default?.()}
          </span>
        )}
        {Boolean(props.progress) && (
          <span
            class={progressClass}
            style={`width: ${props.progress}%`}
          ></span>
        )}
      </button>
    )
  },
})
