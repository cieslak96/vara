'use client'

import Image from 'next/image'
import { useState} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import LocationDropdown from '@/components/LocationDropdown'
import SourceDropdown from '@/components/SourceDropdown'

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    source: '',
    message: '',
  })

  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/send-sms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setStatusMessage(data.success
      ? ' Message sent! We’ll be in touch soon.'
      : '❌ Something went wrong. Please try again later.')

    setTimeout(() => setStatusMessage(''), 5000)
  }

  return (
    <>
      <Header />
      <main className="pt-32">
        <Title title="Contact Us" />
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Left Image */}
          <div className="w-full lg:w-1/4 relative h-64 lg:h-screen">
            <Image src="/contact1.png" alt="Salon chair" fill className="object-cover" priority />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-2/4 bg-[#f9f9f6] text-[#1e1e1e] px-6 lg:px-10 py-10 flex flex-col justify-start">
            <p className="text-center text-sm mb-6">
              Fill out the contact form with your information, including the location you are interested in.
              We typically respond within a few hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="w-full lg:w-1/2 border px-4 py-2 bg-neutral-50 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-black"
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  className="w-full lg:w-1/2 border px-4 py-2 bg-neutral-50 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-black"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full lg:w-1/2 border px-4 py-2 bg-neutral-50 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-black"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone"
                  className="w-full lg:w-1/2 border px-4 py-2 bg-neutral-50 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-black"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2">
                  <LocationDropdown
                    selected={form.location}
                    setSelected={(value) => setForm({ ...form, location: value })}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <SourceDropdown
                    selected={form.source}
                    setSelected={(value) => setForm({ ...form, source: value })}
                  />
                </div>
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                maxLength={160}
                placeholder="Tell us a little more"
                className="w-full border px-4 py-2 bg-neutral-50 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-black"
              />
              <p className="text-sm text-gray-500 mt-1 text-right">
                {form.message.length}/160
              </p>
              <button type="submit" className="w-full bg-[#1c2b25] text-white py-2 font-semibold rounded-md">
                Submit
              </button>
            </form>
            {statusMessage && (
              <div className="mt-4 text-sm text-center px-4 py-2 rounded-md font-medium">
                {statusMessage}
              </div>
            )}
            <p className="text-xs text-center mt-4">
              By submitting, you consent to receive text messages from VARA Salon Suites. Message and data rates may apply.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/4 relative h-64 lg:h-screen">
            <Image src="/contact2.png" alt="Salon tools" fill className="object-cover" priority />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
