// src/components/Home/EventsSection.jsx
import { useNavigate } from 'react-router-dom'
import { COLORS } from '../../constants/colors'
import { APP_DATA } from '../../data/appData'

const EventsSection = () => {
  const navigate = useNavigate()
  const eventCategories = APP_DATA.events.categories

  // Get enabled categories only
  const enabledCategories = Object.entries(eventCategories)
    .filter(([key, category]) => category.enabled)
    .map(([key, category]) => ({
      key,
      ...category,
      route: `/events/${key}`
    }))

  return (
    <section id="events" className={`min-h-screen ${COLORS.primary.bg} px-4 ${COLORS.layout.section}`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        <div className={`text-center mb-12 sm:mb-16`}>
          <h2 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} pt-15 mb-4 sm:mb-6`}>Tech Events & Workshops</h2>
          <p className={`${COLORS.typography.body.lg} ${COLORS.primary.textMuted} max-w-3xl mx-auto`}>
            Join our cutting-edge workshops, seminars, and competitions designed to enhance your technical skills
          </p>
        </div>

        {/* Event Categories */}
        <div className={`${COLORS.layout.grid.cols4} ${COLORS.layout.grid.gap} max-w-6xl mx-auto`}>
          {enabledCategories.map((category) => (
            <div 
              key={category.key}
              className={`text-center p-6 sm:p-8 ${COLORS.effects.glass} ${COLORS.effects.roundedLg} ${COLORS.interactive.cardHover} group cursor-pointer transition-all duration-300 hover:scale-105`}
              onClick={() => navigate(category.route)}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{category.icon}</div>
              <h4 className={`${COLORS.primary.text} font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 group-hover:${COLORS.accent.primaryText} transition-colors`}>
                {category.name}
              </h4>
              <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm}`}>
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection