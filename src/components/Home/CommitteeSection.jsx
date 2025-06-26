import { COLORS } from '../../constants/colors'

const CommitteeSection = () => {
  const executiveCommittee = [
    {
      id: 1,
      name: "Student Name",
      position: "President",
      year: "Final Year",
      branch: "Electronics & Telecommunication",
      description: "Leading the organization toward excellence",
      color: "cyan"
    },
    {
      id: 2,
      name: "Student Name",
      position: "Vice President",
      year: "Third Year",
      branch: "Electronics & Computer Science",
      description: "Supporting strategic initiatives",
      color: "blue"
    },
    {
      id: 3,
      name: "Student Name",
      position: "Secretary",
      year: "Third Year",
      branch: "Information Technology",
      description: "Managing operations and communications",
      color: "purple"
    },
    {
      id: 4,
      name: "Student Name",
      position: "Treasurer",
      year: "Second Year",
      branch: "Computer Engineering",
      description: "Managing finances and resources",
      color: "emerald"
    }
  ]

  const getColorClass = (color) => {
    switch (color) {
      case 'cyan': return 'bg-cyan-500'
      case 'blue': return 'bg-blue-500'
      case 'purple': return 'bg-purple-500'
      case 'emerald': return 'bg-emerald-500'
      default: return 'bg-slate-500'
    }
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <section id="committee" className="min-h-screen bg-slate-900 px-4 py-12">
      <div className="max-w-7xl mx-auto py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">Leadership Team</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Meet the dedicated team leading IETE-PCE toward excellence and innovation
          </p>
        </div>

        {/* Executive Committee */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">Executive Committee</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {executiveCommittee.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 ${getColorClass(member.color)} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto text-white font-bold text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    {getInitials(member.name)}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-amber-400 rounded-full"></div>
                </div>
                
                <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white hover:bg-slate-800/50 transition-all duration-300">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{member.name}</h4>
                  <p className="text-cyan-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.position}</p>
                  <div className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">
                    <p>{member.year}</p>
                    <p className="leading-tight">{member.branch}</p>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm font-light">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        
      </div>
    </section>
  )
}

export default CommitteeSection