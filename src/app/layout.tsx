import './globals.css'

export const metadata = {
  title: 'Vara Salon Suites Portfolio',
  description: 'Luxury suites for beauty professionals',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
