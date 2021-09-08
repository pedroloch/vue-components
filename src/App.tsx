import { defineComponent } from 'vue'
import { PInput } from './components'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <PInput />
      </div>
    )
  },
})
