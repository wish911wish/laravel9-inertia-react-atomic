import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Button, PrimaryButton, WarningButton } from './Button'

type T = typeof Button
type Story = ComponentStoryObj<T>

export default {
  component: Button,
  args: { children: '送信する' },
} as ComponentMeta<T>

export const Default: Story = {}
export const Primary = () => <PrimaryButton>送信する</PrimaryButton>
export const Warning = () => <WarningButton>送信する</WarningButton>
