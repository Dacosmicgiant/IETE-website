import { COLORS } from '../../constants/colors'
import Image from '../ui/Image'

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
            <div className="max-w-lg mx-auto">
              <Image 
                imagePath="about.main"
                containerClassName="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection