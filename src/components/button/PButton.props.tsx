import { FlexComponent } from '@/helpers/render-component'
import { Color } from '@/types'
import { Component, PropType } from '@vue/runtime-core'
import { Size } from './PButton.types'

export default {
  color: { type: String as PropType<Color>, default: 'blue' },
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
}
