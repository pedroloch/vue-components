import PButton from '@/components/button/PButton'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PButtonExample',
  setup() {
    return () => (
      <div class='grid grid-cols-3 border'>
        <div class='col-span-2 flex justify-center items-center border-r p-10'>
          <PButton color='red' outlined>
            Hello
          </PButton>
        </div>
        <div class='flex justify-center items-center p-10'></div>
      </div>
    )
  },
})
