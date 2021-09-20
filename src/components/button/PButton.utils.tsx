import { Slots } from '@vue/runtime-core'
import { Size } from './PButton.types'

export const getSize = (size: Size) =>
  ['xs', 'sm'].includes(size)
    ? 'h-4'
    : ['md'].includes(size)
    ? 'h-5'
    : ['lg'].includes(size)
    ? 'h-6'
    : 'h-7'

export const getCharSize = (slots: Slots, icon: boolean) =>
  typeof slots.default?.()[0].children === 'string'
    ? //@ts-ignore
      slots.default?.()[0].children.length + icon
      ? 4
      : 2
    : 1
