import { COLORS } from '../../constants/colors'

const FacultySection = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Faculty Name",
      position: "Principal",
      department: "Pillai College of Engineering",
      description: "Providing institutional leadership and strategic direction"
    },
    {
      id: 2,
      name: "Dr. Faculty Name",
      position: "Head of Department",
      department: "Electronics & Telecommunication Engineering",
      description: "Leading academic excellence in E&TC department"
    },
    {
      id: 3,
      name: "Prof. Faculty Name",
      position: "Professor",
      department: "Electronics & Computer Science Engineering",
      description: "Mentoring students in advanced technical areas"
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
  }

  const getDepartmentColor = (department) => {
    if (department.includes('Electronics & Telecommunication')) return 'from-blue-500 to-cyan-600'
    if (department.includes('Computer')) return 'from-pink-500 to-red-600'
    if (department.includes('Electronics & Computer')) return 'from-purple-500 to-indigo-600'
    return 'from-gray-500 to-gray-600'
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
    <section id="faculty" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
            👨‍🏫 Faculty Mentors
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Faculty</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet our experienced faculty members who guide and mentor IETE-PCE activities with their expertise and dedication
          </p>
        </div>

        {/* Faculty Introduction */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Faculty Mentors</h3>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Our distinguished faculty members bring decades of academic and industry experience to guide 
              IETE-PCE activities. They provide invaluable mentorship, technical expertise, and help bridge 
              the gap between theoretical knowledge and practical applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facultyMembers.map((faculty) => (
              <div key={faculty.id} className="group">
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center text-white hover:scale-105 transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-br ${getDepartmentColor(faculty.department)} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    {getInitials(faculty.name)}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2">{faculty.name}</h4>
                  <p className="text-cyan-400 font-semibold mb-2">{faculty.position}</p>
                  <p className="text-gray-400 text-sm mb-4">{faculty.department}</p>
                  <p className="text-gray-300 text-sm">{faculty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Contributions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Faculty Contributions</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our faculty members actively contribute to IETE-PCE through various roles and responsibilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributions.map((contribution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{contribution.icon}</div>
                <h4 className="text-lg font-bold mb-3">{contribution.title}</h4>
                <p className="text-gray-400 text-sm">{contribution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Support Message */}
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Faculty Message</h3>
            <p className="text-lg text-gray-300 mb-6">
              "At IETE-PCE, we believe in nurturing not just technical competence but also professional ethics 
              and leadership qualities. Our role is to guide students in their journey from learners to innovators, 
              helping them become the technology leaders of tomorrow."
            </p>
            <div className="text-gray-400">
              <p className="font-semibold">Faculty Advisory Committee</p>
              <p className="text-sm">IETE-PCE, Pillai College of Engineering</p>
            </div>
          </div>
        </div>

        {/* Contact Faculty */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white">
            <div className="text-3xl mb-3">📧</div>
            <h4 className="font-semibold mb-2">Email Faculty</h4>
            <p className="text-gray-400 text-sm">faculty.advisor@iete.pce.edu</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white">
            <div className="text-3xl mb-3">🏢</div>
            <h4 className="font-semibold mb-2">Office Hours</h4>
            <p className="text-gray-400 text-sm">Mon-Fri: 10:00 AM - 4:00 PM</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white">
            <div className="text-3xl mb-3">📍</div>
            <h4 className="font-semibold mb-2">Location</h4>
            <p className="text-gray-400 text-sm">Faculty Lounge, PCE Building</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacultySection