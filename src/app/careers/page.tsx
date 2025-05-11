'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import Link from 'next/link'

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-32 min-h-screen bg-[#f9f9f6] text-[#1e1e1e] px-6">
        <Title title="Work With Us" />
        <div className="max-w-xl mx-auto text-center space-y-6 mt-8">
          <p className="text-lg">
            We are building something amazing — and so is this page.
          </p>
          <p className="text-md">
            While we finalize our Careers section, feel free to explore opportunities with us directly on&nbsp;
            <Link
              href="https://www.linkedin.com/company/vara-salon-suites/people/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1c2b25] underline hover:text-green-900 transition"
            >
              LinkedIn
            </Link>.
          </p>
          <p className="text-sm text-gray-500">Page coming soon. Stay tuned!</p>
        </div>
      </main>
      <Footer />
    </>
  )
}