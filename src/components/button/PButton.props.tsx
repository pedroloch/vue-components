import { Color } from '@/colors'
import { FlexComponent } from '@/helpers/render-component'
import { Shade } from '@/helpers/shades'
import { PropType } from '@vue/runtime-core'
import { Size } from './PButton.types'

export default {
  color: { type: String as PropType<Color>, default: 'blue' },
  colorShade: {
    type: String as PropType<Shade>,
    default: '500',
  },
  outlined: Boolean,
  pill: Boolean,
  disabled: Boolean,
  loading: Boolean,
  block: Boolean,
  success: Boolean,
  error: Boolean,
  size: {
    type: String as PropType<Size>,
    default: 'md',
  },
  icon: {
    type: Object as PropType<FlexComponent>,
  },
  progress: {
    type: Number,
    validator: (value: number) => value >= 0 && value <= 100,
  },
  onClick: Function as PropType<(e: MouseEvent) => void>,
}
