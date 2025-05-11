'use client'
import { useState } from 'react'



export default function PrivacyModal() {
  const [show, setShow] = useState(false)

  return (
    <>
      {/* Trigger button */}
      <button onClick={() => setShow(true)} className="hover:font-bold">
        Privacy Policy
      </button>
      {/* Modal content */}
      {show && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full p-6 rounded-lg shadow-lg relative text-sm text-gray-700">

          <div className="mb-5">
  <div className="flex flex-col items-center">
    <div className="h-[2px] bg-[#1e1e1e] w-2/3 sm:w-1/2 mb-2" />
    <h1 className="text-xl font-semibold text-[#1e1e1e]">Privacy Policy</h1>
    <div className="h-[2px] bg-[#1e1e1e] w-2/3 sm:w-1/2 mt-2" />
  </div>
</div>

            <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
              <p><strong>VARA Salon Suites</strong> respects your privacy. By opting into our SMS messaging service, you agree to the following:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We collect name, email, address, and phone via forms or third-party systems.</li>
                <li>Data is used only for updates and reminders related to our services.</li>
                <li>Your information is securely stored and retained while you are subscribed.</li>
                <li>You may request deletion at any time.</li>
                <li>MESSAGE AND DATA RATES MAY APPLY.</li>
                <li>Messages are recurring and frequency may vary.</li>
                <li>To stop, reply STOP/CANCEL or contact us via email or phone.</li>
                <li>We don’t share your info for marketing purposes.</li>
              </ul>
              <p>Contact: contact@varasuites.com or (435) 915-6306</p>
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
        </div>
      )}
    </>
  )
}
