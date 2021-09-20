import Spinner from '@/components/icons/Spinner'
import { renderComponent } from '@/helpers/render-component'
import { defineComponent } from 'vue'
import Check from '../icons/Check'
import ExclamationCircle from '../icons/ExclamationCircle'
import { colorClass, outlineClass, sizeClass } from './PButton.classes'
import PButtonProps from './PButton.props'
import { getSize } from './PButton.utils'

export default defineComponent({
  name: 'PButton',
  props: PButtonProps,
  setup(props, { attrs, slots }) {
    const buttonClasses = [
      props.outlined ? outlineClass[props.color] : colorClass[props.color],
      sizeClass[props.size],
      props.pill ? 'rounded-full' : 'rounded',
      'flex items-center justify-center shadow active:scale-95 active:shadow-none focus:ring focus:ring-offset-1 disabled:opacity-50 disabled:cursor-default',
    ]

    const buttonWidth = props.block
      ? 'width: 100%'
      : `width: ${
          typeof slots.default?.()[0].children === 'string'
            ? //@ts-ignore
              slots.default?.()[0].children.length + (props.icon ? 3 : 2)
            : 1
        }ch`

    return () => (
      <button style={buttonWidth} class={buttonClasses} {...attrs}>
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
              <ExclamationCircle class={getSize(props.size)} />
            )}
          </span>
        ) : (
          <span class='flex items-center'>
            {props.icon &&
              renderComponent(props.icon, {
                class: [getSize(props.size), 'p-0.5 -ml-0.5'],
              })}
            {slots.default?.()}
          </span>
        )}
      </button>
    )
  },
})
