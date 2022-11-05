import { ComponentPropsWithoutRef, ReactElement } from 'react'
import styles from './styles.module.css'
import { Header } from '../../Atoms/Header'
import ApplicationLogo from '../../Atoms/ApplicationLogo'
import { Dropdown } from '../../Molecules/Dropdown'
import { NavLink } from '../../Atoms/NavLink'
import { Link } from '@inertiajs/inertia-react'
import { User } from '../../../Types/User'
import route from 'ziggy-js'
import clsx from 'clsx'

type Props = ComponentPropsWithoutRef<'div'> & {
  header?: ReactElement
  user: User
}

export const AuthenticatedLayout = ({ children, header, user }: Props) => {
  return (
    <div className={clsx(styles.container)}>
      <nav className={styles.nav}>
        <div className={styles.navContents}>
          <div className={styles.navLeftSide}>
            <div className={styles.logoContainer}>
              <Link href="/">
                <ApplicationLogo className={styles.logo} />
              </Link>
            </div>

            <div className={styles.navLinkContainer}>
              <NavLink href="/dashboard" active={route().current('dashboard')}>
                Dashboard
              </NavLink>
              <NavLink href="/home" active={route().current('home')}>
                Home
              </NavLink>
            </div>
          </div>

          <div className={styles.navRightSide}>
            <Dropdown
              triggerLabel={user.name}
              links={[
                {
                  label: 'Log out',
                  href: route('logout'),
                  method: 'post',
                  as: 'button',
                },
              ]}
              align="right"
            />
          </div>
        </div>
      </nav>
      {header && <Header>{header}</Header>}
      <main>{children}</main>
    </div>
  )
}
