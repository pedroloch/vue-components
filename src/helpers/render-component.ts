import { Component, createVNode, isVNode, VNodeProps } from '@vue/runtime-core'

export type FlexComponent = string | Component | JSX.Element

export const renderComponent = (
  component: FlexComponent,
  props?: (Record<string, unknown> & VNodeProps) | null
) =>
  typeof component === 'string' || isVNode(component)
    ? component
    : createVNode(component, props)
