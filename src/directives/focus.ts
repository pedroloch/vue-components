import { nextTick } from 'vue'

export default {
  mounted(el: HTMLElement) {
    const input = el.tagName === 'INPUT' ? el : el.querySelector('input')

    nextTick(() => {
      input?.focus()
    })
  },
}
