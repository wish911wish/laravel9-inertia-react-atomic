import { Heading } from '../Components/Atoms/Head'
import { AuthenticatedLayout } from '../Components/Layouts/AuthenticatedLayout'
import { AuthenticatedPageProps } from '../Types/AuthenticatedPageProps'

const HomePage = (props: AuthenticatedPageProps) => {
  props.auth.user
  return (
    <AuthenticatedLayout header={<Heading level={2}>header</Heading>} user={props.auth.user}>
      <div>child</div>
    </AuthenticatedLayout>
  )
}

export default HomePage
