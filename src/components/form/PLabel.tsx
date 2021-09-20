import tooltips from '@/directives/tooltips'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SLabel',
  props: {
    helper: String,
    required: Boolean,
  },
  directives: {
    tooltip: tooltips,
  },
  setup(props, { slots }) {
    return () => (
      <span class="p-label text-left text-sm px-1 flex items-center dark:text-white justify-between">
        <div class="space-x-1 flex items-start">
          <span>{slots.default?.()}</span>
          {props.required && (
            <span v-tooltip="Required" class="cursor-help text-red-500">
              *️
            </span>
          )}
        </div>
        {props.helper && (
          <div v-tooltip={props.helper}>
            <span class="bg-black h-4 w-4 flex justify-center items-center rounded-full text-white font-bold text-xs cursor-help flex-none">
              ?
            </span>
          </div>
        )}
      </span>
    )
  },
})
