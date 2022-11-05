import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Alert } from './Alert'

type T = typeof Alert
type Story = ComponentStoryObj<T>

export default {
  component: Alert,
  args: { children: '成功しました' },
} as ComponentMeta<T>

export const Success: Story = { args: { theme: 'success' } }
export const Fail: Story = { args: { theme: 'fail' } }
