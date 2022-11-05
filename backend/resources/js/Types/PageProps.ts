import * as Inertia from '@inertiajs/inertia'
import { User } from './User'

export default interface PageProps extends Inertia.Page<Inertia.PageProps> {
  props: {
    errors: Inertia.Errors & Inertia.ErrorBag
    auth: {
      user: User | null
    }
  }
}
