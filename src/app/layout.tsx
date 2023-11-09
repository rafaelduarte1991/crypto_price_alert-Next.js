import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { CoinsProvider } from './context/CoinsContext'


const montserrat = Montserrat({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={montserrat.className}>
       <CoinsProvider>{children}</CoinsProvider>
      </body>
    </html>
  )
}
