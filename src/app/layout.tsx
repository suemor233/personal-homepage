import '../assets/styles/index.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { PropsWithChildren } from 'react'

import { ProgressBar } from '~/components/universal/progressBar'

import { AppRootProviders } from './providers'

const font = localFont({
  src: '../assets/fonts/xiaolai.ttf',
  variable: '--font-xiaolai',
})

export const metadata: Metadata = {
  title: 'Suemor｜个人主页',
  description: '一只正在学习前端的萌新'
}

interface PropsWithSlot extends PropsWithChildren {
  header: React.ReactNode
  footer: React.ReactNode
}

export default function RootLayout({
  children,
  footer,
  header,
}: PropsWithSlot) {
  return (
    <html lang="zh" className={`${font.variable}`}>
      <body>
        <AppRootProviders>
          {header}
          {children}
          {footer}
          <ProgressBar />
          <div className="bg-[url('/background.png')] fixed inset-0 -z-10 opacity-25 bg-cover bg-center" />
        </AppRootProviders>
      </body>
    </html>
  )
}
