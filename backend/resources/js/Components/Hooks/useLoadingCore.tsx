import { useReducer, useCallback } from 'react'

export type State = {
  isLoading: boolean
}
const initialStateFactory = (initialState?: Partial<State>): State => ({
  isLoading: false,
  ...initialState,
})
function reducer(state: State, action: { type: 'SET'; payload: State }): State {
  return { ...state, ...action.payload }
}
export function useLoadingCore(initialState?: Partial<State>) {
  const [state, dispatch] = useReducer(reducer, initialStateFactory(initialState))
  const setLoading = useCallback(
    (loading: boolean) => {
      dispatch({ type: 'SET', payload: { isLoading: loading } })
    },
    [dispatch],
  )
  return {
    state,
    setLoading,
  } as const
}
