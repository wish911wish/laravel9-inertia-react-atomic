import clsx from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styles from './styles.module.css'

export const NavLink = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<'a'> & { active?: boolean }>(function NavLinkBase(
  { className, active, ...props },
  ref,
) {
  return <a {...props} ref={ref} className={clsx(className, styles.module)} aria-selected={active} />
})
