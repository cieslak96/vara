import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
})

interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  return (
    <div className={`${cinzel.variable} text-center mb-12 pt-10 pb-6 items-center justify-between`} style={{ fontFamily: 'var(--font-cinzel)' }}>
      <div className="w-100 h-[2px] bg-green-900 mx-auto mb-4" />
      <h1 className="text-4xl font-semi-bold text-[#1e1e1e]">{title}</h1>
      <div className="w-100 h-[2px] bg-green-900 mx-auto mt-4" />
    </div>
  )
}
