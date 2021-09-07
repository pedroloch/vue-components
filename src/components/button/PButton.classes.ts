import colors from '@/colors'
import { ColorClass, SizeClass } from './PButton.types'

export const colorClass: ColorClass = {
  black: 'bg-black-500 hover:bg-black-400 focus:ring-black-200 text-white',
  white: 'bg-white-500 hover:bg-white-400 focus:ring-white-200 text-white',
  rose: 'bg-rose-500 hover:bg-rose-400 focus:ring-rose-200 text-white',
  pink: 'bg-pink-500 hover:bg-pink-400 focus:ring-pink-200 text-white',
  fuchsia:
    'bg-fuchsia-500 hover:bg-fuchsia-400 focus:ring-fuchsia-200 text-white',
  purple: 'bg-purple-500 hover:bg-purple-400 focus:ring-purple-200 text-white',
  violet: 'bg-violet-500 hover:bg-violet-400 focus:ring-violet-200 text-white',
  indigo: 'bg-indigo-500 hover:bg-indigo-400 focus:ring-indigo-200 text-white',
  blue: 'bg-blue-500 hover:bg-blue-400 focus:ring-blue-200 text-white',
  sky: 'bg-sky-500 hover:bg-sky-400 focus:ring-sky-200 text-white',
  cyan: 'bg-cyan-500 hover:bg-cyan-400 focus:ring-cyan-200 text-white',
  teal: 'bg-teal-500 hover:bg-teal-400 focus:ring-teal-200 text-white',
  emerald:
    'bg-emerald-500 hover:bg-emerald-400 focus:ring-emerald-200 text-white',
  green: 'bg-green-500 hover:bg-green-400 focus:ring-green-200 text-white',
  lime: 'bg-lime-500 hover:bg-lime-400 focus:ring-lime-200 text-white',
  yellow: 'bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-200 text-white',
  amber: 'bg-amber-500 hover:bg-amber-400 focus:ring-amber-200 text-white',
  orange: 'bg-orange-500 hover:bg-orange-400 focus:ring-orange-200 text-white',
  red: 'bg-red-500 hover:bg-red-400 focus:ring-red-200 text-white',
  warmGray:
    'bg-warmGray-500 hover:bg-warmGray-400 focus:ring-warmGray-200 text-white',
  trueGray:
    'bg-trueGray-500 hover:bg-trueGray-400 focus:ring-trueGray-200 text-white',
  gray: 'bg-gray-500 hover:bg-gray-400 focus:ring-gray-200 text-white',
  coolGray:
    'bg-coolGray-500 hover:bg-coolGray-400 focus:ring-coolGray-200 text-white',
  blueGray:
    'bg-blueGray-500 hover:bg-blueGray-400 focus:ring-blueGray-200 text-white',
  brand: 'bg-brand-500 hover:bg-brand-400 focus:ring-brand-200 text-white',
}

export const outlineClass: ColorClass = {
  black:
    'border border-black-500 text-black-500 hover:bg-black-500 focus:ring-black-200 hover:text-white',
  white:
    'border border-white-500 text-white-500 hover:bg-white-500 focus:ring-white-200 hover:text-white',
  rose: 'border border-rose-500 text-rose-500 hover:bg-rose-500 focus:ring-rose-200 hover:text-white',
  pink: 'border border-pink-500 text-pink-500 hover:bg-pink-500 focus:ring-pink-200 hover:text-white',
  fuchsia:
    'border border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 focus:ring-fuchsia-200 hover:text-white',
  purple:
    'border border-purple-500 text-purple-500 hover:bg-purple-500 focus:ring-purple-200 hover:text-white',
  violet:
    'border border-violet-500 text-violet-500 hover:bg-violet-500 focus:ring-violet-200 hover:text-white',
  indigo:
    'border border-indigo-500 text-indigo-500 hover:bg-indigo-500 focus:ring-indigo-200 hover:text-white',
  blue: 'border border-blue-500 text-blue-500 hover:bg-blue-500 focus:ring-blue-200 hover:text-white',
  sky: 'border border-sky-500 text-sky-500 hover:bg-sky-500 focus:ring-sky-200 hover:text-white',
  cyan: 'border border-cyan-500 text-cyan-500 hover:bg-cyan-500 focus:ring-cyan-200 hover:text-white',
  teal: 'border border-teal-500 text-teal-500 hover:bg-teal-500 focus:ring-teal-200 hover:text-white',
  emerald:
    'border border-emerald-500 text-emerald-500 hover:bg-emerald-500 focus:ring-emerald-200 hover:text-white',
  green:
    'border border-green-500 text-green-500 hover:bg-green-500 focus:ring-green-200 hover:text-white',
  lime: 'border border-lime-500 text-lime-500 hover:bg-lime-500 focus:ring-lime-200 hover:text-white',
  yellow:
    'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 focus:ring-yellow-200 hover:text-white',
  amber:
    'border border-amber-500 text-amber-500 hover:bg-amber-500 focus:ring-amber-200 hover:text-white',
  orange:
    'border border-orange-500 text-orange-500 hover:bg-orange-500 focus:ring-orange-200 hover:text-white',
  red: 'border border-red-500 text-red-500 hover:bg-red-500 focus:ring-red-200 hover:text-white',
  warmGray:
    'border border-warmGray-500 text-warmGray-500 hover:bg-warmGray-500 focus:ring-warmGray-200 hover:text-white',
  trueGray:
    'border border-trueGray-500 text-trueGray-500 hover:bg-trueGray-500 focus:ring-trueGray-200 hover:text-white',
  gray: 'border border-gray-500 text-gray-500 hover:bg-gray-500 focus:ring-gray-200 hover:text-white',
  coolGray:
    'border border-coolGray-500 text-coolGray-500 hover:bg-coolGray-500 focus:ring-coolGray-200 hover:text-white',
  blueGray:
    'border border-blueGray-500 text-blueGray-500 hover:bg-blueGray-500 focus:ring-blueGray-200 hover:text-white',
  brand:
    'border border-brand-500 text-brand-500 hover:bg-brand-500 focus:ring-brand-200 hover:text-white',
}

export const sizeClass: SizeClass = {
  xs: 'h-6 px-2 py-1 text-xs',
  sm: 'h-7 px-2.5 py-1.5 text-sm',
  md: 'h-8 px-3 py-2',
  lg: 'h-10 px-3 py-3 text-lg',
}
