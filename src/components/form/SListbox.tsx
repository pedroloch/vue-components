import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@/lib/headlessui/listbox'
import { defineComponent, PropType, ref, Transition } from 'vue'
import Check from '../icons/Check'
import Chevron from '../icons/Chevron'
import DoubleArrow from '../icons/DoubleArrow'
import PWrapper, { wrapperProps } from './PWrapper'

type Options = {
  value: string | number
  label: string | (() => JSX.Element)
}

// const renderOption = (option: string | Options) => {
//   if (typeof option === 'string') return option
//   if (typeof option.label === 'string') return option.label
//   return option.label()
// }

// const renderSelected = (
//   options: (string | Options)[],
//   modelValue: string | number | Date
// ) => {
//   if (options.every((option) => typeof option === 'string')) return modelValue
//   else
//     return (options as Options[])
//       .find((option) => option.value === modelValue)
//       ?.label()
// }

export default defineComponent({
  inheritAttrs: false,
  name: 'SListbox',
  props: {
    ...wrapperProps,
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array as PropType<string[] | Options[]>,
      default: () => [],
    },
    noWrapper: Boolean,
  },
  setup(props, { attrs, emit }) {
    const isStringArray = (options: any[]): options is string[] => {
      return options.some((option) => typeof option === 'string')
    }

    const getButton = (options: string[] | Options[]) => {
      if (isStringArray(options)) return props.modelValue

      const option =
        options.find((o) => {
          return o.value === props.modelValue
        })?.label ?? ''

      if (typeof option === 'string') return option
      return option()
    }

    const getOption = (option: string | Options) => {
      if (typeof option === 'string') return option
      if (typeof option.label === 'string') return option.label
      return option.label()
    }

    const Component = (
      <Listbox
        modelValue={props.modelValue}
        //@ts-ignore
        onUpdate:modelValue={(value) => {
          emit('update:modelValue', value)
        }}
        class='w-full'
      >
        <div class='relative'>
          <ListboxButton class='relative cursor-pointer w-full rounded pl-3 pr-12 py-2 text-left focus:outline-none sm:text-sm'>
            <div> {getButton(props.options)}</div>
            <span class='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <Chevron
                class='h-4 text-gray-400 -rotate-90'
                aria-hidden='true'
              />
            </span>
          </ListboxButton>
          <Transition
            leave-active-class='transition ease-in duration-100'
            leave-from-class='opacity-100'
            leave-to-class='opacity-0'
          >
            <ListboxOptions class='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
              {!props.options.length ? (
                <div class='px-3 py-2 flex justify-center items-center'>
                  No items
                </div>
              ) : (
                props.options.map((option, index) => {
                  return (
                    <ListboxOption
                      as='div'
                      key={index}
                      value={typeof option === 'string' ? option : option.value}
                    >
                      {{
                        default: (slot: {
                          active: boolean
                          selected: boolean
                        }) => {
                          return (
                            <div
                              class={[
                                'px-3 py-2 relative cursor-default select-none ',
                                slot.active
                                  ? 'bg-brand text-white'
                                  : 'hover:bg-brand-100 text-gray-600',
                              ]}
                            >
                              {getOption(option)}
                              <span
                                v-show={slot.selected}
                                class='absolute inset-y-0 right-0 flex items-center pr-3'
                              >
                                <Check class='h-5' />
                              </span>
                            </div>
                          )
                        },
                      }}
                    </ListboxOption>
                  )
                })
              )}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    )

    return props.noWrapper
      ? () => Component
      : () => (
          <PWrapper {...attrs} {...props}>
            {Component}
          </PWrapper>
        )
  },
})