import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { LoginTemplate } from './index'

type T = typeof LoginTemplate
type Story = ComponentStoryObj<T>

export default {
  component: LoginTemplate,
} as ComponentMeta<T>

export const Default: Story = {}
