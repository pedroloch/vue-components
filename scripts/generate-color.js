const fs = require('fs')
const path = require('path')
const safeListPath = path.resolve(__dirname, '../safelist.txt')

const color = process.argv[2]
const mode = process.argv[3] || 'create'

if (color === 'filter') {
  const safeList = readSafeList().split(' ')
  const set = new Set(safeList)
  const filtered = [...set].join(' ')
  fs.writeFileSync(safeListPath, filtered)
  return
}

if (!color.includes('color')) throw Error('Insert the placeholder color')

const colors = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'gray',
  'brand',
  'mix',
]

function readSafeList() {
  return fs.readFileSync(safeListPath, 'utf-8')
}

const generateClasses = () =>
  colors.map((c) => color.replace(new RegExp('color', 'g'), c))

const writeClasses = () => {
  const safeList = readSafeList().split(' ')
  const classes = generateClasses()
  const classesToWrite = classes.filter((c) => !safeList.includes(c)).join(' ')
  fs.appendFileSync(safeListPath, ` ${classesToWrite}`)
}

const removeClasses = () => {
  const classes = generateClasses()
  const safeList = readSafeList().split(' ')
  const newText = safeList.filter((c) => !classes.includes(c)).join(' ')
  fs.writeFileSync(safeListPath, newText)
}

if (mode === 'create') writeClasses()
if (mode === 'rm') removeClasses()
