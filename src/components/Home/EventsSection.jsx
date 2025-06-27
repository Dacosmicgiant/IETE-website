import { useNavigate } from 'react-router-dom'
import { COLORS } from '../../constants/colors'

const EventsSection = () => {
  const navigate = useNavigate()

  const eventCategories = [
    {
      icon: '🛠️',
      title: 'Workshops',
      description: 'Hands-on learning',
      route: '/events/workshops'
    },
    {
      icon: '🏆',
      title: 'Competitions',
      description: 'Technical challenges',
      route: '/events/competitions'
    },
    {
      icon: '🎤',
      title: 'Seminars',
      description: 'Expert talks',
      route: '/events/seminars'
    },
    {
      icon: '📚',
      title: 'Training',
      description: 'Skill development',
      route: '/events/training'
    }
  ]

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
          {eventCategories.map((category, index) => (
            <div 
              key={index}
              className={`text-center p-6 sm:p-8 ${COLORS.effects.glass} ${COLORS.effects.roundedLg} ${COLORS.interactive.cardHover} group cursor-pointer transition-all duration-300 hover:scale-105`}
              onClick={() => navigate(category.route)}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{category.icon}</div>
              <h4 className={`${COLORS.primary.text} font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 group-hover:${COLORS.accent.primaryText} transition-colors`}>
                {category.title}
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