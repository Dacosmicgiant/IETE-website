import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navigation = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Committee', href: '#committee', id: 'committee' },
    { name: 'Faculty', href: '#faculty', id: 'faculty' },
    { name: 'Join', href: '#join', id: 'join' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.id)
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div 
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="bg-gradient-to-br from-pink-500 to-orange-600 p-3 rounded-2xl">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl text-white">
                I
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                IETE-PCE
              </h1>
              <p className="text-sm text-gray-400 hidden sm:block">Institution of Electronics and Telecommunication Engineers</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Join Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('join')}
              className="hidden sm:inline-flex px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              Join
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-4 pt-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('join')}
                className="mt-4 px-4 py-3 bg-gradient-to-r from-pink-500 to-orange-600 rounded-xl font-semibold text-white"
              >
                Join IETE-PCE
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header