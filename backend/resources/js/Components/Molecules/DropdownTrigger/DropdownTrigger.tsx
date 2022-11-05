import { ComponentPropsWithoutRef } from 'react'
import { ArrowDown } from '../../Atoms/ArrowDown'
import styles from './styles.module.css'
import clsx from 'clsx'

type Props = ComponentPropsWithoutRef<'button'> & {
  open: boolean
  toggleOpen: () => void
  setClose: () => void
}

export const DropdownTrigger = ({ children, className, open, setClose, toggleOpen, ...props }: Props) => {
  return (
    <>
      <span className={styles.container}>
        <button onClick={() => toggleOpen()} className={clsx(styles.button, className)} type="button">
          {children}

          <ArrowDown className={styles.arrow} />
        </button>
      </span>
      {open && <div className={styles.contentsBackground} onClick={() => setClose()}></div>}
    </>
  )
}
