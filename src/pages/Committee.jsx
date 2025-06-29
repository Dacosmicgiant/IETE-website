import { COLORS } from '../constants/colors'

const Committee = () => {
  // Regular committee members (individual cards)
  const regularMembers = [
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
      name: "Aayush Gupta",
      position: "Technical Head"
    },
    {
      id: 9,
      name: "Reva Patil",
      position: "Coordinator Nominated Member"
    }
  ]

  // Combined card for Coordinator Nominated Members
  const combinedMembers = {
    id: 'combined',
    members: [
      {
        name: "Pratiksha Chaudhari",
        position: "Coordinator Nominated Member"
      },
      {
        name: "Narayan Yadav", 
        position: "Coordinator Nominated Member"
      }
    ]
  }

  // Individual Member Card Component
  const IndividualMemberCard = ({ member }) => (
    <div className="group text-center">
      {/* Member Photo Placeholder - 3:4 Aspect Ratio */}
      <div className={`aspect-[3/4] w-full max-w-xs mx-auto ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
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
        <h4 className={`${COLORS.typography.heading.sm} mb-1 sm:mb-2 leading-tight`}>{member.name}</h4>
        <p className={`${COLORS.accent.primaryText} font-semibold text-sm sm:text-base leading-tight`}>{member.position}</p>
      </div>
    </div>
  )

  // Combined Member Card Component
  const CombinedMemberCard = ({ combinedData }) => (
    <div className="group text-center">
      {/* Shared Photo Placeholder - 3:4 Aspect Ratio */}
      <div className={`aspect-[3/4] w-full max-w-xs mx-auto ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
        <div className="text-center p-4">
          <div className="text-3xl mb-2">👥</div>
          <p className={`${COLORS.primary.textMuted} text-xs`}>
            Combined photo<br/>
            <span className="text-xs">3:4 Ratio</span>
          </p>
        </div>
      </div>
      
      {/* Combined Member Info */}
      <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-4 sm:p-6 ${COLORS.primary.text} ${COLORS.interactive.cardHover}`}>
        {combinedData.members.map((member, index) => (
          <div key={index} className={index > 0 ? "mt-3 pt-3 border-t border-slate-700/50" : ""}>
            <h4 className={`${COLORS.typography.heading.sm} mb-1 leading-tight`}>{member.name}</h4>
            <p className={`${COLORS.accent.primaryText} font-semibold text-sm sm:text-base leading-tight`}>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className={`min-h-screen ${COLORS.primary.bg} pt-20 px-4 sm:px-6 lg:px-8`}>
      <div className="w-full py-12 sm:py-16">

        {/* Committee Group Photo - Full Width with Height Constraint */}
        <div className="mb-16 sm:mb-20">
          <div className={`aspect-video w-full max-h-[70vh] ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed`}>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">📸</div>
              <p className={`${COLORS.primary.textMuted} text-lg font-medium`}>
                Committee Group Photo
              </p>
              <p className={`${COLORS.primary.textLight} text-sm mt-2`}>
                Aspect Ratio: 16:9 - Max Height: 70vh
              </p>
            </div>
          </div>
        </div>

        {/* Committee Members Grid - Full Width */}
        <div className="mb-12">
          <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-12 text-center`}>
            Leadership Team
          </h2>
          
          {/* 2 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Render regular members */}
            {regularMembers.map((member) => (
              <IndividualMemberCard key={member.id} member={member} />
            ))}
            
            {/* Render combined card */}
            <CombinedMemberCard combinedData={combinedMembers} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Committee