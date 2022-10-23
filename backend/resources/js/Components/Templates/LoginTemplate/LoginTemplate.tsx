import { LoginForm } from '../../Organisms/LoginForm'
import { Alert } from '../../Atoms/Alert'
import styles from './styles.module.css'
import { LoginInput } from '../../../Services/Api/Login/type'
import { postLogin } from '../../../Services/Api/Login'
import { usePortalDispatch } from '../../Layouts/PortalContextProvider'

type Props = {
  initialValues: LoginInput
}

export const LoginTemplate = ({ initialValues }: Props) => {
  const { showPortal } = usePortalDispatch()

  return (
    <main className={styles.main}>
      <LoginForm
        initialValues={initialValues}
        onValid={async (values: LoginInput) => {
          const { data, err } = await postLogin(values)
          if (err) {
            err.status
            showPortal(() => <Alert theme="fail">{err.message}</Alert>)
          }
        }}
      />
    </main>
  )
}
