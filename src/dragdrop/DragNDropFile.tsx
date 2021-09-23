import { defineComponent, PropType, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'DragNDropFile',
  emits: ['update:modelValue', 'missingFile', 'invalidFile'],
  props: {
    modelValue: {
      type: Object as PropType<File>,
    },
    accept: {
      type: Array as PropType<string[]>,
    },
  },
  setup(props, { emit, slots }) {
    const state = ref<'dragging' | 'unset' | 'invalid' | 'valid'>('unset')

    const setStateUnset = () => {
      state.value = 'unset'
    }

    watchEffect(() => {
      if (!props.modelValue) state.value = 'unset'
    })

    const dropFile = (event: DragEvent) => {
      event.preventDefault()
      const file = event.dataTransfer?.files[0]
      if (!file) return emit('missingFile')

      const ext = file.name.split('.').pop()

      if (props.accept && ext && !props.accept.includes(ext)) {
        emit('invalidFile', setStateUnset)
        state.value = 'invalid'
        return
      }

      emit('update:modelValue', file)
      state.value = 'valid'
    }
    const dragOver = (e: DragEvent) => {
      e.preventDefault()
      state.value = 'dragging'
    }
    const dragLeave = () => {
      state.value = 'unset'
    }

    return () => (
      <div onDrop={dropFile} onDragover={dragOver} onDragleave={dragLeave}>
        {slots.default?.({ state: state.value })}
      </div>
    )
  },
})
