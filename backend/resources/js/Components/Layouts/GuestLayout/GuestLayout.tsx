import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import { PortalContextProvider } from '../PortalContextProvider'
import ApplicationLogo from '../../../Components/Atoms/ApplicationLogo'
import Anchor from '../../../Components/Atoms/Anchor'

type Props = ComponentPropsWithoutRef<'div'>

export const GuestLayout = ({ children }: Props) => {
  return (
    <PortalContextProvider>
      <div className={styles.container}>
        <div>
          <Anchor href="/">
            <ApplicationLogo className={styles.logo} />
          </Anchor>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </PortalContextProvider>
  )
}
