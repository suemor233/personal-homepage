import type { FC, PropsWithChildren } from 'react'
import { Provider as BalancersProvider } from 'react-wrap-balancer'

export const AppRootProviders: FC<PropsWithChildren> = ({ children }) => {
  return <BalancersProvider>{children}</BalancersProvider>
}
