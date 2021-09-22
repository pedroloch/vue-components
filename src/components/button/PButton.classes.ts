import { Color } from '@/colors'
import { SizeClass } from './PButton.types'

export const getBgClass = (color: Color) =>
  `bg-${color}-500 hover:bg-${color}-400 focus:ring-${color}-200 text-white`

export const getOutlineClass = (color: Color) =>
  `border border-${color}-500 text-${color}-500 hover:bg-${color}-500 focus:ring-${color}-200 hover:text-white`

export const sizeClass: SizeClass = {
  xs: 'h-6 px-2 py-1 text-xs',
  sm: 'h-7 px-2.5 py-1.5 text-sm',
  md: 'h-9 px-3 py-2 text-sm',
  lg: 'h-10 px-3 py-3',
  xl: 'h-12 px-4 py-3.5 text-lg',
}
