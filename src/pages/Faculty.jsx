import { COLORS } from '../constants/colors'

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Faculty Name",
      position: "Principal",
      department: "Pillai College of Engineering"
    },
    {
      id: 2,
      name: "Dr. Faculty Name",
      position: "Head of Department",
      department: "Electronics & Telecommunication Engineering"
    },
    {
      id: 3,
      name: "Prof. Faculty Name",
      position: "Professor",
      department: "Electronics & Computer Science Engineering"
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
  }

  const getDepartmentColor = (department) => {
    if (department.includes('Electronics & Telecommunication')) return 'bg-blue-900'
    if (department.includes('Computer')) return 'bg-red-600'
    if (department.includes('Electronics & Computer')) return 'bg-purple-600'
    return 'bg-gray-600'
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet our experienced faculty members who guide and mentor IETE-PCE activities
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Faculty Mentors</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our distinguished faculty members bring decades of academic and industry experience to guide 
              IETE-PCE activities. They provide invaluable mentorship, technical expertise, and help bridge 
              the gap between theoretical knowledge and practical applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facultyMembers.map((faculty) => (
              <div key={faculty.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className={`${getDepartmentColor(faculty.department)} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                    {getInitials(faculty.name)}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                    <p className="text-red-600 font-semibold mb-2">{faculty.position}</p>
                    <p className="text-gray-600 text-sm">{faculty.department}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Contributions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty Contributions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our faculty members actively contribute to IETE-PCE through various roles and responsibilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Academic Guidance</h3>
              <p className="text-gray-600 text-sm">Providing academic direction and curriculum support</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Research Mentorship</h3>
              <p className="text-gray-600 text-sm">Guiding student research projects and publications</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Connect</h3>
              <p className="text-gray-600 text-sm">Facilitating industry partnerships and collaborations</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Event Coordination</h3>
              <p className="text-gray-600 text-sm">Supporting and organizing technical events and workshops</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Faculty