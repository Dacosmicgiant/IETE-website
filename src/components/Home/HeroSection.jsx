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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 bg-slate-950">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Floating elements - hidden on mobile for cleaner look */}
      <div className="hidden lg:block absolute top-32 right-20 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      <div className="hidden lg:block absolute bottom-40 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300 opacity-40"></div>
      <div className="hidden lg:block absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-500 opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Grid Layout - Two Sections Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Section - Main Content */}
          <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 text-white tracking-tight leading-tight">
                IETE<span className="text-cyan-400">-PCE</span>
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 text-slate-300 leading-relaxed">
                The Institution of Electronics and <span className="text-blue-400 font-semibold">Telecommunication Engineers</span>
              </h2>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
              Shaping the future of technology through innovation, research, and excellence in Electronics, 
              Telecommunication & IT at Pillai College of Engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('join')}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl sm:rounded-2xl font-semibold text-slate-950 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Join IETE-PCE
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700 hover:bg-slate-700/50 rounded-xl sm:rounded-2xl font-semibold text-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section - Innovation Hub & Stats */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Innovation Hub Card */}
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center text-white hover:bg-slate-800/40 transition-all duration-300 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl font-bold text-slate-950">I</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">Innovation Hub</h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Where technology meets creativity, and students become tomorrow's engineers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection