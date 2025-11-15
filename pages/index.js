import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Counter component with animation
function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = null
          const animate = (timestamp) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const numericTarget = parseInt(target)
            setCount(Math.floor(progress * numericTarget))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.unobserve(entries[0].target)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`counter-${target}`)
    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [target, duration])

  return <>{count.toString() + (target.includes('%') ? '%' : target.slice(-1))}</>
}

export default function Home() {
  useEffect(() => {
    // Helper to show a success message element then hide after delay
    const showMessage = (id) => {
      const el = document.getElementById(id)
      if (!el) return
      el.classList.remove('hidden')
      setTimeout(() => el.classList.add('hidden'), 6000)
    }

    const submitForm = async (form) => {
      const submitBtn = form.querySelector('button[type="submit"]')
      try {
        if (submitBtn) submitBtn.disabled = true
        const data = new FormData(form)
        await fetch('/', {
          method: 'POST',
          body: data,
        })
        form.reset()
        return true
      } catch (err) {
        console.error('Form submit error', err)
        return false
      } finally {
        if (submitBtn) submitBtn.disabled = false
      }
    }

    const admission = document.forms['admission']
    const contact = document.forms['contact']

    const onAdmission = async (e) => {
      e.preventDefault()
      const ok = await submitForm(e.target)
      if (ok) showMessage('admission-success')
    }

    const onContact = async (e) => {
      e.preventDefault()
      const ok = await submitForm(e.target)
      if (ok) showMessage('contact-success')
    }

    if (admission) admission.addEventListener('submit', onAdmission)
    if (contact) contact.addEventListener('submit', onContact)

    return () => {
      if (admission) admission.removeEventListener('submit', onAdmission)
      if (contact) contact.removeEventListener('submit', onContact)
    }
  }, [])
  return (
    <div>
      <Head>
        <title>The Rising Star of Islam – Excellence in Islamic Education</title>
        <meta name="description" content="The Rising Star of Islam: Modern education with Islamic values. Admissions open for 2025-2026." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="The Rising Star of Islam – Excellence in Islamic Education" />
        <meta property="og:description" content="Nurturing future leaders with Islamic values and modern education." />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />

      <main>
        {/* HERO - Video background with glassmorphism overlay & parallax feel */}
        <section id="home" className="text-white py-20 md:py-36 px-6 relative overflow-hidden min-h-screen flex items-center">
          {/* Video background (autoplay, muted, loop) */}
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover pointer-events-none">
            <source src="/videos/sample%20video.mp4" type="video/mp4" />
            {/* Fallback poster or message */}
          </video>
          {/* Softer gradient overlay so the video remains visible */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(2,6,23,0.28) 0%, rgba(30,58,138,0.20) 50%, rgba(30,64,175,0.20) 100%)' }}></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-16"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          {/* Hero content: responsive two-column layout so CTAs are visible */}
          <div className="mx-auto max-w-6xl relative z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="text-center md:text-left md:pr-6">
                <div className="inline-block bg-white bg-opacity-30 backdrop-blur-lg px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-white border-opacity-20 shadow-md">✨ Premium Islamic Education</div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-[0_8px_30px_rgba(2,6,23,0.6)]">The Rising Star of Islam</h1>
                <p className="text-md sm:text-lg md:text-xl text-gray-200 mb-6 max-w-xl mx-auto md:mx-0">Excellence in academics combined with Islamic values to shape leaders of tomorrow.</p>

                <div className="mt-6 flex flex-col sm:flex-row sm:justify-start gap-4 max-w-xs mx-auto md:mx-0">
                  <a href="#admission" className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-gray-800 font-bold px-6 py-3 rounded-lg hover:scale-105 transition-shadow shadow-2xl">Apply Now</a>
                  <a href="#programs" className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-white text-white bg-white/10 font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-shadow shadow-lg">Explore Programs</a>
                </div>
              </div>

              <div className="hidden md:flex justify-center items-center">
                {/* Right column: decorative illustration, visible on md+ */}
                <img src="/images/school%20building.jpg" alt="School building" className="w-full max-w-md opacity-95 drop-shadow-2xl rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* STATS - White Background */}
        <section id="stats" className="py-24 px-6 bg-white">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-gray-800">
                <div id="counter-500+" className="text-5xl font-bold text-gray-800 mb-2"><Counter target="500+" duration={2000} /></div>
                <div className="text-gray-700 font-semibold text-sm">Students</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-gray-800">
                <div id="counter-50+" className="text-5xl font-bold text-gray-800 mb-2"><Counter target="50+" duration={2000} /></div>
                <div className="text-gray-700 font-semibold text-sm">Teachers</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-gray-800">
                <div id="counter-15+" className="text-5xl font-bold text-gray-800 mb-2"><Counter target="15+" duration={2000} /></div>
                <div className="text-gray-700 font-semibold text-sm">Years</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-gray-800">
                <div id="counter-95%" className="text-5xl font-bold text-gray-800 mb-2"><Counter target="95%" duration={2000} /></div>
                <div className="text-gray-700 font-semibold text-sm">Success</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT - Light Gray with Images */}
        <section id="about" className="py-24 px-6 bg-gray-50">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">About Our School</h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">Quality education combining modern academics with Islamic values and character development.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80" alt="Academic Excellence" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-4xl sm:text-5xl mb-3">📚</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Academic Excellence</h3>
                  <p className="text-gray-700">Modern curriculum with Islamic Studies & Quran Memorization. Rigorous academics combined with spiritual growth.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-r from-emerald-400 to-teal-600 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop&q=80" alt="Character Building" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-4xl sm:text-5xl mb-3">✨</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Character Building</h3>
                  <p className="text-gray-700">Developing morally strong and spiritually grounded students. Ethical values at the core of our teaching.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-r from-orange-400 to-red-600 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" alt="Sports & Clubs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-4xl sm:text-5xl mb-3">🏆</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Sports & Clubs</h3>
                  <p className="text-gray-700">Diverse extracurricular activities for holistic development. Team sports, debate, arts & STEM clubs.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-600 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop&q=80" alt="Modern Facilities" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-4xl sm:text-5xl mb-3">🏛️</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Modern Facilities</h3>
                  <p className="text-gray-700">State-of-the-art classrooms, science labs, computer labs & sports grounds for optimal learning environment.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-r from-indigo-400 to-blue-600 overflow-hidden relative">
                  <img src="/images/school%20building.jpg" alt="Experienced Faculty" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-4xl sm:text-5xl mb-3">👨‍🏫</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Experienced Faculty</h3>
                  <p className="text-gray-700">Highly qualified teachers trained in modern pedagogy and Islamic teachings. Dedicated to student success.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-r from-teal-400 to-cyan-600 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" alt="Community & Support" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-4xl sm:text-5xl mb-3">❤️</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Community & Support</h3>
                  <p className="text-gray-700">Strong parent-teacher partnerships, counseling services & community engagement for holistic student care.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS - Light Gradient with Animations */}
        <section id="programs" className="py-24 px-6 relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 50%, #e8eeff 100%)',
        }}>
          {/* Animated floating shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-20 blur-2xl" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full opacity-15 blur-3xl" style={{ animation: 'float 8s ease-in-out infinite 1s' }}></div>
          <div className="absolute top-40 right-32 w-28 h-28 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-10 blur-2xl" style={{ animation: 'float 7s ease-in-out infinite 2s' }}></div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            @keyframes slideIn {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .program-card {
              animation: slideIn 0.6s ease-out forwards;
            }
          `}</style>

          <div className="mx-auto max-w-5xl relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Programs</h2>
            <p className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto">Comprehensive programs designed for every stage of academic growth</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="program-card p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border-l-4 border-cyan-400 relative overflow-hidden" style={{ animationDelay: '0s' }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-200 rounded-full opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-300"></div>
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">🌟</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 relative z-10">Primary School</h3>
                <p className="text-cyan-700 text-sm mb-4 font-semibold relative z-10">Grades 1-5</p>
                <ul className="text-gray-700 text-sm space-y-2 relative z-10">
                  <li>✓ Strong foundations in English, Math & Sciences</li>
                  <li>✓ Islamic Studies & Quran Memorization</li>
                  <li>✓ Creative thinking & problem-solving</li>
                  <li>✓ Sports & artistic development</li>
                </ul>
              </div>
              <div className="program-card p-8 rounded-2xl bg-gradient-to-br from-white to-emerald-50 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border-l-4 border-emerald-400 relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200 rounded-full opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-300"></div>
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">📚</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 relative z-10">Middle School</h3>
                <p className="text-emerald-700 text-sm mb-4 font-semibold relative z-10">Grades 6-8</p>
                <ul className="text-gray-700 text-sm space-y-2 relative z-10">
                  <li>✓ Advanced academics & critical thinking</li>
                  <li>✓ Character building & leadership training</li>
                  <li>✓ Practical science labs & projects</li>
                  <li>✓ Debate, drama & cultural programs</li>
                </ul>
              </div>
              <div className="program-card p-8 rounded-2xl bg-gradient-to-br from-white to-purple-50 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border-l-4 border-purple-400 relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200 rounded-full opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-300"></div>
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">🎓</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 relative z-10">High School</h3>
                <p className="text-purple-700 text-sm mb-4 font-semibold relative z-10">Grades 9-12</p>
                <ul className="text-gray-700 text-sm space-y-2 relative z-10">
                  <li>✓ Higher secondary education & exam prep</li>
                  <li>✓ Advanced Islamic & modern subjects</li>
                  <li>✓ Career guidance & skill development</li>
                  <li>✓ University & professional counseling</li>
                </ul>
              </div>
            </div>

            {/* Additional Features Row */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="program-card p-8 rounded-2xl bg-gradient-to-br from-white to-orange-50 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border-l-4 border-orange-400 relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-300"></div>
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">🧠</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 relative z-10">Special Programs</h3>
                <p className="text-gray-700 text-sm relative z-10">Quran Memorization Program (Hafiz), STEM Excellence, Language Proficiency (English & Urdu), Computer Literacy & Coding Workshop.</p>
              </div>

              <div className="program-card p-8 rounded-2xl bg-gradient-to-br from-white to-emerald-50 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border-l-4 border-emerald-400 relative overflow-hidden" style={{ animationDelay: '0.35s' }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200 rounded-full opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-300"></div>
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">☪️</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 relative z-10">Islamic Studies</h3>
                <p className="text-gray-700 text-sm relative z-10">Comprehensive Islamic education including Tafseer, Hadith, Islamic History, Fiqh & Islamic Ethics. Developing spiritually enlightened & morally conscious students rooted in Islamic values.</p>
              </div>

              <div className="program-card p-8 rounded-2xl bg-gradient-to-br from-white to-pink-50 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border-l-4 border-pink-400 relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-200 rounded-full opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-300"></div>
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">🏅</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 relative z-10">Co-Curricular Activities</h3>
                <p className="text-gray-700 text-sm relative z-10">Student Council, Sports Teams, Debate Club, Art & Music, Science Fair, Community Service, Educational Tours & International Exchange Programs.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ADMISSION - White ( Redesigned ) */}
<section id="admission" className="py-24 px-6 bg-white">
  <div className="mx-auto max-w-5xl">
    <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Admissions Open</h2>
    <p className="text-center text-gray-600 mb-12 text-lg">Academic Year 2025-2026</p>

    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border-t-4 border-gray-800">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <div className="w-full h-72 md:h-[520px] rounded-xl overflow-hidden shadow-inner">
            <img
              src="/images/school%20building.jpg"
              alt="School building"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
            Visit us for a campus tour — open weekdays by appointment.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div>
          <form
            name="admission"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="admission" />

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Enter your full name"
                className="w-full px-5 py-3 rounded-lg bg-gray-50 shadow-sm 
                  focus:outline-none focus:ring-2 focus:ring-gray-800 transition text-gray-800"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-3 rounded-lg bg-gray-50 shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-gray-800 transition text-gray-800"
                />
                <p className="text-xs text-gray-500 mt-1">
                  We'll use this to contact you about admission updates.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+92 300 1234567"
                  className="w-full px-5 py-3 rounded-lg bg-gray-50 shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-gray-800 transition text-gray-800"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Optional — include country code.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Applying For <span className="text-red-500">*</span>
              </label>
              <select
                name="grade"
                required
                className="w-full px-5 py-3 rounded-lg bg-gray-50 shadow-sm 
                  focus:outline-none focus:ring-2 focus:ring-gray-800 transition text-gray-800"
              >
                <option value="">Select Grade</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                <option>Grade 4</option>
                <option>Grade 5</option>
                <option>Grade 6</option>
                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
              </select>
            </div>

            {/* SUBMIT BUTTON (FIXED POSITION) */}
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold 
                py-3 rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Submit Application
            </button>

            <div
              id="admission-success"
              className="hidden mt-3 text-sm text-green-700 bg-green-50 p-3 rounded"
            >
              Thank you — your application was submitted. We'll contact you soon.
            </div>
          </form>
        </div>
      </div>

      {/* DOWNLOAD SECTION */}
      <div className="mt-6 pt-6 border-t-2 border-gray-100 text-center md:text-left">
        <p className="text-sm text-gray-700 mb-3">
          Or download the admission form and submit at our office
        </p>

        <a
          href="/Admission-Form.pdf"
          download="Admission-Form.pdf"
          className="inline-block text-gray-800 hover:text-gray-900 font-bold"
        >
          📄 Download Admission Form (PDF)
        </a>
      </div>
    </div>
  </div>
</section>


        {/* CONTACT - Light Gradient with Animations */}
        <section id="contact-form" className="py-24 px-6 relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #f5f3ff 50%, #faf5ff 100%)',
        }}>
          {/* Animated decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-15 blur-3xl" style={{ animation: 'float 7s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-10 blur-3xl" style={{ animation: 'float 9s ease-in-out infinite 1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-10 blur-3xl" style={{ animation: 'float 8s ease-in-out infinite 2.5s' }}></div>

          <div className="mx-auto max-w-3xl relative z-10">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-center text-gray-700 mb-12 text-lg">We are here to answer your questions</p>

            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border-t-4 border-gray-400 relative overflow-hidden" style={{ backdropFilter: 'blur(10px)' }}>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
              <form name="contact" method="POST" data-netlify="true" className="space-y-6 relative z-10">
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input name="name" required type="text" placeholder="Enter your full name" className="w-full px-5 py-3 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition text-gray-800" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Email <span className="text-red-500">*</span></label>
                    <input name="email" required type="email" placeholder="your@email.com" className="w-full px-5 py-3 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition text-gray-800" />
                    <p className="text-xs text-gray-500 mt-1">We'll only use this to reply to your message.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Phone</label>
                    <input name="phone" type="tel" placeholder="+92 300 1234567" className="w-full px-5 py-3 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition text-gray-800" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea name="message" required placeholder="Write your message here..." rows="5" className="w-full px-5 py-3 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition resize-none text-gray-800"></textarea>
                </div>

                <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105">Send Message</button>

                <div id="contact-success" className="hidden mt-3 text-sm text-green-700 bg-green-50 p-3 rounded">Thanks — your message has been sent.</div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
