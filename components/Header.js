import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4 font-bold text-gray-700 hover:opacity-90 transition">
          {/* Exact SVG logo from source site */}
          <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DAA520" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M 150 80 L 100 200 L 40 180 L 150 300 L 80 180 L 150 80" fill="#1a1a2e"></path>
            <circle cx="120" cy="120" r="15" fill="#1a1a2e"></circle>
            <path d="M 250 60 L 280 140 L 360 150 L 300 210 L 320 290 L 250 250 L 180 290 L 200 210 L 140 150 L 220 140 Z" fill="none" stroke="url(#starGrad)" strokeWidth="15"></path>
            <circle cx="250" cy="30" r="10" fill="#DAA520"></circle>
          </svg>

          <div className="leading-tight">
            <h1 className="text-base sm:text-lg font-extrabold text-gray-800">The Rising Star of Islam</h1>
            <p className="text-xs sm:text-sm text-gray-600">Excellence in Islamic Education</p>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 text-2xl p-2 rounded hover:bg-gray-100 transition"
          >
            ☰
          </button>

          <nav>
            <ul className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-8 ${open ? 'block' : 'hidden'} md:flex text-sm`}>
              <li><a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a></li>
              <li><a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a></li>
              <li><a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Programs</a></li>
              <li><a href="#admission" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Admission</a></li>
              <li><a href="#contact-form" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
