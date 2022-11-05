import { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction, ReactElement } from 'react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { DropdownContent } from './DropdownContent'

type T = typeof DropdownContent
type Story = ComponentStoryObj<T>

export default {
  component: DropdownContent,
  args: { children: 'DropdownContent' },
} as ComponentMeta<T>

export const Default = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <div onClick={() => setOpen(true)}>trigger</div>
      <DropdownContent open={open} onClose={() => setOpen(false)}>
        DropdownContent
      </DropdownContent>
    </div>
  )
}

export const alignLeft = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <div onClick={() => setOpen(true)}>trigger</div>
      <DropdownContent open={open} onClose={() => setOpen(false)} align="left">
        DropdownContent Left
      </DropdownContent>
    </div>
  )
}

export const alignRight = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <div onClick={() => setOpen(true)}>trigger</div>
      <DropdownContent open={open} onClose={() => setOpen(false)} align="right">
        DropdownContent right
      </DropdownContent>
    </div>
  )
}
