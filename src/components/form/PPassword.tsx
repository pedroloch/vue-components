import { defineComponent, ref } from 'vue'
import Eye from '../icons/Eye'
import EyeOff from '../icons/EyeOff'
import PInput, { pInputProps } from './PInput'
import { wrapperProps } from './PWrapper'

export default defineComponent({
  name: 'PPasword',
  props: {
    ...wrapperProps,
    ...pInputProps,
  },
  setup(props, { attrs, slots }) {
    const showPass = ref(false)
    const toggleShowPass = () => {
      showPass.value = !showPass.value
    }

    return () => (
      <PInput
        {...attrs}
        {...props}
        type={showPass.value ? undefined : 'password'}
        append={
          <div class="px-3" onClick={toggleShowPass}>
            {slots.toggler?.(showPass.value) ??
              (showPass.value ? <EyeOff class="h-5" /> : <Eye class="h-5" />)}
          </div>
        }
      />
    )
  },
})
