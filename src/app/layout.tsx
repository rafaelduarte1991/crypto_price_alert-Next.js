import { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import { UpdateProvider } from './context/UpdateContext'

const montserrat = Montserrat({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <head />
      <body className={montserrat.className}>
        <UpdateProvider>{children}</UpdateProvider>
      </body>
    </html>
  )
}
