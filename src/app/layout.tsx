import { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
