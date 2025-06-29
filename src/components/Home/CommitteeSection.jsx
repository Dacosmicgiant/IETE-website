import { COLORS } from '../../constants/colors'

const CommitteeSection = () => {
  const executiveCommittee = [
    {
      id: 1,
      name: "Student Name",
      position: "President",
      year: "Final Year"
    },
    {
      id: 2,
      name: "Student Name",
      position: "Vice President",
      year: "Third Year"
    },
    {
      id: 3,
      name: "Student Name",
      position: "Secretary",
      year: "Third Year"
    },
    {
      id: 4,
      name: "Student Name",
      position: "Treasurer",
      year: "Second Year"
    }
  ]

  return (
    <section id="committee" className={`min-h-screen ${COLORS.primary.bgSecondary} px-4 ${COLORS.layout.section}`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} mb-4 sm:mb-6`}>Core Team</h2>
         
        </div>

        {/* Executive Committee */}
        <div className={`${COLORS.layout.grid.cols4} ${COLORS.layout.grid.gap} max-w-4xl mx-auto`}>
          {executiveCommittee.map((member) => (
            <div key={member.id} className="group text-center">
              {/* Placeholder Image - Replace with actual photos */}
              {/* Aspect Ratio: 3:4 (Portrait) */}
              <div className={`aspect-[3/4] w-full ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">👤</div>
                  <p className={`${COLORS.primary.textMuted} text-xs`}>
                    Replace with photo<br/>
                    <span className="text-xs">3:4 Ratio</span>
                  </p>
                </div>
              </div>
              
              <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-4 sm:p-6 ${COLORS.primary.text} ${COLORS.interactive.cardHover}`}>
                <h4 className={`${COLORS.typography.heading.sm} mb-1 sm:mb-2`}>{member.name}</h4>
                <p className={`${COLORS.accent.primaryText} font-semibold text-sm sm:text-base mb-2`}>{member.position}</p>
                <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm}`}>{member.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommitteeSection