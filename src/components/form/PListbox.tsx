import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { isString } from '@vue/shared'
import { defineComponent, Ref, PropType, Transition, computed, ref } from 'vue'
import Check from '../icons/Check'
import Chevron from '../icons/Chevron'
import DoubleArrow from '../icons/DoubleArrow'
import PWrapper, { wrapperProps } from './PWrapper'

type Options = {
  value: string | number
  label: string | JSX.Element
  selected?: JSX.Element
}

export default defineComponent({
  name: 'PListbox',
  props: {
    ...wrapperProps,
    value: {
      type: Object as PropType<Ref<any>>,
      required: true,
    },
    options: {
      type: Array as PropType<string[] | Options[]>,
      required: true,
    },
    noWrapper: Boolean,
  },
  setup(props, { attrs }) {
    const isStringArray = (options: any[]): options is string[] => {
      return options.some((option) => typeof option === 'string')
    }

    const buttonKey = ref(4808)

    const getComponent = computed(() =>
      isStringArray(props.options)
        ? props.value.value
        : props.options.find((option) => {
            buttonKey.value++
            return option.value === props.value.value
          })?.selected ??
          props.options.find((option) => {
            buttonKey.value++
            return option.value === props.value.value
          })?.label
    )

    const Component = (
      <Listbox
        as='div'
        v-model={props.value.value}
        class={['w-full', props.noWrapper && 'focus:ring-1 focus:ring-brand']}
      >
        <div class='relative'>
          <ListboxButton class='relative cursor-pointer w-full rounded pl-3 pr-12 py-2 text-left focus:outline-none sm:text-sm'>
            <div key={buttonKey.value}> {getComponent.value}</div>
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
              {props.options.map((option, index) => (
                <ListboxOption
                  as='div'
                  key={index}
                  value={typeof option === 'string' ? option : option.value}
                >
                  {{
                    default: ({
                      active,
                      selected,
                    }: {
                      active: boolean
                      selected: boolean
                    }) => (
                      <div
                        class={[
                          'cursor-default select-none relative py-2 pl-1.5',
                          active ? 'text-white bg-brand-500' : 'text-gray-900',
                        ]}
                      >
                        <div class='scale-90'>
                          {typeof option === 'string' ? option : option.label}
                        </div>
                        {selected && (
                          <span
                            class={[
                              active ? 'text-white' : 'text-brand-600',
                              'absolute inset-y-0 right-0 flex items-center pr-2',
                            ]}
                          >
                            <Check class='h-4 w-4' aria-hidden='true' />
                          </span>
                        )}
                      </div>
                    ),
                  }}
                </ListboxOption>
              ))}
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
