import { useState } from 'react'

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300">
              Join IETE-PCE →
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300">
              ▶ Watch Demo
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

      {/* About Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Circuit Board Visual */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  500+ Active Members
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    ▶
                  </button>
                </div>
                <div className="mt-4 text-center text-white">
                  <h4 className="font-semibold">Watch Our Story</h4>
                </div>
              </div>
              
              {/* Events Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-4 rounded-2xl font-bold text-center">
                <div className="text-2xl">50+</div>
                <div className="text-sm">Events/Year</div>
              </div>
            </div>
            
            <div className="text-white">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
                📊 About IETE-PCE
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Pioneering Excellence in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Engineering</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-6">
                IETE-PCE is the premier student chapter of the Institution of Electronics and Telecommunication Engineers at Pillai College of Engineering. We are dedicated to advancing knowledge and fostering innovation in electronics, telecommunications, and information technology.
              </p>
              
              <p className="text-gray-400 mb-8">
                Our mission is to provide a platform for students to enhance their technical skills, participate in cutting-edge research, and connect with industry professionals through hands-on workshops, seminars, and collaborative projects.
              </p>
              
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
                Discover More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900">
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

      {/* Events Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
              📅 Upcoming Events
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tech Events & Workshops</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our cutting-edge workshops, seminars, and competitions designed to enhance your technical skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* IoT Workshop */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-cyan-600/30 to-blue-600/30 flex items-center justify-center">
                <div className="text-6xl">🔗</div>
              </div>
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Workshop</span>
                  <span className="text-cyan-400 font-medium">25 JUN 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3">IoT Workshop</h3>
                <p className="text-gray-400 mb-4">Hands-on workshop on Internet of Things applications, sensor integration, and smart device development</p>
                <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">Register Now →</button>
              </div>
            </div>
            
            {/* Tech Symposium */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-pink-600/30 to-orange-600/30 flex items-center justify-center">
                <div className="text-6xl">🎯</div>
              </div>
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Symposium</span>
                  <span className="text-orange-400 font-medium">30 JUN 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Tech Symposium</h3>
                <p className="text-gray-400 mb-4">Annual technical symposium featuring industry experts, research presentations, and networking opportunities</p>
                <button className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">Register Now →</button>
              </div>
            </div>
            
            {/* Project Competition */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-600/30 to-indigo-600/30 flex items-center justify-center">
                <div className="text-6xl">🏆</div>
              </div>
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">Competition</span>
                  <span className="text-purple-400 font-medium">05 JUL 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Project Competition</h3>
                <p className="text-gray-400 mb-4">Showcase your innovative projects, compete with peers, and win exciting prizes and recognition</p>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">Register Now →</button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
              📅 View All Events →
            </button>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
              👥 Our Committee
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the dedicated team leading IETE-PCE toward excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* President */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  PR
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">President</h3>
              <p className="text-gray-400 text-sm mb-2">Leading the organization toward excellence</p>
            </div>
            
            {/* Vice President */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  VP
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Vice President</h3>
              <p className="text-gray-400 text-sm mb-2">Supporting strategic initiatives</p>
            </div>
            
            {/* Secretary */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  SC
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secretary</h3>
              <p className="text-gray-400 text-sm mb-2">Managing operations and communications</p>
            </div>
            
            {/* Treasurer */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  TR
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Treasurer</h3>
              <p className="text-gray-400 text-sm mb-2">Managing finances and resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
              📬 Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connect With Us</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to join our community? Get in touch to learn more about membership opportunities and upcoming events
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                ✨ Send us a Message
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your interests and how you'd like to get involved"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Send Message →
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Address</h3>
                <p className="text-gray-300">
                  Pillai College of Engineering<br />
                  New Panvel, Navi Mumbai<br />
                  Maharashtra - 410206
                </p>
              </div>
              
              {/* Email */}
              <div className="bg-gradient-to-br from-pink-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-gray-300">iete.pce@gmail.com</p>
              </div>
              
              {/* Website */}
              <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Website</h3>
                <p className="text-gray-300">www.iete-pce.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home