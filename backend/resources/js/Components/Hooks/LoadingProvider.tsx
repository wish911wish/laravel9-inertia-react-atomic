import { createContext, ReactNode, useContext } from 'react'
import { useLoadingCore } from './useLoadingCore'

const LoadingStateContext = createContext<{
  isLoading: boolean
}>({
  isLoading: false,
})
const LoadingDispatchContext = createContext<{
  setLoading: (loading: boolean) => void
}>({
  setLoading: (_: boolean) => {},
})

export function useLoadingDispatch() {
  return useContext(LoadingDispatchContext)
}

export function useLoadingState() {
  return useContext(LoadingStateContext)
}

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const { state, setLoading } = useLoadingCore()

  return (
    <LoadingStateContext.Provider value={state}>
      <LoadingDispatchContext.Provider value={{ setLoading }}>{children}</LoadingDispatchContext.Provider>
    </LoadingStateContext.Provider>
  )
}
