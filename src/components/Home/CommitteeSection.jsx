import { COLORS } from '../../constants/colors'

const CommitteeSection = () => {
  const executiveCommittee = [
    {
      id: 1,
      name: "Student Name",
      position: "President",
      year: "Final Year",
      branch: "Electronics & Telecommunication",
      email: "president@iete.pce.edu",
      description: "Leading the organization toward excellence"
    },
    {
      id: 2,
      name: "Student Name",
      position: "Vice President",
      year: "Third Year",
      branch: "Electronics & Computer Science",
      email: "vpresident@iete.pce.edu",
      description: "Supporting strategic initiatives"
    },
    {
      id: 3,
      name: "Student Name",
      position: "Secretary",
      year: "Third Year",
      branch: "Information Technology",
      email: "secretary@iete.pce.edu",
      description: "Managing operations and communications"
    },
    {
      id: 4,
      name: "Student Name",
      position: "Treasurer",
      year: "Second Year",
      branch: "Computer Engineering",
      email: "treasurer@iete.pce.edu",
      description: "Managing finances and resources"
    }
  ]

  const departmentHeads = [
    {
      id: 5,
      name: "Student Name",
      position: "Technical Head",
      year: "Final Year",
      branch: "Electronics & Telecommunication",
      description: "Leading technical initiatives and workshops"
    },
    {
      id: 6,
      name: "Student Name",
      position: "Event Management Head",
      year: "Third Year",
      branch: "Electronics & Computer Science",
      description: "Organizing and coordinating events"
    },
    {
      id: 7,
      name: "Student Name",
      position: "Public Relations Head",
      year: "Third Year",
      branch: "Information Technology",
      description: "Managing external communications"
    },
    {
      id: 8,
      name: "Student Name",
      position: "Design & Graphics Head",
      year: "Second Year",
      branch: "Computer Engineering",
      description: "Creating visual content and designs"
    }
  ]

  const getPositionColor = (position) => {
    if (position.includes('President')) return 'from-cyan-400 to-blue-600'
    if (position.includes('Secretary')) return 'from-pink-500 to-red-600'
    if (position.includes('Treasurer')) return 'from-green-500 to-teal-600'
    if (position.includes('Head')) return 'from-purple-500 to-indigo-600'
    return 'from-gray-500 to-gray-600'
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <section id="committee" className="py-20 bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
            👥 Our Committee
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the dedicated team leading IETE-PCE toward excellence and innovation
          </p>
        </div>

        {/* Executive Committee */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Executive Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveCommittee.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative mb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${getPositionColor(member.position)} rounded-3xl flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    {getInitials(member.name)}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full"></div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-white hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                  <p className="text-cyan-400 font-semibold mb-2">{member.position}</p>
                  <div className="text-sm text-gray-400 mb-3">
                    <p>{member.year} • {member.branch}</p>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{member.description}</p>
                  <div className="text-xs text-gray-500">
                    📧 {member.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Heads */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Department Heads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentHeads.map((head) => (
              <div key={head.id} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${getPositionColor(head.position)} rounded-2xl flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-xl`}>
                  {getInitials(head.name)}
                </div>
                <h4 className="text-lg font-bold mb-1">{head.name}</h4>
                <p className="text-purple-400 font-semibold mb-2">{head.position}</p>
                <div className="text-sm text-gray-400 mb-3">
                  <p>{head.year} • {head.branch}</p>
                </div>
                <p className="text-gray-300 text-sm">{head.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Contributions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What Our Leaders Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Academic Guidance</h4>
              <p className="text-gray-300 text-sm">Providing academic direction and curriculum support</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Event Planning</h4>
              <p className="text-gray-300 text-sm">Organizing workshops, seminars, and competitions</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Student Mentorship</h4>
              <p className="text-gray-300 text-sm">Guiding and supporting fellow students</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Innovation Drive</h4>
              <p className="text-gray-300 text-sm">Promoting research and technical innovation</p>
            </div>
          </div>
        </div>

        {/* Join Committee CTA */}
        <div className="text-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Leading?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join our committee and help shape the future of IETE-PCE. Develop leadership skills while making a difference in the tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
              Apply for Committee
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommitteeSection