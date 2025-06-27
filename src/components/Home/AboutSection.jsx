import { COLORS } from '../../constants/colors'

const AboutSection = () => {
  return (
    <section id="about" className={`min-h-screen ${COLORS.primary.bgSecondary} px-4 ${COLORS.layout.section}`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        <div className={`text-center ${COLORS.layout.spacing.xl}`}>
          <h2 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} mb-4 sm:mb-6`}>
            About <span className={COLORS.accent.primaryText}>IETE-PCE</span>
          </h2>
        </div>
        
        <div className={`${COLORS.layout.grid.cols2} lg:gap-16 items-center ${COLORS.layout.spacing.xl}`}>
          <div className={`${COLORS.primary.text} pt-4 order-2 lg:order-1`}>
            
            <p className={`${COLORS.typography.body.lg} ${COLORS.primary.textSecondary} mb-6 sm:mb-8`}>
              The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading 
              recognised professional society devoted to the advancement of Science and Technology of 
              Electronics, Telecommunication. Founded in 2024.
            </p>
            <p className={`${COLORS.typography.body.md} ${COLORS.primary.textMuted} mb-6 sm:mb-8`}>
              IETE is the National Apex Professional body of Electronics and Telecommunication, Computer 
              Science and IT Professionals. It serves more than 1,25,000 members through various 63 Centres, 
              spread all over India and abroad.
            </p>
            <p className={`${COLORS.typography.body.md} ${COLORS.primary.textMuted}`}>
              The Institution provides leadership in Scientific and Technical areas of direct importance 
              to the national development and economy. Government of India has recognised IETE as a 
              Scientific and Industrial Research Organization (SIRO).
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            {/* Placeholder Image - Replace with your own image */}
            {/* Aspect Ratio: 4:3 (More square, better proportioned) */}
            <div className={`aspect-[4/3] w-full max-w-lg ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed mx-auto`}>
              <div className="text-center p-8">
                <div className="text-5xl mb-4">🖼️</div>
                <p className={`${COLORS.primary.textMuted} text-base font-medium`}>
                  Replace with your image
                </p>
                <p className={`${COLORS.primary.textLight} text-sm mt-2`}>
                  Aspect Ratio: 4:3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection