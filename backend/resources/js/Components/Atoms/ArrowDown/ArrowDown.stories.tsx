import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { ArrowDown } from './ArrowDown'

type T = typeof ArrowDown
type Story = ComponentStoryObj<T>

export default {
  component: ArrowDown,
} as ComponentMeta<T>

export const Default: Story = {}
