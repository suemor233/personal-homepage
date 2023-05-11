'use client'

import { ThemeProvider } from 'next-themes'
import type { FC, PropsWithChildren } from 'react'
import { Provider as BalancersProvider } from 'react-wrap-balancer'

export const AppRootProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <BalancersProvider>{children}</BalancersProvider>
    </ThemeProvider>
  )
}
