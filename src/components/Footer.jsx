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
    <footer className="bg-slate-900 border-t border-slate-800 px-4">
      <div className="max-w-7xl mx-auto py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <div className="bg-cyan-500 p-2 sm:p-3 rounded-xl sm:rounded-2xl">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold text-slate-950 text-sm sm:text-base">
                  I
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">IETE-PCE</h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light">Excellence in Engineering</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 sm:mb-8 leading-relaxed font-light text-sm sm:text-base">
              The Institution of Electronics and Telecommunication Engineers student chapter at PCE, 
              advancing technology education since 1953.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 hover:bg-cyan-500 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-950 transition-all duration-300">
                🌐
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 hover:bg-blue-500 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300">
                📧
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button className="text-slate-400 hover:text-cyan-400 transition-colors text-left font-light text-sm sm:text-base">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">Activities</h4>
            <ul className="space-y-3 sm:space-y-4">
              {activities.map((activity) => (
                <li key={activity.name}>
                  <button className="text-slate-400 hover:text-cyan-400 transition-colors text-left font-light text-sm sm:text-base">
                    {activity.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">Connect</h4>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  🌐
                </div>
                <span className="text-slate-400 text-xs sm:text-sm font-light break-all">www.iete-pce.org</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  📧
                </div>
                <span className="text-slate-400 text-xs sm:text-sm font-light break-all">iete.pce@gmail.com</span>
              </div>
            </div>
            
            <p className="text-slate-500 text-xs sm:text-sm mt-6 sm:mt-8 font-light">
              Follow us for updates on events, workshops, and opportunities in electronics and telecommunications.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              © 2024 IETE-PCE, Pillai College of Engineering. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-slate-400 text-xs sm:text-sm font-light">
              <span>Designed with</span>
              <span className="text-red-500">❤</span>
              <span>for the future of technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer