import { COLORS } from '../constants/colors'
import { APP_DATA } from '../data/appData'
import Image from './ui/Image'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Events', id: 'events' },
    { name: 'Committee', id: 'committee' },
    { name: 'Faculty', id: 'faculty' },
  ]

  const activities = [
    { name: 'Workshops', id: 'events' },
    { name: 'Seminars', id: 'events' },
    { name: 'Competitions', id: 'events' },
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
  }

  return (
    <footer className={`${COLORS.primary.bgSecondary} ${COLORS.primary.borderLight} border-t px-4`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        <div className={`${COLORS.layout.grid.cols4} ${COLORS.layout.grid.gap}`}>
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              {/* <div className={`${COLORS.accent.primary} p-2 sm:p-3 ${COLORS.effects.rounded}`}>
                <div className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold text-slate-950 text-sm sm:text-base`}>
                  I
                </div>
              </div> */}
              <div className="w-12 h-12">
                <Image 
                  imageData={APP_DATA.site.logo}
                  containerClassName="group-hover:scale-105 transition-transform duration-300"
                  showFallbackText={false}
                />
              </div>
              <div>
                <h3 className={`${COLORS.typography.heading.md} ${COLORS.primary.text}`}>IETE-PCE</h3>
                <p className={`${COLORS.typography.body.sm} ${COLORS.primary.textMuted}`}>Excellence in Engineering</p>
              </div>
            </div>
            <p className={`${COLORS.primary.textMuted} mb-6 sm:mb-8 leading-relaxed ${COLORS.typography.body.md}`}>
              The Institution of Electronics and Telecommunication Engineers student chapter at PCE, 
              advancing technology education since 2024.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <button className={`w-10 h-10 sm:w-12 sm:h-12 ${COLORS.primary.bgTertiary} ${COLORS.accent.primaryHover} ${COLORS.effects.rounded} flex items-center justify-center ${COLORS.primary.textMuted} hover:text-slate-950 transition-all duration-300`}>
                🌐
              </button>
              <button className={`w-10 h-10 sm:w-12 sm:h-12 ${COLORS.primary.bgTertiary} ${COLORS.accent.secondaryHover} ${COLORS.effects.rounded} flex items-center justify-center ${COLORS.primary.textMuted} ${COLORS.primary.text} transition-all duration-300`}>
                📧
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${COLORS.typography.heading.sm} ${COLORS.primary.text} mb-6 sm:mb-8`}>Quick Links</h4>
            <ul className={COLORS.layout.spacing.xs}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className={`${COLORS.primary.textMuted} ${COLORS.interactive.linkHover} text-left ${COLORS.typography.body.md} cursor-pointer`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className={`${COLORS.typography.heading.sm} ${COLORS.primary.text} mb-6 sm:mb-8`}>Activities</h4>
            <ul className={COLORS.layout.spacing.xs}>
              {activities.map((activity) => (
                <li key={activity.name}>
                  <button 
                    onClick={() => scrollToSection(activity.id)}
                    className={`${COLORS.primary.textMuted} ${COLORS.interactive.linkHover} text-left ${COLORS.typography.body.md} cursor-pointer`}
                  >
                    {activity.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`${COLORS.typography.heading.sm} ${COLORS.primary.text} mb-6 sm:mb-8`}>Connect</h4>
            <div className={COLORS.layout.spacing.sm}>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 ${COLORS.accent.primary} ${COLORS.effects.rounded} flex items-center justify-center`}>
                  🌐
                </div>
                <span className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm} break-all`}>www.iete-pce.org</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 ${COLORS.accent.secondary} ${COLORS.effects.rounded} flex items-center justify-center`}>
                  📧
                </div>
                <span className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm} break-all`}>iete.pce@gmail.com</span>
              </div>
            </div>
            
            <p className={`${COLORS.primary.textLight} ${COLORS.typography.body.sm} mt-6 sm:mt-8`}>
              Follow us for updates on events, workshops, and opportunities in electronics and telecommunications.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`${COLORS.primary.borderLight} border-t mt-12 sm:mt-16 pt-6 sm:pt-8 text-center`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm}`}>
              © 2025 IETE-PCE, Pillai College of Engineering. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer