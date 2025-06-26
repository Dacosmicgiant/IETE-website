import { COLORS } from '../../constants/colors'

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-slate-900 px-4 py-12">
      <div className="max-w-7xl mx-auto py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            About <span className="text-cyan-400">IETE-PCE</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="text-white order-2 lg:order-1">
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 font-light leading-relaxed">
              The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading 
              recognised professional society devoted to the advancement of Science and Technology of 
              Electronics, Telecommunication & IT. Founded in 1953.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 sm:mb-8 font-light leading-relaxed">
              IETE is the National Apex Professional body of Electronics and Telecommunication, Computer 
              Science and IT Professionals. It serves more than 1,25,000 members through various 63 Centres, 
              spread all over India and abroad.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-light leading-relaxed">
              The Institution provides leadership in Scientific and Technical areas of direct importance 
              to the national development and economy. Government of India has recognised IETE as a 
              Scientific and Industrial Research Organization (SIRO).
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-cyan-500 text-slate-950 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                Since 1953
              </div>
              <div className="aspect-video bg-slate-700/30 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <div className="text-6xl sm:text-7xl md:text-8xl">🎓</div>
              </div>
              <div className="text-center text-white">
                <h4 className="text-lg sm:text-xl font-semibold">Professional Excellence</h4>
              </div>
            </div>
          </div>
        </div>

        {/* About IETE-PCE Chapter */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">IETE-PCE Chapter</h3>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-4xl mx-auto font-light">
            The IETE-PCE chapter at Pillai College of Engineering serves as a bridge between 
            academic learning and professional excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white hover:bg-slate-800/50 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-950" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Academic Excellence</h4>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Promoting academic excellence through workshops, seminars, and technical competitions 
              that enhance students' understanding of core subjects.
            </p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white hover:bg-slate-800/50 transition-all duration-300 group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Industry Connect</h4>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Bridging the gap between academia and industry through guest lectures, industrial 
              visits, and internship opportunities.
            </p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white hover:bg-slate-800/50 transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Research & Innovation</h4>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Encouraging research activities and innovative projects that contribute to 
              technological advancement and scientific progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection