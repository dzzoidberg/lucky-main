// @ts-nocheck
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Amatic_SC, Neucha } from 'next/font/google'
import './globals.css'

const amatic = Amatic_SC({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-amatic',
})

const neucha = Neucha({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-neucha',
})

export const metadata: Metadata = {
  title: 'Lucky_Sam — Стример. Клевер. Хаос.',
  description:
    'Lucky_Sam — стример, озвучка и профессиональный обладатель слишком большого количества клеверов. Расписание стримов, контент и соцсети.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru" className={`${amatic.variable} ${neucha.variable} bg-ink`}>
      <body className="antialiased">
        {children}
        {typeof process !== 'undefined' && process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
