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

        
      </div>
    </section>
  )
}

export default AboutSection