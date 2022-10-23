import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { ComponentPropsWithoutRef } from 'react'
import { LoginForm } from './index'

type T = typeof LoginForm
type Story = ComponentStoryObj<T>

export default {
  component: LoginForm,
} as ComponentMeta<T>

export const Default: Story = {}
