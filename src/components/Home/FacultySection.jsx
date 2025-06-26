import { COLORS } from '../../constants/colors'

const FacultySection = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Faculty Name",
      position: "Principal",
      department: "Pillai College of Engineering",
      description: "Providing institutional leadership and strategic direction",
      color: "cyan"
    },
    {
      id: 2,
      name: "Dr. Faculty Name",
      position: "Head of Department",
      department: "Electronics & Telecommunication Engineering",
      description: "Leading academic excellence in E&TC department",
      color: "blue"
    },
    {
      id: 3,
      name: "Prof. Faculty Name",
      position: "Professor",
      department: "Electronics & Computer Science Engineering",
      description: "Mentoring students in advanced technical areas",
      color: "purple"
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
  }

  const getColorClass = (color) => {
    switch (color) {
      case 'cyan': return 'bg-cyan-500'
      case 'blue': return 'bg-blue-500'
      case 'purple': return 'bg-purple-500'
      default: return 'bg-slate-500'
    }
  }

  const contributions = [
    {
      icon: "🎓",
      title: "Academic Guidance",
      description: "Providing academic direction and curriculum support for IETE-PCE activities"
    },
    {
      icon: "🔬",
      title: "Research Mentorship",
      description: "Guiding student research projects and facilitating innovation in technology"
    },
    {
      icon: "🤝",
      title: "Industry Connect",
      description: "Facilitating industry partnerships and professional networking opportunities"
    },
    {
      icon: "📅",
      title: "Event Coordination",
      description: "Supporting and organizing technical events, workshops, and symposiums"
    }
  ]

  return (
    <section id="faculty" className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="max-w-7xl mx-auto py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">Our Faculty</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Meet our experienced faculty members who guide and mentor IETE-PCE activities with their expertise and dedication
          </p>
        </div>

        {/* Faculty Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {facultyMembers.map((faculty) => (
            <div key={faculty.id} className="group">
              <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center text-white hover:bg-slate-800/50 transition-all duration-300">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 ${getColorClass(faculty.color)} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 text-white font-bold text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {getInitials(faculty.name)}
                </div>
                
                <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{faculty.name}</h4>
                <p className="text-cyan-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{faculty.position}</p>
                <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 font-light leading-tight">{faculty.department}</p>
                <p className="text-slate-300 text-xs sm:text-sm font-light">{faculty.description}</p>
              </div>
            </div>
          ))}
        </div>

        

        {/* Faculty Support Message */}
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-slate-950" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Faculty Message</h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 font-light leading-relaxed">
              "At IETE-PCE, we believe in nurturing not just technical competence but also professional ethics 
              and leadership qualities. Our role is to guide students in their journey from learners to innovators, 
              helping them become the technology leaders of tomorrow."
            </p>
            <div className="text-slate-400">
              <p className="font-semibold text-base sm:text-lg">Faculty Advisory Committee</p>
              <p className="text-sm font-light">IETE-PCE, Pillai College of Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacultySection