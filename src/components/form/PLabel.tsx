import tooltips from '@/directives/tooltips'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SLabel',
  props: {
    helper: String,
    required: Boolean,
    for: { type: String, required: true },
  },
  directives: {
    tooltip: tooltips,
  },
  setup(props, { slots }) {
    return () => (
      <label
        for={props.for}
        class={[
          'text-left text-sm px-1 flex items-center dark:text-white justify-between',
        ]}
      >
        <div class='space-x-1 flex items-start'>
          <span>{slots.default?.()}</span>
          {props.required && (
            <span v-tooltip='Required' class='cursor-help text-red-500'>
              *️
            </span>
          )}
        </div>

        {props.helper && (
          <div v-tooltip={props.helper}>
            <span class='bg-black h-4 w-4 flex justify-center items-center rounded-full text-white font-bold text-xs cursor-help flex-none'>
              ?
            </span>
          </div>
        )}
      </label>
    )
  },
})
