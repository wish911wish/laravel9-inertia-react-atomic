import { LoginForm } from '../../Organisms/LoginForm'
import { Alert } from '../../Atoms/Alert'
import styles from './styles.module.css'
import { LoginInput } from '../../../Services/Inertia/Login/type'
import { postLogin } from '../../../Services/Inertia/Login'
import { usePortalDispatch } from '../../Layouts/PortalContextProvider'
import { useLoadingDispatch } from '../../Hooks/LoadingProvider'

type Props = {
  initialValues: LoginInput
}

export const LoginTemplate = ({ initialValues }: Props) => {
  const { showPortal } = usePortalDispatch()
  const { setLoading } = useLoadingDispatch()

  return (
    <main className={styles.main}>
      <LoginForm
        initialValues={initialValues}
        onValid={async (values: LoginInput) => {
          setLoading(true)
          const { data, err } = await postLogin(values)
          if (err) {
            err.status
            showPortal(() => <Alert theme="fail">{err.message}</Alert>)
          }
          setLoading(false)
        }}
      />
    </main>
  )
}
