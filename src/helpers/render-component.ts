import { Component, createVNode, isVNode, VNodeProps } from '@vue/runtime-core'

export const renderComponent = (
  component: string | Component | JSX.Element,
  props?: (Record<string, unknown> & VNodeProps) | null
) =>
  typeof component === 'string' || isVNode(component)
    ? component
    : createVNode(component, props)
