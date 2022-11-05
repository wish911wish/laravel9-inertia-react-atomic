import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { ComponentPropsWithoutRef } from 'react'
import { DropdownTrigger } from './DropdownTrigger'

type T = typeof DropdownTrigger
type Story = ComponentStoryObj<T>

export default {
  component: DropdownTrigger,
  args: { children: 'DropdownTrigger' },
} as ComponentMeta<T>

export const Default: Story = {}
