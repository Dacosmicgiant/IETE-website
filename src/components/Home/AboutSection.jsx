import { COLORS } from '../../constants/colors'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900">
      {/* About IETE Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
            📖 About IETE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IETE-PCE</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">About IETE</h3>
            <p className="text-lg text-gray-300 mb-6">
              The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading 
              recognised professional society devoted to the advancement of Science and Technology of 
              Electronics, Telecommunication & IT. Founded in 1953.
            </p>
            <p className="text-gray-400 mb-6">
              IETE is the National Apex Professional body of Electronics and Telecommunication, Computer 
              Science and IT Professionals. It serves more than 1,25,000 members through various 63 Centres, 
              spread all over India and abroad.
            </p>
            <p className="text-gray-400">
              The Institution provides leadership in Scientific and Technical areas of direct importance 
              to the national development and economy. Government of India has recognised IETE as a 
              Scientific and Industrial Research Organization (SIRO).
            </p>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
              <div className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Since 1953
              </div>
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🎓</div>
              </div>
              <div className="mt-4 text-center text-white">
                <h4 className="font-semibold">Professional Excellence</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About IETE-PCE Chapter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">IETE-PCE Chapter</h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            The IETE-PCE chapter at Pillai College of Engineering serves as a bridge between 
            academic learning and professional excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-white">
            <div className="text-blue-400 mb-4">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Academic Excellence</h4>
            <p className="text-gray-300">
              Promoting academic excellence through workshops, seminars, and technical competitions 
              that enhance students' understanding of core subjects.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-white">
            <div className="text-orange-400 mb-4">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Industry Connect</h4>
            <p className="text-gray-300">
              Bridging the gap between academia and industry through guest lectures, industrial 
              visits, and internship opportunities.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-white">
            <div className="text-purple-400 mb-4">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Research & Innovation</h4>
            <p className="text-gray-300">
              Encouraging research activities and innovative projects that contribute to 
              technological advancement and scientific progress.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <h4 className="text-xl font-bold text-white mb-4">Technical Development</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Organize technical workshops and hands-on training sessions
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Conduct seminars on emerging technologies
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Promote project-based learning and innovation
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Facilitate participation in national competitions
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <h4 className="text-xl font-bold text-white mb-4">Professional Growth</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Provide industry exposure and networking opportunities
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Organize career guidance sessions
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Facilitate professional certifications
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Build leadership and communication skills
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection