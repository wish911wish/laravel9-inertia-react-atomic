import { ReactNode } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import { Link } from '@inertiajs/inertia-react'

type Props = {
  href: string
  method: 'post' | 'get'
  children: ReactNode
}

export const DropdownLink = ({ href, method = 'post', children }: Props) => {
  return (
    <Link href={href} method={method} as="a" className={clsx(styles.module)}>
      {children}
    </Link>
  )
}
