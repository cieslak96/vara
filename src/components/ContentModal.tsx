'use client'

import { useState } from 'react'

export default function ContentModal() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(true)} className="hover:font-bold">
        Content Policy
      </button>
      {show && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full p-6 rounded-lg shadow-lg relative text-sm text-gray-700">
            <div className="mb-5">
              <div className="flex flex-col items-center">
             <hr className="border-[#1c2b25] w-2/3 sm:w-1/2 mb-2" />
                <h1 className="text-xl  text-[#1e1e1e]">Content Policy</h1>
                <hr className="border-[#1c2b25] w-2/3 sm:w-1/2 mt-2" />
              </div>
            </div>

            <p className="space-y-2 text-gray-700">
              {/* Your content policy text here */}
              VARA Salon Suites does not allow the following types of content:
              <br /><br />
              1. Offensive, hateful, or discriminatory content.<br />
              2. Illegal activity or promotion of illegal goods/services.<br />
              3. False or misleading representations.<br />
              4. Content infringing intellectual property rights.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setShow(false)}
                className="mt-4 bg-black text-white px-4 py-2 rounded hover:opacity-90"
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
