import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { ComponentPropsWithoutRef } from 'react'
import { Dropdown } from './Dropdown'

type T = typeof Dropdown
type Story = ComponentStoryObj<T>

export default {
  component: Dropdown,
  args: { label: 'Dropdown' },
} as ComponentMeta<T>

const links: { label: string; href: string; method: 'post' | 'get'; as: string }[] = [
  {
    label: 'label',
    href: '',
    method: 'post',
    as: 'button',
  },
]

export const Default = () => (
  <div style={{ position: 'relative' }}>
    <Dropdown triggerLabel="trigger" links={links} align="right"></Dropdown>
  </div>
)
export const AlignRight = () => (
  <div style={{ position: 'relative', display: 'flex', justifyContent: 'end' }}>
    <Dropdown triggerLabel="trigger" links={links} align="right"></Dropdown>
  </div>
)
export const AlignLeft = () => (
  <div style={{ position: 'relative', display: 'flex', justifyContent: 'start' }}>
    <Dropdown triggerLabel="trigger" links={links} align="left"></Dropdown>
  </div>
)

export const AlignTop = () => (
  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
    <Dropdown triggerLabel="trigger" links={links} align="top"></Dropdown>
  </div>
)
