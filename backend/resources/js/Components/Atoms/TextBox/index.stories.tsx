import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { TextBox } from './index'

type T = typeof TextBox
type Story = ComponentStoryObj<T>

export default {
  component: TextBox,
} as ComponentMeta<T>

export const Default: Story = {}
