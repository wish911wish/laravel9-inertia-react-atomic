import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { NavLink } from './NavLink'

type T = typeof NavLink
type Story = ComponentStoryObj<T>

export default {
  component: NavLink,
  args: { children: 'NavLink', href: '/example' },
} as ComponentMeta<T>

export const Default: Story = {}
export const Selected: Story = {
  args: { active: true },
}

export const Primary = () => (
  <NavLink active={true} href="/">
    送信する
  </NavLink>
)
