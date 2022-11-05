import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Header } from './Header'

type T = typeof Header
type Story = ComponentStoryObj<T>

export default {
  component: Header,
  args: { children: <h2>header</h2> },
} as ComponentMeta<T>

export const Default: Story = {}
