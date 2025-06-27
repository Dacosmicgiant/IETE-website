import { COLORS } from '../constants/colors'

const Committee = () => {
  const committeeMembers = [
    {
      id: 1,
      name: "Saniya Mahadik",
      position: "President"
    },
    {
      id: 2,
      name: "Shravani Margaj",
      position: "Vice President"
    },
    {
      id: 3,
      name: "Riddhi Samarth",
      position: "Secretary"
    },
    {
      id: 4,
      name: "Akanksha Rakshe",
      position: "Treasurer"
    },
    {
      id: 5,
      name: "Nikita Ekunde",
      position: "Publicity Head"
    },
    {
      id: 6,
      name: "Aditi Patil",
      position: "Content Head"
    },
    {
      id: 7,
      name: "Chinmay Dabholkar",
      position: "Graphics Head"
    },
    {
      id: 8,
      name: "Reva Patil",
      position: "Social Media Head"
    },
    {
      id: 9,
      name: "Pratiksha Chaudhari",
      position: "Coordinator Nominated Member"
    },
    {
      id: 10,
      name: "Narayan Yadav",
      position: "Coordinator Nominated Member"
    }
  ]

  return (
    <div className={`min-h-screen ${COLORS.primary.bg} pt-20 px-4`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        

        {/* Committee Group Photo */}
        <div className="mb-16">
          <div className={`aspect-video w-full max-w-4xl mx-auto ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed`}>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">📸</div>
              <p className={`${COLORS.primary.textMuted} text-lg font-medium`}>
                Committee Group Photo
              </p>
              <p className={`${COLORS.primary.textLight} text-sm mt-2`}>
                Aspect Ratio: 16:9
              </p>
            </div>
          </div>
        </div>

        {/* Committee Members Grid */}
        <div className="mb-12">
          <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-8 text-center`}>
            Leadership Team
          </h2>
          
          {/* 2 Columns x 5 Rows Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {committeeMembers.map((member) => (
              <div key={member.id} className="group text-center">
                {/* Member Photo Placeholder - 3:4 Aspect Ratio */}
                <div className={`aspect-[3/4] w-full max-w-xs mx-auto ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">👤</div>
                    <p className={`${COLORS.primary.textMuted} text-xs`}>
                      Replace with photo<br/>
                      <span className="text-xs">3:4 Ratio</span>
                    </p>
                  </div>
                </div>
                
                {/* Member Info */}
                <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-4 sm:p-6 ${COLORS.primary.text} ${COLORS.interactive.cardHover}`}>
                  <h4 className={`${COLORS.typography.heading.sm} mb-1 sm:mb-2`}>{member.name}</h4>
                  <p className={`${COLORS.accent.primaryText} font-semibold text-sm sm:text-base`}>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Committee