import { LoginData, LoginInput } from './type'
import { post } from '../Fetcher'

export const path = () => `/login`

export const postLogin = (data: LoginInput, throwErr = false) => {
  return post<LoginData>(path(), data)
}
