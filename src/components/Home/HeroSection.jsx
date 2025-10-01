// src/components/Home/HeroSection.jsx
import { COLORS } from '../../constants/colors'
import Image from '../ui/Image'
import { APP_DATA } from '../../data/appData'

const HeroSection = () => {
  const siteData = APP_DATA.site
  
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full">
          <img
            src={siteData.hero.url}
            alt={siteData.hero.alt || 'IETE-PCE Hero Background'}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </div>
      </div>
      
      {/* Dark Translucent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/40 to-slate-900/80"></div>
      
      {/* Mobile/Tablet Text Content - Hidden on Large Screens */}
      <div className="lg:hidden relative z-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-tight drop-shadow-2xl">
          {siteData.name}
        </h1>
        
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 mb-6 leading-relaxed drop-shadow-lg">
          {siteData.fullName}
        </h2>
        
        <p className="text-base sm:text-lg text-slate-300 mb-8 font-light drop-shadow-md max-w-md mx-auto">
          Excellence in Engineering
        </p>
        
        {/* Simple Button for Mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm mx-auto">
          <button 
            onClick={() => scrollToSection('about')}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold transition-all duration-300 drop-shadow-lg"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Desktop Text Content - Hidden on Small/Medium Screens */}
      <div className="hidden lg:block relative z-20 text-center px-8">
        <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
          {siteData.name}
        </h1>
        
        <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-medium text-slate-200 mb-8 leading-relaxed drop-shadow-lg">
          {siteData.fullName}
        </h2>
        
        <p className="text-xl xl:text-2xl text-slate-300 mb-12 font-light drop-shadow-md max-w-2xl mx-auto">
          Excellence in Engineering
        </p>
        
        {/* Simple Button for Desktop */}
        <div className="flex justify-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold transition-all duration-300 drop-shadow-lg text-lg"
          >
            Learn More
          </button>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  )
}

export default HeroSection