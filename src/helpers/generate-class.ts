import colors from '@/colors'

const printColorClass = (color: string) =>
  `bg-${color}-500 hover:bg-${color}-400 focus:ring-${color}-200 text-white`

const printOutlineClass = (color: string) =>
  `border border-${color}-500 text-${color}-500 hover:bg-${color}-500 focus:ring-${color}-200 hover:text-white`

const printWrapperFocus = (color: string) => `focus-within:text-${color}`

const printWrapperFocusWithin = (color: string) =>
  `focus-within:border-${color}-500 focus-within:ring-${color}-50 focus-within:ring-2`

const generateColor = (colors: object, printer: (color: string) => string) => {
  const obj = Object.keys(colors).reduce(
    (acc, color) => Object.assign(acc, { [color]: printer(color) }),
    {}
  )

  console.log(obj)
}

generateColor(colors, printWrapperFocusWithin)
