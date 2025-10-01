import { useNavigate } from 'react-router-dom'
import { COLORS } from '../constants/colors'
import { APP_DATA } from '../data/appData'

const Footer = () => {
  const navigate = useNavigate()
  
  const activities = [
    { name: 'Workshops', route: '/events' },
    { name: 'Competitions', route: '/events' },
    { name: 'Seminars', route: '/events' },
    { name: 'Industrial Visits and Training', route: '/events' },
  ]

  // Handle navigation to events page
  const handleNavigation = (route) => {
    navigate(route)
  }

  return (
    <footer className={`${COLORS.primary.bgSecondary} ${COLORS.primary.borderLight} border-t px-4`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* About Section (Left) */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              {/* Logo */}
              <img 
                src={APP_DATA.site.logo.src || APP_DATA.site.logo.url} 
                alt={APP_DATA.site.logo.alt || APP_DATA.site.name}
                className="h-12 object-contain hover:scale-105 transition-transform duration-300"
              />
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

          {/* Right Side Sections Wrapper */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 ml-6 sm:ml-8">
            {/* Activities */}
            <div>
              <h4 className={`${COLORS.typography.heading.sm} ${COLORS.primary.text} mb-6 sm:mb-8`}>Activities</h4>
              <ul className={COLORS.layout.spacing.xs}>
                {activities.map((activity) => (
                  <li key={activity.name}>
                    <button 
                      onClick={() => handleNavigation(activity.route)}
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
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${COLORS.accent.secondary} ${COLORS.effects.rounded} flex items-center justify-center`}>
                    📧
                  </div>
                  <span className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm} break-all`}>ietepce@mes.ac.in</span>
                </div>
              </div>
              <p className={`${COLORS.primary.textLight} ${COLORS.typography.body.sm} mt-6 sm:mt-8`}>
                Follow us for updates on events, workshops, and opportunities in electronics and telecommunications.
              </p>
            </div>
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