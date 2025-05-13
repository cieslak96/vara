// SocialLand.tsx
'use client'
import Link from 'next/link'

export default function SocialLand() {
  return (
  <div className="fixed right-10 lg:right-25 bottom-15 lg:bottom-20 z-50 space-y-5">

    <div className="flex gap-x-2 ">
      <Link
        href="https://www.instagram.com/vara_salon_suites/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group hover:scale-125"
      >
        <svg
          className="w-7 h-7  transition-all duration-300"
          viewBox="-2 -2 24 24"
        >
          <defs>
            <linearGradient id="insta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#feda75" />
              <stop offset="50%" stopColor="#fa7e1e" />
              <stop offset="100%" stopColor="#d62976" />
            </linearGradient>
          </defs>

          {/* Fundo com gradiente */}
          <rect
            x="0"
            y="0"
            width="20"
            height="20"
            rx="5"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            fill="url(#insta-gradient)"
          />

          {/* Ícone branco */}
          <path
            d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"
            fill="#fff1e3"
          />
          <path
            d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"
            fill="#fff1e3"
          />
        </svg>
      </Link>


      <Link
        href="https://www.facebook.com/varasalonsuites/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="group hover:scale-125 transition-all duration-300"
      >
        <svg
          className="w-7 h-7 transition-all duration-300"
          viewBox="-2 -2 24 24"
        >
          <defs>
            <linearGradient id="facebook-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1877F2" />
              <stop offset="100%" stopColor="#165ECF" />
            </linearGradient>
          </defs>

          {/* Hover Background */}
          <rect
            x="0"
            y="0"
            width="20"
            height="20"
            rx="5"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            fill="url(#facebook-gradient)"
          />

          {/* Facebook Icon Paths */}
          <path
            d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z"
            className="fill-[#fff1e3] group-hover:fill-white transition-colors duration-300"
          />
          <path
            d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            className="fill-[#fff1e3] group-hover:fill-white transition-colors duration-300"
          />
        </svg>
      </Link>


      <Link
        href="https://www.tiktok.com/@vara.salon.suites"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="group hover:scale-125 transition-all duration-300"
      >
        <svg
          className="w-7 h-7 transition-all duration-300"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            fill="black"
          />

          <path
            d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
            className="stroke-[#fff1e3] group-hover:stroke-white transition-colors duration-300"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9"
            className="stroke-[#fff1e3] group-hover:stroke-white transition-colors duration-300"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <Link
        href="https://www.linkedin.com/company/vara-salon-suites/people/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="group hover:scale-125 transition-all duration-300"
      >
        <svg
          className="w-7 h-7 transition-all duration-300"
          viewBox="-2 -2 24 24"
        >
          <defs>
            <linearGradient id="linkedin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0077B5" />
              <stop offset="100%" stopColor="#005582" />
            </linearGradient>
          </defs>

          {/* Blue background rectangle on hover */}
          <rect
            x="0"
            y="0"
            width="20"
            height="20"
            rx="5"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            fill="url(#linkedin-gradient)"
          />

          {/* LinkedIn Icon Path */}
          <path
            d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"
            className="fill-[#fff1e3] group-hover:fill-white transition-colors duration-300"
          />
          <path
            d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            className="fill-[#fff1e3] group-hover:fill-white transition-colors duration-300"
          />
        </svg>
      </Link>


    </div>
    </div>
  )
}
