import { COLORS } from '../../constants/colors'
import Image from '../ui/Image'

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 ${COLORS.primary.bg}`}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className={`relative z-10 ${COLORS.layout.container} w-full`}>
        {/* Grid Layout - Two Sections Side by Side */}
        <div className={`${COLORS.layout.grid.cols2} lg:gap-16 items-center min-h-[80vh]`}>
          
          {/* Left Section - Main Content */}
          <div className={`${COLORS.primary.text} ${COLORS.layout.spacing.md} order-2 lg:order-1`}>
            
            <div>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 ${COLORS.primary.text} tracking-tight leading-tight`}>
                IETE-PCE
              </h1>
              
              <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 ${COLORS.primary.textSecondary} leading-relaxed`}>
                The Institution of Electronics and <span className={`${COLORS.accent.primaryText} font-semibold`}>Telecommunication Engineers</span>
              </h2>
            </div>
            
            <p className={`${COLORS.typography.body.lg} ${COLORS.primary.textMuted} max-w-2xl`}>
              Shaping the future of technology through innovation, research, and excellence in Electronics & 
              Telecommunication at Pillai College of Engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('join')}
                className={`group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 ${COLORS.interactive.buttonPrimary} ${COLORS.effects.rounded} sm:${COLORS.effects.roundedLg} font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25`}
              >
                Join IETE-PCE
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 ${COLORS.interactive.buttonSecondary} ${COLORS.effects.rounded} sm:${COLORS.effects.roundedLg} font-semibold transition-all duration-300`}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section - Hero Image */}
          <div className={`${COLORS.layout.spacing.md} order-1 lg:order-2`}>
            <Image 
              imagePath="hero.main"
              containerClassName="transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection