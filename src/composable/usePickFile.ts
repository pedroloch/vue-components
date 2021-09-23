import { ref, onMounted, onBeforeUnmount } from 'vue'
interface PickOptions {
  accept: string[]
  multiple: boolean
}
export default () => {
  const inputRef = ref<HTMLInputElement | null>(null)
  const files = ref<File[]>([])
  onMounted(() => {
    const input = createInput()
    inputRef.value = input
  })
  // make sure to remove the element if the component is unmounted.
  onBeforeUnmount(() => {
    inputRef.value?.remove()
  })

  function createInput() {
    const input = document.createElement('input')
    input.type = 'file'
    input.hidden = true
    input.className = 'hidden'
    document.body.appendChild(input)
    return input
  }

  function reset() {
    const input = createInput()
    inputRef.value = input
  }

  function openDialog(opts?: Partial<PickOptions>) {
    // skip if the input wasn't mounted yet or was removed
    if (!inputRef.value) {
      files.value = []
      return
    }
    if (opts?.accept) {
      inputRef.value.accept = opts.accept.map((ext) => `.${ext}`).join(',')
    }
    inputRef.value.multiple = opts?.multiple ?? false
    // prepare event listener
    inputRef.value.onchange = (e) => {
      const fileList = (e.target as HTMLInputElement).files
      files.value = fileList ? Array.from(fileList) : []
      // clear the event listener
      if (inputRef.value) {
        inputRef.value.onchange = null
      }
    }
    inputRef.value.click()
  }
  return {
    openDialog,
    files,
    reset,
  }
}
