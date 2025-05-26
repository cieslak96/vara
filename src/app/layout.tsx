// src/app/layout.tsx
import './globals.css'
import localFont from 'next/font/local'

const gilroy = localFont({
  src: '../fonts/Gilroy-Regular.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-gilroy',
})

export const metadata = {
  title: 'Vara Salon Suites Portfolio',
  description: 'Luxury suites for beauty professionals',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body>
        <div
          className="w-full max-w-[1600px] mx-auto 
         overflow-x-hidden "
        >
          {children}
        </div>
      </body>
    </html>
  )
}
