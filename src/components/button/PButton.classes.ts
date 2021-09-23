import { Color } from '../../colors'
import { getLightenShade, Shade } from '../../helpers/shades'
import { SizeClass } from './PButton.types'

export const getBgClass = (color: Color, shade: Shade) =>
  `bg-${color}-${shade} hover:bg-${color}-${getLightenShade(
    shade
  )} focus:ring-${color}-${shade} text-white`

export const getOutlineClass = (color: Color, shade: Shade) =>
  `border border-${color}-${shade} text-${color}-${shade} hover:bg-${color}-${shade} focus:ring-${color}-${shade} hover:text-white`

export const sizeClass: SizeClass = {
  xs: 'h-6 px-2 py-1 text-xs',
  sm: 'h-7 px-2.5 py-1.5 text-sm',
  md: 'h-10 px-3 py-2 text-sm',
  lg: 'h-10 px-3 py-3',
  xl: 'h-12 px-4 py-3.5 text-lg',
}
