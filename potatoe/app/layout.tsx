import './globals.css'
import type { Metadata } from 'next'
import { Inter, Libre_Baskerville, Cormorant_Garamond } from 'next/font/google'
import Navbar from './component/Navbar'
import AuthProvider from './AuthProvider'

const inter = Inter({ subsets: ['latin'] })
const corm = Cormorant_Garamond({
  weight: ['400', '700', ], 
  subsets: ["latin"], 
})

export const metadata: Metadata = {
  title: 'El Potatoe',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={corm.className}>
          <Navbar/>
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}