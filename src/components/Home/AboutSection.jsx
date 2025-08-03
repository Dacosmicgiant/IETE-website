// src/components/Home/AboutSection.jsx
import { COLORS } from '../../constants/colors'
import Image from '../ui/Image'
import { APP_DATA } from '../../data/appData'

const AboutSection = () => {
  const siteData = APP_DATA.site
  
  return (
    <section id="about" className={`min-h-screen ${COLORS.primary.bgSecondary} px-4 ${COLORS.layout.section}`}>
      <div className={`${COLORS.layout.container} ${COLORS.layout.section}`}>
        
        {/* Flexbox Layout - Two Main Containers */}
        <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
          
          {/* First Container - About Heading + Lorem Ipsum */}
          <div className="flex-1 flex flex-col order-2 lg:order-1">
            {/* About Heading */}
            <h2 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} text-center mb-6 sm:mb-8`}>
              About <span className={COLORS.accent.primaryText}>{siteData.name}</span>
            </h2>
            
            {/* Lorem Ipsum Content - Justified */}
            <div className="text-justify space-y-6 sm:space-y-8">
              <p className={`${COLORS.typography.body.lg} ${COLORS.primary.textSecondary}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              
              <p className={`${COLORS.typography.body.md} ${COLORS.primary.textMuted}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            
            </div>
          </div>
          
          {/* Second Container - Image Only (No Container Wrapper) */}
          <div className="flex-1 order-1 lg:order-2 mb-8 lg:mb-0">
            <img
              src={siteData.about.url}
              alt={siteData.about.alt || 'About IETE-PCE'}
              className="w-full h-auto transition-transform duration-300 hover:scale-105 "
              loading="lazy"
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection