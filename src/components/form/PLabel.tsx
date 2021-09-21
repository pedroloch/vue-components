import tooltips from '@/directives/tooltips'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PLabel',
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
        class="p-label text-left text-sm px-1 flex items-center justify-between"
      >
        <div class="space-x-1 flex items-center">
          <span>{slots.default?.()}</span>
          {props.required && (
            <div
              v-tooltip={{ placement: 'right', text: 'Required' }}
              class="h-3 w-2 text-lg flex justify-center items-center text-red-600 mb-1"
            >
              *
            </div>
          )}
        </div>
        {props.helper && (
          <div v-tooltip={props.helper}>
            <span class="bg-black h-4 w-4 flex justify-center items-center rounded-full text-white font-bold text-xs cursor-help flex-none">
              ?
            </span>
          </div>
        )}
      </label>
    )
  },
})
