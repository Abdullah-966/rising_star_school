import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-t-4 border-gray-700">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Logo + Info */}
          <div>
            <div className="flex items-start gap-3">
              <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="starGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DAA520" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
                <path d="M 150 80 L 100 200 L 40 180 L 150 300 L 80 180 L 150 80" fill="#1a1a2e"></path>
                <circle cx="120" cy="120" r="15" fill="#1a1a2e"></circle>
                <path d="M 250 60 L 280 140 L 360 150 L 300 210 L 320 290 L 250 250 L 180 290 L 200 210 L 140 150 L 220 140 Z" fill="none" stroke="url(#starGradFooter)" strokeWidth="12"></path>
                <circle cx="250" cy="30" r="10" fill="#DAA520"></circle>
              </svg>

              <div>
                <h3 className="text-white font-bold text-lg">The Rising Star of Islam</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Nurturing future leaders with Islamic values and modern education since 2010.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-gray-100 duration-300">🏠 Home</a></li>
              <li><a href="#programs" className="hover:text-gray-100 duration-300">📚 Programs</a></li>
              <li><a href="#admission" className="hover:text-gray-100 duration-300">📝 Admission</a></li>
              <li><a href="#contact-form" className="hover:text-gray-100 duration-300">📞 Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>

            {/* Location → Opens Google Map */}
            <p
              className="text-sm mb-2 cursor-pointer hover:text-gray-100"
              onClick={() => window.open("https://maps.google.com/?q=Mughalabad,Punjab", "_blank")}
            >
              📍 123 Education Street, Mughalabad, Punjab
            </p>

            {/* Phone → Opens WhatsApp */}
            <p className="text-sm mb-2">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                className="hover:text-green-400"
              >
                📞 +92 300 1234567
              </a>
            </p>

            {/* Email → Opens Email App */}
            <p className="text-sm">
              <a
                href="mailto:info@risingstarofislam.edu.pk"
                className="hover:text-blue-400"
              >
                📧 info@risingstarofislam.edu.pk
              </a>
            </p>
          </div>

          {/* School Hours + Social Icons */}
          <div>
            <h4 className="text-white font-bold mb-4">School Hours</h4>
            <p className="text-sm mb-2"><strong>Monday - Friday</strong></p>
            <p className="text-sm mb-4">8:00 AM - 3:00 PM</p>

            {/* Social Media Icons */}
            <div className="flex gap-3">

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 bg-gray-700 rounded-full hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaFacebookF size={20} />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 bg-gray-700 rounded-full hover:bg-blue-400 transition flex items-center justify-center"
              >
                <FaTwitter size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 bg-gray-700 rounded-full hover:bg-pink-500 transition flex items-center justify-center"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p className="text-gray-300">© 2025 The Rising Star of Islam. All rights reserved.</p>
          <p className="mt-2 text-gray-200 font-semibold">Empowering minds, nurturing souls 🌟</p>
        </div>
      </div>
    </footer>
  );
}
