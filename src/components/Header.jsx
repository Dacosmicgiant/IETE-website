// src/components/Header.jsx
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { COLORS } from '../constants/colors'
import Image from './ui/Image'
import { APP_DATA } from '../data/appData'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const siteData = APP_DATA.site

  const navigation = [
    { name: 'Home', href: '/#home', id: 'home', type: 'scroll' },
    { name: 'About', href: '#about', id: 'about', type: 'scroll' },
    { name: 'Faculty', href: '#faculty', id: 'faculty', type: 'scroll' },
    { name: 'Committee', href: '/committee', id: 'committee', type: 'route' },
    { name: 'SSC', href: '/ssc', id: 'ssc', type: 'route' },
    { name: 'Events', href: '/events', id: 'events', type: 'route' },
  ]

  // Handle navigation - either route navigation or smooth scrolling
  const handleNavigation = (item) => {
    if (item.type === 'route') {
      navigate(item.href)
      setActiveSection(item.id)
    } else {
      // Only scroll if we're on the home page
      if (location.pathname === '/') {
        scrollToSection(item.id)
      } else {
        // Navigate to home first, then scroll
        navigate('/')
        setTimeout(() => {
          scrollToSection(item.id)
        }, 100)
      }
    }
    setIsMenuOpen(false)
  }

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
  }

  // Track active section based on scroll position (only on home page)
  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname === '/events') {
        setActiveSection('events')
      } else if (location.pathname === '/committee') {
        setActiveSection('committee')
      } else if (location.pathname === '/ssc') {
        setActiveSection('ssc')
      }
      return
    }

    const handleScroll = () => {
      const sections = navigation.filter(nav => nav.type === 'scroll').map(nav => nav.id)
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
  }, [location.pathname])

  // Update active section based on current route
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection('home')
    } else if (location.pathname.startsWith('/events')) {
      setActiveSection('events')
    } else if (location.pathname === '/committee') {
      setActiveSection('committee')
    } else if (location.pathname === '/ssc') {
      setActiveSection('ssc')
    }
  }, [location.pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${COLORS.header.bg} ${COLORS.header.backdrop} ${COLORS.header.border}`}>
      <div className={COLORS.layout.container}>
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title - Left Side */}
          <div 
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => navigate('/')}
          >
            {/* Logo - Direct in flexbox */}
            <img 
              src={siteData.logo.src || siteData.logo.url} 
              alt={siteData.logo.alt || siteData.name}
              className="h-12 object-contain hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h1 className={`text-2xl font-bold ${COLORS.primary.text}`}>
                {siteData.name}
              </h1>
              <p className={`text-sm ${COLORS.primary.textMuted} hidden sm:block`}>
                {siteData.fullName}
              </p>
            </div>
          </div>

          {/* Right Side - Navigation and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`px-4 mx-1.5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? COLORS.header.navActive
                      : COLORS.header.navInactive
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 ${COLORS.effects.rounded} ${COLORS.interactive.buttonGhost} transition-colors`}
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
          <div className={`md:hidden pb-4 ${COLORS.primary.borderLight} border-t mt-4 pt-4`}>
            <nav className={COLORS.layout.spacing.xs}>
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`px-4 py-3 ${COLORS.effects.rounded} text-sm font-medium transition-all duration-300 text-left w-full ${
                    activeSection === item.id
                      ? COLORS.header.navActive
                      : COLORS.header.navInactive
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header