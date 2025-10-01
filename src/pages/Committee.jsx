import { COLORS } from '../constants/colors'
import Image from '../components/ui/Image'
import { APP_DATA, getEnabledCommitteeMembers } from '../data/appData'

const Committee = () => {
  const allMembers = getEnabledCommitteeMembers()
  const config = APP_DATA.config.committee
  const groupPhoto = APP_DATA.committee.groupPhoto
  const combinedMembers = APP_DATA.committee.combinedMembers

  // Individual Member Card Component
  const IndividualMemberCard = ({ member }) => (
    <div className="group text-center">
      {/* Member Photo using new image system */}
      <div className="max-w-xs mx-auto mb-4 sm:mb-6">
        <Image
          imageData={member.image}
          containerClassName="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Member Info */}
      <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-4 sm:p-6 ${COLORS.primary.text} ${COLORS.interactive.cardHover}`}>
        <h4 className={`${COLORS.typography.heading.sm} mb-1 sm:mb-2 leading-tight`}>
          {member.name}
        </h4>
        
        {member.position && (
          <p className={`${COLORS.accent.primaryText} font-semibold text-sm sm:text-base leading-tight mb-2`}>
            {member.position}
          </p>
        )}
        
        {member.year && (
          <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm} mb-2`}>
            {member.year}
          </p>
        )}
        
        {config.showBios && member.bio && (
          <p className={`${COLORS.primary.textSecondary} text-xs sm:text-sm mb-3 italic`}>
            "{member.bio}"
          </p>
        )}
        
        {config.showSpecializations && member.specialization && (
          <div className="mb-3">
            <span className={`text-xs px-2 py-1 ${COLORS.effects.rounded} bg-slate-700/50 ${COLORS.primary.textSecondary}`}>
              {member.specialization}
            </span>
          </div>
        )}
        
        {config.showAchievements && member.achievements && (
          <div className="mb-3">
            <p className={`${COLORS.primary.textMuted} text-xs font-medium mb-1`}>Achievements:</p>
            <ul className="text-xs text-left">
              {member.achievements.slice(0, 2).map((achievement, index) => (
                <li key={index} className={`${COLORS.primary.textSecondary} mb-1`}>
                  • {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {config.showEmails && member.email && (
          <p className={`${COLORS.primary.textMuted} text-xs mt-2`}>
            ✉️ {member.email}
          </p>
        )}
        
        {config.showPhones && member.phone && (
          <p className={`${COLORS.primary.textMuted} text-xs mt-1`}>
            📞 {member.phone}
          </p>
        )}
        
        {config.showSocialLinks && member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block mt-2 text-xs ${COLORS.accent.primaryText} hover:underline`}
          >
            🔗 LinkedIn
          </a>
        )}
      </div>
    </div>
  )

  // Combined Member Card Component
  const CombinedMemberCard = ({ combinedData }) => (
    <div className="group text-center">
      {/* Combined Photo using new image system */}
      <div className="max-w-xs mx-auto mb-4 sm:mb-6">
        <Image
          imageData={combinedData.image}
          containerClassName="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Combined Member Info */}
      <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-4 sm:p-6 ${COLORS.primary.text} ${COLORS.interactive.cardHover}`}>
        {combinedData.title && (
          <h4 className={`${COLORS.typography.heading.sm} mb-3 leading-tight`}>
            {combinedData.title}
          </h4>
        )}
        
        {combinedData.members.map((member, index) => (
          <div key={index} className={index > 0 ? "mt-3 pt-3 border-t border-slate-700/50" : ""}>
            <h4 className={`${COLORS.typography.heading.sm} mb-1 leading-tight`}>
              {member.name}
            </h4>
            
            {member.position && (
              <p className={`${COLORS.accent.primaryText} font-semibold text-sm sm:text-base leading-tight mb-1`}>
                {member.position}
              </p>
            )}
            
            {member.year && (
              <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm} mb-2`}>
                {member.year}
              </p>
            )}
            
            {config.showSpecializations && member.specialization && (
              <p className={`${COLORS.primary.textSecondary} text-xs mb-2`}>
                {member.specialization}
              </p>
            )}
            
            {config.showEmails && member.email && (
              <p className={`${COLORS.primary.textMuted} text-xs`}>
                ✉️ {member.email}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className={`min-h-screen ${COLORS.primary.bg} pt-10 px-4 sm:px-6 lg:px-8`}>
      <div className="w-full py-12 sm:py-16">

        

        {/* Artistically Styled Committee Members Grid Box with Frame */}
        <div className={`max-w-6xl mx-auto mb-12 shadow-2xl ${COLORS.effects.roundedLg} bg-blue-800  p-1.5`}>
          <div
            className={`w-full h-full p-8 sm:p-12 ${COLORS.primary.bgSecondary} ${COLORS.effects.rounded}`}
          > 

            {/* Committee Group Photo */}
            {groupPhoto && (
              <div className="mb-16 sm:mb-20">
                <div className="relative w-[50vw] h-[32vw] max-w-full mx-auto overflow-hidden">
                  <Image
                    imageData={groupPhoto}
                    containerClassName="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {groupPhoto.title && (
                  <div className="text-center mt-4">
                    <h3 className={`${COLORS.typography.heading.md} ${COLORS.primary.text} mb-2`}>
                      {groupPhoto.title}
                    </h3>
                    {groupPhoto.description && (
                      <p className={`${COLORS.primary.textMuted} text-sm`}>
                        {groupPhoto.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            
            
            {/* Dynamic Grid Layout */}
            <div className={`grid grid-cols-1 ${
              config.gridLayout === '4-column' ? 'lg:grid-cols-4 md:grid-cols-2' :
              config.gridLayout === '3-column' ? 'lg:grid-cols-3 md:grid-cols-2' :
              'md:grid-cols-2'
            } gap-x-24 lg:gap-x-40 gap-y-12 max-w-4xl mx-auto`}>
              
              {/* Render all members */}
              {allMembers.map((member) => (
                <IndividualMemberCard key={member.id} member={member} />
              ))}
              
              {/* Render combined cards if enabled */}
              {config.showCombinedMembers && combinedMembers.filter(cm => cm.enabled !== false).map((combinedData) => (
                <CombinedMemberCard key={combinedData.id} combinedData={combinedData} />
              ))}
            </div>
          </div>
        </div>

        {/* Member Details by Teams Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-4 sm:mb-6`}>
              Team Members
            </h2>
            <p className={`${COLORS.primary.textMuted} text-lg max-w-3xl mx-auto`}>
              Meet our dedicated team members across different departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Technical Team */}
            <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover}`}>
              <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center`}>
                🛠️ Technical Team
              </h3>
              <div className="space-y-2">
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Karan</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Omswaroop Gupta</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Rajdeep</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Sameeksha</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Vaishnavi</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Uddhav</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Yash R</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Yash</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Atharva</p>
              </div>
            </div>

            {/* Graphics Team */}
            <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover}`}>
              <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center`}>
                🎨 Graphics
              </h3>
              <div className="space-y-2">
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Narayan Yadav</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Rutuja Pathak</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Jyotilipsa Mishra</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Aditya Moon</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Vedant Mishra</p>
              </div>
            </div>

            {/* Publicity Team */}
            <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover}`}>
              <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center`}>
                📢 Publicity
              </h3>
              <div className="space-y-2">
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Nupur</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Aditi Vishwakarma</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Shreeya</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Sarvesh</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Swarup</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Aditya M</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Tanishq Salunkhe</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Rutuja</p>
              </div>
            </div>

            {/* Social Media Team */}
            <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover}`}>
              <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center`}>
                📱 Social Media
              </h3>
              <div className="space-y-2">
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Adhil</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Purva</p>
                <p className={`${COLORS.primary.textSecondary} text-sm`}>Sahil Manve</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Committee