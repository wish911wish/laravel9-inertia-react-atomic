import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

type Props = ComponentPropsWithoutRef<'header'>

export const Header = ({ className, children, ...props }: Props) => (
  <header {...props} className={clsx(className, styles.header)}>
    <div className={clsx(styles.contents)}>{children}</div>
  </header>
)
