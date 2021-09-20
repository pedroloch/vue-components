import { Color } from '@/types'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ColorClass = Partial<Record<Color, string>>
export type SizeClass = Partial<Record<Size, string>>
