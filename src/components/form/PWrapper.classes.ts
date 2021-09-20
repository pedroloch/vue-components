import { Color } from '@/colors'

export const getFocusClass = (color: Color) => `focus-within:text-${color}`

export const getFocusWithinClass = (color: Color) =>
  `focus-within:border-${color}-500 focus-within:ring-${color}-50 focus-within:ring-2`

export const statusClass = {
  success: 'text-green-500 border-green-500',
  warning: 'text-yellow-500 border-yellow-500',
  error: 'text-red-500 border-red-500',
}
