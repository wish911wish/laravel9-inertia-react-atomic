import { createContext, ReactNode, useContext } from 'react'
import { BasicPortal } from './BasicPortal'
import { usePortal } from './usePortal'

const PortalDispatchContext = createContext<{
  showPortal: (renderNode: () => ReactNode) => void
  hidePortal: () => void
}>({
  showPortal: () => null,
  hidePortal: () => {},
})
const PortalStateContext = createContext({} as ReactNode)

export function usePortalDispatch() {
  return useContext(PortalDispatchContext)
}

export const PortalContextProvider = ({ children }: { children: ReactNode }) => {
  const { showPortal, hidePortal, isShowPortal, renderNode } = usePortal()
  return (
    <PortalDispatchContext.Provider value={{ showPortal, hidePortal }}>
      <PortalStateContext.Provider value={isShowPortal}>
        {children}
        {isShowPortal && <BasicPortal>{renderNode()}</BasicPortal>}
        <div id="portal-root" />
      </PortalStateContext.Provider>
    </PortalDispatchContext.Provider>
  )
}
