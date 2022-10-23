import { LoginTemplate } from '../Components/Templates/LoginTemplate'
import { GuestLayout } from '../Components/Layouts/GuestLayout'

const LoginPage = () => {
  return (
    <GuestLayout>
      <LoginTemplate initialValues={{ password: '', email: '' }} />
    </GuestLayout>
  )
}

export default LoginPage
