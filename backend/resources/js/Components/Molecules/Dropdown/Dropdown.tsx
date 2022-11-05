import { useState } from 'react'
import { DropdownContent } from '../DropdownContent'
import { DropdownLink } from '../DropdownLink'
import { DropdownTrigger } from '../DropdownTrigger'
import styles from './styles.module.css'

type Props = {
  triggerLabel: string
  links: {
    label: string
    href: string
    method: 'post' | 'get'
    as: string
  }[]
  align?: 'right' | 'left' | 'top'
}

export const Dropdown = ({ triggerLabel, links, align = 'top' }: Props) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((previousState) => !previousState)
  }

  return (
    <div className={styles.container}>
      <DropdownTrigger open={open} setClose={() => setOpen(false)} toggleOpen={toggleOpen}>
        {triggerLabel}
      </DropdownTrigger>
      <DropdownContent align={align} open={open} onClose={() => setOpen(false)}>
        {links.map((link) => (
          <DropdownLink href={link.href} method={link.method}>
            {link.label}
          </DropdownLink>
        ))}
      </DropdownContent>
    </div>
  )
}
