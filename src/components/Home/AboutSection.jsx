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
            
            {/* About IETE-PCE Content */}
            <div className="text-justify space-y-6 sm:space-y-8">
              <p className={`${COLORS.typography.body.lg} ${COLORS.primary.textSecondary}`}>
                The Institution of Electronics and Telecommunication Engineers (IETE) at PCE is a premier student chapter dedicated to fostering excellence in electronics and telecommunication engineering. We provide a platform for students to explore cutting-edge technologies, participate in technical competitions, and develop professional skills through hands-on workshops and industry interactions.
              </p>
              
              <p className={`${COLORS.typography.body.md} ${COLORS.primary.textMuted}`}>
                Our mission is to bridge the gap between theoretical knowledge and practical application, preparing students for successful careers in the rapidly evolving field of electronics and telecommunications. Through regular seminars, technical workshops, hackathons, and industry visits, we ensure our members stay ahead of technological trends and develop the skills needed to excel in their professional journey.
              </p>
            
            </div>
          </div>
          
          {/* Second Container - IETE About Image */}
          <div className="flex-1 order-1 lg:order-2 mb-8 lg:mb-0">
            <img
              src={siteData.about.url}
              alt={siteData.about.alt || 'About IETE-PCE'}
              className="w-full h-auto transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection