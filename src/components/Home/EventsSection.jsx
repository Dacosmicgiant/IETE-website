import { COLORS } from '../../constants/colors'

const EventsSection = () => {
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
          <div className={`text-center p-6 sm:p-8 ${COLORS.effects.glass} ${COLORS.effects.roundedLg} ${COLORS.interactive.cardHover} group`}>
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
            <h4 className={`${COLORS.primary.text} font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2`}>Workshops</h4>
            <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm}`}>Hands-on learning</p>
          </div>
          <div className={`text-center p-6 sm:p-8 ${COLORS.effects.glass} ${COLORS.effects.roundedLg} ${COLORS.interactive.cardHover} group`}>
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏆</div>
            <h4 className={`${COLORS.primary.text} font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2`}>Competitions</h4>
            <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm}`}>Technical challenges</p>
          </div>
          <div className={`text-center p-6 sm:p-8 ${COLORS.effects.glass} ${COLORS.effects.roundedLg} ${COLORS.interactive.cardHover} group`}>
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎤</div>
            <h4 className={`${COLORS.primary.text} font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2`}>Seminars</h4>
            <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm}`}>Expert talks</p>
          </div>
          <div className={`text-center p-6 sm:p-8 ${COLORS.effects.glass} ${COLORS.effects.roundedLg} ${COLORS.interactive.cardHover} group`}>
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚</div>
            <h4 className={`${COLORS.primary.text} font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2`}>Training</h4>
            <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm}`}>Skill development</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection