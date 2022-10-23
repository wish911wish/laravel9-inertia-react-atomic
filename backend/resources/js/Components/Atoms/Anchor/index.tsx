import clsx from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

const Anchor = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<'a'>>(function AnchorTextBase({ className, ...props }, ref) {
  return <a {...props} ref={ref} className={clsx(className)} role="link" />
})
export default Anchor
