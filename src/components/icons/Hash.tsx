import { defineComponent } from '@vue/runtime-core'

export default defineComponent(() => {
  return () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
      />
    </svg>
  )
})
