import * as Inertia from '@inertiajs/inertia'
import { User } from './User'

export interface AuthenticatedPageProps {
  errors: Inertia.Errors & Inertia.ErrorBag
  auth: {
    user: User
  }
}
