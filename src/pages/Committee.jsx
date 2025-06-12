import { COLORS } from '../constants/colors'

const Committee = () => {
  const executiveCommittee = [
    {
      id: 1,
      name: "Student Name",
      position: "President",
      year: "Final Year",
      branch: "Electronics & Telecommunication",
      email: "president@iete.pce.edu",
      description: "Leading IETE-PCE with vision and dedication to advance technical excellence.",
      responsibilities: ["Overall coordination", "Strategic planning", "External relations"]
    },
    {
      id: 2,
      name: "Student Name",
      position: "Vice President",
      year: "Third Year",
      branch: "Electronics & Computer Science",
      email: "vpresident@iete.pce.edu",
      description: "Supporting leadership and managing day-to-day operations.",
      responsibilities: ["Event coordination", "Team management", "Academic initiatives"]
    },
    {
      id: 3,
      name: "Student Name",
      position: "Secretary",
      year: "Third Year",
      branch: "Information Technology",
      email: "secretary@iete.pce.edu",
      description: "Managing communications and maintaining organizational records.",
      responsibilities: ["Documentation", "Communication", "Meeting coordination"]
    },
    {
      id: 4,
      name: "Student Name",
      position: "Treasurer",
      year: "Second Year",
      branch: "Computer Engineering",
      email: "treasurer@iete.pce.edu",
      description: "Managing financial operations and budget planning.",
      responsibilities: ["Financial management", "Budget planning", "Expense tracking"]
    }
  ]

  const departmentHeads = [
    {
      id: 5,
      name: "Student Name",
      position: "Technical Head",
      year: "Final Year",
      branch: "Electronics & Telecommunication",
      responsibilities: ["Workshop organization", "Technical content", "Project guidance"]
    },
    {
      id: 6,
      name: "Student Name",
      position: "Event Management Head",
      year: "Third Year",
      branch: "Electronics & Computer Science",
      responsibilities: ["Event planning", "Logistics coordination", "Venue management"]
    },
    {
      id: 7,
      name: "Student Name",
      position: "Public Relations Head",
      year: "Third Year",
      branch: "Information Technology",
      responsibilities: ["Social media", "External communications", "Media relations"]
    },
    {
      id: 8,
      name: "Student Name",
      position: "Design & Graphics Head",
      year: "Second Year",
      branch: "Computer Engineering",
      responsibilities: ["Poster design", "Website maintenance", "Visual content"]
    }
  ]

  const facultyAdvisors = [
    {
      id: 9,
      name: "Dr. Faculty Name",
      position: "Faculty Advisor",
      department: "Electronics & Telecommunication Engineering",
      email: "faculty.advisor@pce.ac.in",
      description: "Guiding the committee with academic expertise and industry experience."
    },
    {
      id: 10,
      name: "Prof. Faculty Name",
      position: "Co-Faculty Advisor",
      department: "Computer Engineering",
      email: "co.advisor@pce.ac.in",
      description: "Supporting technical initiatives and student development programs."
    }
  ]

  const getPositionColor = (position) => {
    if (position.includes('President')) return 'bg-red-600'
    if (position.includes('Secretary')) return 'bg-blue-900'
    if (position.includes('Treasurer')) return 'bg-green-600'
    if (position.includes('Head')) return 'bg-purple-600'
    return 'bg-gray-600'
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Committee</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the dedicated team leading IETE-PCE forward with passion and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Advisors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty Advisors</h2>
            <p className="text-gray-600">Experienced faculty members guiding our initiatives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyAdvisors.map((advisor) => (
              <div key={advisor.id} className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="bg-blue-900 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {getInitials(advisor.name)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{advisor.position}</p>
                <p className="text-gray-600 mb-4">{advisor.department}</p>
                <p className="text-gray-600 mb-4">{advisor.description}</p>
                <div className="text-sm text-gray-500">
                  <span>📧 {advisor.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Committee</h2>
            <p className="text-gray-600">Core leadership team driving IETE-PCE initiatives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveCommittee.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className={`${getPositionColor(member.position)} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                    {getInitials(member.name)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-2 text-center">{member.position}</p>
                  <div className="text-sm text-gray-600 text-center mb-4">
                    <p>{member.year} • {member.branch}</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t text-center">
                    <span className="text-sm text-gray-500">📧 {member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Heads</h2>
            <p className="text-gray-600">Specialized team leaders managing different aspects of our organization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentHeads.map((head) => (
              <div key={head.id} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                <div className={`${getPositionColor(head.position)} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold`}>
                  {getInitials(head.name)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{head.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{head.position}</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>{head.year} • {head.branch}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {head.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Organization Structure</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our well-organized structure ensures efficient coordination and successful execution of all initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white text-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0019 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Faculty Guidance</h3>
              <p className="opacity-90">Expert faculty advisors providing academic and professional guidance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Executive Leadership</h3>
              <p className="opacity-90">Strong leadership team driving strategic decisions and overall coordination</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white text-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Specialized Teams</h3>
              <p className="opacity-90">Dedicated department heads managing specific aspects of our activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Committee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Connect?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions or want to collaborate? Feel free to reach out to our committee members
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:iete.pce@mes.ac.in"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Committee
            </a>
            <a
              href="/join"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Committee