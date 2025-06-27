import { COLORS } from '../../constants/colors'

const FacultySection = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Faculty Name",
      position: "Principal"
    },
    {
      id: 2,
      name: "Dr. Faculty Name", 
      position: "Head of Department"
    },
    {
      id: 3,
      name: "Prof. Faculty Name",
      position: "Professor"
    }
  ]

  return (
    <section id="faculty" className={`min-h-screen ${COLORS.primary.bg} px-4 ${COLORS.layout.section}`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} mb-2 sm:mb-3`}>Our Faculty</h2>
        </div>

        <div className={`${COLORS.layout.grid.cols3} gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto`}>
          {facultyMembers.map((faculty) => (
            <div key={faculty.id} className="group text-center">
              {/* Placeholder Image - 3:4 Aspect Ratio */}
              <div className={`aspect-[3/4] w-full ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">👤</div>
                  <p className={`${COLORS.primary.textMuted} text-xs`}>
                    Replace with photo<br/>
                    <span className="text-xs">3:4 Ratio</span>
                  </p>
                </div>
              </div>
              
              <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-4 sm:p-6 ${COLORS.primary.text} ${COLORS.interactive.cardHover}`}>
                <h4 className={`${COLORS.typography.heading.sm} mb-1 sm:mb-2`}>{faculty.name}</h4>
                <p className={`${COLORS.accent.primaryText} font-semibold text-sm sm:text-base`}>{faculty.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacultySection