import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Vara Salon Suites Portfolio',
  description: 'Luxury suites for beauty professionals',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="bg-white text-black font-serif">{children}</body>
    </html>
  )
}
