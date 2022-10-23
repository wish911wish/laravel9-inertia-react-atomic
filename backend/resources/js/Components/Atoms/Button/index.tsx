import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

type Type = 'default' | 'primary' | 'warning'
type Props = ComponentPropsWithoutRef<'button'>

const buttonFactory =
  (type: Type) =>
  ({ children, ...props }: Props) =>
    (
      <button {...props} className={clsx(styles.button, styles[type])}>
        {children}
      </button>
    )

export const Button = buttonFactory('default')
export const PrimaryButton = buttonFactory('primary')
export const WarningButton = buttonFactory('warning')

export default Button
