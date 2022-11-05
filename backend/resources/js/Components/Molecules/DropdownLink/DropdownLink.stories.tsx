import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { DropdownLink } from './DropdownLink'

type T = typeof DropdownLink
type Story = ComponentStoryObj<T>

export default {
  component: DropdownLink,
  args: { children: 'DropdownLink', href: '', method: 'get' },
} as ComponentMeta<T>

export const Default: Story = {}
