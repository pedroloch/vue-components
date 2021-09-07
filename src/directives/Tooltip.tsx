import { defineComponent, PropType } from 'vue'

const placementClass = {
  top: 'bottom-full transform -translate-y-1 inset-x-0',
  bottom: 'top-full transform translate-y-2 left-0',
  left: 'right-full transform -translate-x-1 inset-y-0',
  right: 'left-full transform translate-x-1 inset-y-0',
}

export type TooltipPlacement = keyof typeof placementClass

export default defineComponent({
  props: {
    text: String,
    placement: {
      type: String as PropType<TooltipPlacement>,
      default: 'top',
    },
  },
  setup(props) {
    return () => (
      <div
        class={[
          'justify-center absolute items-center hidden group-hover:flex',
          placementClass[props.placement],
        ]}
      >
        <div class='bg-black text-white text-xs px-1.5 py-1 rounded z-10 flex justify-center items-center whitespace-nowrap'>
          {props.text}
        </div>
        {/* <div class='bg-black h-2.5 w-2.5 absolute -right-1 transform rotate-45'></div> */}
      </div>
    )
  },
})
