import { TextBox } from '../../Atoms/TextBox'
import Txt, { WarningTxt } from '../../Atoms/Txt'
import { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

type Props = {
  className?: string
  titleLevel?: 3 | 4 | 5 | 6
  type?: string
  labelProps: Omit<ComponentPropsWithoutRef<'label'>, 'htmlFor' | 'className'>
  textboxProps?: Omit<ComponentPropsWithRef<'input'>, 'id'>
  description?: string
  error?: string
}

const TextBoxWithTitle = ({
  className,
  titleLevel = 3,
  type = 'text',
  labelProps: { children, ...labelProps },
  textboxProps,
  description,
  error,
}: Props) => {
  return (
    <div className={clsx(className, styles.module)}>
      <label {...labelProps}>
        <span role="heading" aria-level={titleLevel} className={styles.title}>
          {children}
        </span>
        <TextBox {...textboxProps} className={clsx(textboxProps?.className, styles.textbox)} type={type} aria-invalid={!!error} />
      </label>
      <div className={styles.bottom}>
        {description && <Txt>{description}</Txt>}
        {error && <WarningTxt className={styles.error}>{error}</WarningTxt>}
      </div>
    </div>
  )
}

export default TextBoxWithTitle
