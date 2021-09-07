import { createVNode, DirectiveBinding, render } from 'vue'
import Tooltip, { TooltipPlacement } from './Tooltip'

export default (
  el: HTMLElement,
  bind: DirectiveBinding<string | { text: string; placement: TooltipPlacement }>
) => {
  let text: string
  let placement = 'top'
  if (typeof bind.value === 'string') text = bind.value
  else {
    text = bind.value.text
    placement = bind.value.placement
  }

  el.classList.add('relative', 'group')

  const tooltip = createVNode(Tooltip, { text, placement })
  render(tooltip, el)
}
