const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Committee', href: '/committee' },
    { name: 'Membership', href: '/join' }
  ]

  const activities = [
    { name: 'Workshops', href: '/events' },
    { name: 'Seminars', href: '/events' },
    { name: 'Competitions', href: '/events' },
    { name: 'Research', href: '/about' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-pink-500 to-orange-600 p-2 rounded-2xl">
                <div className="w-6 h-6 flex items-center justify-center font-bold text-white">
                  I
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">IETE-PCE</h3>
                <p className="text-sm text-gray-400">Excellence in Engineering</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The Institution of Electronics and Telecommunication Engineers student chapter at PCE, 
              advancing technology education since 1953.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                🌐
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                📧
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button className="text-gray-400 hover:text-cyan-400 transition-colors text-left">
                    ▸ {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Activities</h4>
            <ul className="space-y-3">
              {activities.map((activity) => (
                <li key={activity.name}>
                  <button className="text-gray-400 hover:text-cyan-400 transition-colors text-left">
                    ▸ {activity.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  🌐
                </div>
                <span className="text-gray-400 text-sm">www.iete-pce.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  📧
                </div>
                <span className="text-gray-400 text-sm">iete.pce@gmail.com</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm mt-6">
              Follow us for updates on events, workshops, and opportunities in electronics and telecommunications.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 IETE-PCE, Pillai College of Engineering. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Designed with</span>
              <span className="text-pink-500">❤</span>
              <span>for the future of technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer