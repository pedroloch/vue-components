import { Color } from '@/colors'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { defineComponent, PropType, ref } from 'vue'

interface SwitchOption {
  value: boolean | number | string
  label?: string | (() => JSX.Element)
  color?: Color
}

export default defineComponent({
  name: 'PSwitch',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
    },
    options: {
      type: Array as unknown as PropType<[SwitchOption, SwitchOption]>,
    },
  },
  setup(props, { emit }) {
    const trueVal = props.options ? props.options[0].value : true

    const getChecked = () => {
      const val = trueVal === props.modelValue
      return val
    }

    const handleUpdate = () => {
      const val =
        props.modelValue === trueVal
          ? props.options
            ? props.options[1].value
            : false
          : trueVal

      emit('update:modelValue', val)
    }

    const renderLabel = () => {
      if (!props.options) return ''

      const option = props.options.find(
        (o) => o.value === props.modelValue
      )?.label

      if (!option) return ''

      if (typeof option === 'string') return option
      return option?.()
    }

    return () => (
      <SwitchGroup>
        <div class="flex items-center space-x-2 w-min">
          <SwitchLabel>{renderLabel()}</SwitchLabel>
          <Switch
            //@ts-ignore
            checked={getChecked()}
            onUpdate:modelValue={handleUpdate}
            //@ts-ignore
            class={[
              'relative inline-flex flex-shrink-0 h-[28px] w-[52px] border-2 border-opacity-0 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
              getChecked() ? 'bg-green-500' : 'bg-red-500',
            ]}
          >
            <span class="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              class={`pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 ${
                getChecked() ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></span>
          </Switch>
        </div>
      </SwitchGroup>
    )
  },
})
