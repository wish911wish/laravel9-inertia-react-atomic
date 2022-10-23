import TextBoxWithTitle from '../../Molecules/TextBoxWithTitle'
import Txt, { WarningTxt } from '../../Atoms/Txt'
import { ComponentPropsWithoutRef } from 'react'
import { PrimaryButton, Button } from '../../Atoms/Button'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginInputSchema } from '../../../Services/Api/Login/schema'

type Values = {
  email: string
  password: string
}

type Props = {
  initialValues?: Partial<Values>
  onValid: (values: Values) => Promise<void>
  serverError?: string
}

const defaultValues: Values = {
  email: '',
  password: '',
}

export const LoginForm = ({ initialValues, onValid }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...defaultValues, ...initialValues },
    resolver: zodResolver(LoginInputSchema),
  })

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <TextBoxWithTitle
        className={styles.textbox}
        labelProps={{ children: 'Email' }}
        textboxProps={{
          ...register('email'),
          placeholder: '',
        }}
        error={errors.email?.message}
      />
      <TextBoxWithTitle
        className={styles.textbox}
        labelProps={{ children: 'Password' }}
        type="password"
        textboxProps={{
          ...register('password'),
          placeholder: '',
        }}
        error={errors.password?.message}
      />
      <WarningTxt></WarningTxt>
      <Button>Log in</Button>
    </form>
  )
}
