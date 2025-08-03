// src/components/Home/FacultySection.jsx
import { COLORS } from '../../constants/colors'
import Image from '../ui/Image'
import { APP_DATA, getEnabledFaculty } from '../../data/appData'
import { formatPersonName } from '../../utils/nameUtils.jsx'

const FacultySection = () => {
  const faculty = getEnabledFaculty()
  const config = APP_DATA.config.faculty

  return (
    <section id="faculty" className={`min-h-screen ${COLORS.primary.bg} px-4 ${COLORS.layout.section}`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-2 sm:mb-3`}>
            {config.sectionTitle}
          </h2>
          {config.sectionDescription && (
            <p className={`${COLORS.primary.textMuted} text-lg max-w-3xl mx-auto`}>
              {config.sectionDescription}
            </p>
          )}
        </div>

        <div className={`${
          config.gridLayout === '4-column' ? COLORS.layout.grid.cols4 :
          config.gridLayout === '2-column' ? COLORS.layout.grid.cols2 :
          COLORS.layout.grid.cols3
        } gap-12 sm:gap-16 lg:gap-20 max-w-4xl mx-auto`}>
          {faculty.map((member) => (
            <div key={member.id} className="group text-center">
              {/* Faculty Photo using new image system */}
              <div className="max-w-xs mx-auto mb-3 sm:mb-4">
                <Image 
                  imageData={member.image}
                  containerClassName="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-4 sm:p-6 ${COLORS.primary.text} ${COLORS.interactive.cardHover}`}>
                <h4 className={`${COLORS.typography.heading.sm} mb-1 sm:mb-2 leading-tight`}>
                  {formatPersonName(member.name, true)}
                </h4>
                
                {member.position && (
                  <p className={`${COLORS.accent.primaryText} font-semibold text-sm sm:text-base mb-2`}>
                    {config.showFullPositions && member.fullPosition ? member.fullPosition : member.position}
                  </p>
                )}
                
                {config.showQualifications && member.qualification && (
                  <p className={`${COLORS.primary.textMuted} text-xs sm:text-sm mb-1`}>
                    {member.qualification}
                  </p>
                )}
                
                {config.showExperience && member.experience && (
                  <p className={`${COLORS.primary.textMuted} text-xs sm:text-sm mb-2`}>
                    {member.experience} Experience
                  </p>
                )}
                
                {config.showBios && member.bio && (
                  <p className={`${COLORS.primary.textSecondary} text-xs sm:text-sm mb-3 italic`}>
                    "{member.bio}"
                  </p>
                )}
                
                {config.showSpecializations && member.specializations && (
                  <div className="mb-3">
                    <p className={`${COLORS.primary.textMuted} text-xs font-medium mb-1`}>Specializations:</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specializations.map((spec, index) => (
                        <span key={index} className={`text-xs px-2 py-1 ${COLORS.effects.rounded} bg-slate-700/50 ${COLORS.primary.textSecondary}`}>
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {config.showAchievements && member.achievements && (
                  <div className="mb-3">
                    <p className={`${COLORS.primary.textMuted} text-xs font-medium mb-1`}>Key Achievements:</p>
                    <ul className="text-xs text-left">
                      {member.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className={`${COLORS.primary.textSecondary} mb-1`}>
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {config.showOfficeInfo && (member.office || member.officeHours) && (
                  <div className="text-xs space-y-1">
                    {member.office && (
                      <p className={`${COLORS.primary.textMuted}`}>📍 {member.office}</p>
                    )}
                    {member.officeHours && (
                      <p className={`${COLORS.primary.textMuted}`}>🕒 {member.officeHours}</p>
                    )}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacultySection