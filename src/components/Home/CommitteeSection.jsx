import { COLORS } from '../../constants/colors'
import Image from '../ui/Image'
import { 
  committeeMembers, 
  combinedMembers, 
  committeeConfig, 
  getExecutiveMembers,
  getAllMembersOrdered 
} from '../../data/committeeData'

const CommitteeSection = () => {
  // Get only executive members for home page (first 4)
  const executiveMembers = getExecutiveMembers().slice(0, 4)
  const config = committeeConfig.displaySettings

  return (
    <section id="committee" className={`min-h-screen ${COLORS.primary.bgSecondary} px-4 ${COLORS.layout.section}`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} mb-4 sm:mb-6`}>
            Core Team
          </h2>
        </div>

        {/* Executive Committee Preview */}
        <div className={`${COLORS.layout.grid.cols4} ${COLORS.layout.grid.gap} max-w-4xl mx-auto`}>
          {executiveMembers.map((member) => (
            <div key={member.id} className="group text-center">
              {/* Member Photo using centralized image system */}
              <div className="max-w-xs mx-auto mb-3 sm:mb-4">
                <Image 
                  imagePath={member.imageKey}
                  containerClassName="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-4 sm:p-6 ${COLORS.primary.text} ${COLORS.interactive.cardHover}`}>
                <h4 className={`${COLORS.typography.heading.sm} mb-1 sm:mb-2`}>
                  {member.name}
                </h4>
                <p className={`${COLORS.accent.primaryText} font-semibold text-sm sm:text-base mb-2`}>
                  {member.position}
                </p>
                
                {config.showBios && member.bio && (
                  <p className={`${COLORS.primary.textMuted} text-xs mb-2 italic`}>
                    "{member.bio}"
                  </p>
                )}
                
                {member.year && (
                  <p className={`${COLORS.primary.textMuted} ${COLORS.typography.body.sm}`}>
                    {member.year}
                  </p>
                )}
                
                {config.showSpecializations && member.specialization && (
                  <p className={`${COLORS.primary.textSecondary} text-xs mt-2`}>
                    {member.specialization}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommitteeSection