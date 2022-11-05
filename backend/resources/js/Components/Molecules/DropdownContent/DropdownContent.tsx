import { ReactNode } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import { Transition } from '@headlessui/react'

type Props = {
  align?: 'right' | 'left' | 'top'
  width?: string
  contentClasses?: string
  children: ReactNode
  open: boolean
  onClose: () => void
}

export const DropdownContent = ({ align = 'top', contentClasses, children, open, onClose }: Props) => {
  return (
    <>
      <Transition
        className={styles.transition}
        show={open}
        enter={styles.enter}
        enterFrom={styles.enterFrom}
        enterTo={styles.enterTo}
        leave={styles.leave}
        leaveFrom={styles.leaveFrom}
        leaveTo={styles.leaveTo}
      >
        {open && (
          <div className={clsx(styles.container, styles[align])} onClick={onClose}>
            <div className={clsx(styles.content, contentClasses)}>{children}</div>
          </div>
        )}
      </Transition>
    </>
  )
}
