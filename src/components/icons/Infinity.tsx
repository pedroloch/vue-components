import { defineComponent } from 'vue'

export default defineComponent(() => {
  return () => (
    <svg viewBox='0 0 92 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M20.3 1C7.4 1 1 14.3 1 21C1 27.7 7.4 41 20.3 41C39.6 41 52.4 1 71.7 1C84.6 1 91 14.3 91 21C91 27.7 84.6 41 71.7 41C52.4 41 39.6 1 20.3 1Z'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-dasharray='42.76 42.76'
      />
      <animate
        attributeName='stroke-dashoffset'
        repeatCount='indefinite'
        dur='1s'
        keyTimes='0;1'
        values='0;256.58892822265625'
      ></animate>
    </svg>
  )
})
