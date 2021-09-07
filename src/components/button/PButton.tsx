import Spinner from '@/components/icons/Spinner'
import { Color } from '@/types'
import { defineComponent, PropType } from 'vue'
import { colorClass, outlineClass, sizeClass } from './PButton.classes'
import { Size } from './PButton.types'

export default defineComponent({
  name: 'PButton',
  props: {
    color: { type: String as PropType<Color>, default: 'blue' },
    outlined: Boolean,
    pill: Boolean,
    disabled: Boolean,
    loading: Boolean,
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
  },
  setup(props, { attrs, slots }) {
    return () => (
      <button
        style={[
          `width: ${
            typeof slots.default?.()[0].children === 'string'
              ? //@ts-ignore
                slots.default?.()[0].children.length + 2
              : 1
          }ch`,
        ]}
        class={[
          props.outlined ? outlineClass[props.color] : colorClass[props.color],
          sizeClass[props.size],
          props.pill ? 'rounded-full' : 'rounded',
          'flex items-center justify-center shadow active:scale-95 active:shadow-none focus:ring focus:ring-offset-1 disabled:opacity-50 disabled:cursor-default',
        ]}
        {...attrs}
      >
        {props.loading ? (
          <Spinner
            class={[
              ['xs', 'sm'].includes(props.size) ? 'h-5' : 'h-6',
              'stroke-2',
            ]}
          />
        ) : (
          <span>{slots.default?.()}</span>
        )}
      </button>
    )
  },
})
