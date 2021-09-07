let index = 0

export const getId = (prefix?: string) => {
  index++
  if (prefix) return `${prefix}-${index}`
  else return `${index}`
}
