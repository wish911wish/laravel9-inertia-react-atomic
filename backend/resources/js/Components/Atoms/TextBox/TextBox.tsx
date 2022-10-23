import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

export const TextBox = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(({ className, type = 'text', ...props }, ref) => (
  <input type={type} {...props} ref={ref} className={clsx(styles.textbox, className)} />
))
