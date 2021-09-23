export const shades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const

export type Shade = typeof shades[number]

export const getLightenShade = (shade: Shade) => {
  if (shade === '100') return '50'
  return (+shade - 100).toString()
}
