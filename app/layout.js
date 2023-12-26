import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import StickyNavbar from './components/StickyNavbar'
import 'animate.css'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Music World',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <StickyNavbar />
        {children}
      </body>
    </html>
  )
}
