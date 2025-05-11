'use client'

import { useState } from 'react'

export default function TermsModal() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(true)} className="hover:font-bold">
        Terms of Service
      </button>
      {show && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full p-6 rounded-lg shadow-lg relative text-sm text-gray-700">
            {/* Header */}
            <div className="mb-5">
              <div className="flex flex-col items-center">
                <hr className="border-t-2 border-[#1e1e1e] w-2/3 sm:w-1/2 mb-2" />
                <h1 className="text-xl font-semibold text-[#1e1e1e]">Terms of Service</h1>
                <hr className="border-t-2 border-[#1e1e1e] w-2/3 sm:w-1/2 mt-2" />
              </div>
            </div>
  
            {/* Text */}
            <div className="space-y-2 text-gray-700">
              <p>
                These are the terms and conditions for using VARA Salon Suites. By accessing our services, you agree to the following conditions:
              </p>
              <ul className="list-disc pl-5">
                <li>Usage of our website and facilities must comply with applicable laws.</li>
                <li>You are responsible for maintaining the confidentiality of your login information.</li>
                <li>We reserve the right to modify these terms at any time.</li>
                <li>All suite leases are governed by a separate rental agreement.</li>
              </ul>
            </div>
  
            {/* Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShow(false)}
                className="bg-black text-white px-4 py-2 rounded hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}