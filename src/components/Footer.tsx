import Link from 'next/link'

export default function Footer() {
    return (
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Logo & Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Vara Salon Suites</h2>
            <p>(435) 915-6306</p>
            <p>contact@varasuites.com</p>
            <p>© 2024 by Loris Ventures LLC.</p>
          </div>
  
          {/* Sections */}
          <div className="space-y-2">
            <h3 className="font-bold text-white mb-2">Explore</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/locations" className="hover:underline">Locations</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
  
          {/* Legal */}
          <div className="space-y-2">
            <h3 className="font-bold text-white mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/content" className="hover:underline">Content Policy</Link></li>
            </ul>
          </div>
  
          {/* Social & Careers */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-white mb-2">Join Us</h3>
              <Link href="/careers" className="hover:underline block">Work With Us</Link>
            </div>
            <div className="flex space-x-2 mt-4">
              <Link href="https://www.instagram.com/vara_salon_suites/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75">
                <svg className="w-7 h-7 fill-white " viewBox="-2 -2 24 24">
                <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path><path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/vara-salon-suites/people/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75">
                <svg className="w-7 h-7 fill-white " viewBox="-2 -2 24 24">
                <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"></path><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
                </svg>
              </Link>
              <Link href="https://www.facebook.com/varasalonsuites/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75">
                <svg className="w-7 h-7 fill-white " viewBox="-2 -2 24 24">
                <path d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z"></path><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
                </svg>
              </Link>
            </div>
            
          </div>
        </div>
      </footer>
    )
  }
  