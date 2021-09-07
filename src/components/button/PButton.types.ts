import { Color } from '@/types'

export type Size = 'xs' | 'sm' | 'md' | 'lg'

export type ColorClass = Partial<Record<Color, string>>
export type SizeClass = Partial<Record<Size, string>>
