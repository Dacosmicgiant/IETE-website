import { useState } from 'react'
import AboutSection from '../components/Home/AboutSection'
import EventsSection from '../components/Home/EventsSection'
import CommitteeSection from '../components/Home/CommitteeSection'
import FacultySection from '../components/Home/FacultySection'
import ContactSection from '../components/Home/ContactSection'
import JoinSection from '../components/Home/JoinSection'

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({ firstName: '', lastName: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-500 rounded-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 bg-pink-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-orange-500 rounded-lg opacity-25 animate-pulse delay-300"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
              ✨ Advancing Technology Since 1953
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            IETE-PCE
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300">
            The Institution of Electronics and <span className="text-cyan-400">Telecommunication Engineers</span>
          </h2>
          
          <p className="text-xl mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed">
            Shaping the future of technology through innovation, research, and excellence in Electronics, 
            Telecommunication & IT at Pillai College of Engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Join IETE-PCE →
            </button>
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300"
            >
              ▶ Learn More
            </button>
          </div>
          
          {/* Innovation Hub Card */}
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">I</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Innovation Hub</h3>
            <p className="text-gray-300">Where technology meets creativity, and students become tomorrow's engineers</p>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">500+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Active Members</h3>
              <p className="text-gray-400">Students & Professionals</p>
            </div>
            
            <div className="text-center text-white">
              <div className="bg-gradient-to-br from-pink-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Events Per Year</h3>
              <p className="text-gray-400">Workshops & Seminars</p>
            </div>
            
            <div className="text-center text-white">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">70+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Years of Excellence</h3>
              <p className="text-gray-400">Since 1953</p>
            </div>
            
            <div className="text-center text-white">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">25+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Partners</h3>
              <p className="text-gray-400">Leading Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Our Vision & Mission</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision Card */}
            <div className="relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading student organization in advancing Electronics, Telecommunication, and IT education, fostering innovation, and creating technology leaders for the future.
              </p>
            </div>
            
            {/* Mission Card */}
            <div className="relative bg-gradient-to-br from-pink-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide practical learning opportunities, promote research and development, organize technical events, and bridge the gap between academic knowledge and industry requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Include all other sections */}
      <AboutSection />
      <EventsSection />
      <CommitteeSection />
      <FacultySection />
      <JoinSection />
      <ContactSection />
    </div>
  )
}

export default Home