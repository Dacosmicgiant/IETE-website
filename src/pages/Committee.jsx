import { COLORS } from '../constants/colors'

const Committee = () => {
  const executiveCommittee = [
    {
      id: 1,
      name: "Student Name",
      position: "President",
      year: "Final Year",
      branch: "Electronics & Telecommunication",
      email: "president@iete.pce.edu"
    },
    {
      id: 2,
      name: "Student Name",
      position: "Vice President",
      year: "Third Year",
      branch: "Electronics & Computer Science",
      email: "vpresident@iete.pce.edu"
    },
    {
      id: 3,
      name: "Student Name",
      position: "Secretary",
      year: "Third Year",
      branch: "Information Technology",
      email: "secretary@iete.pce.edu"
    },
    {
      id: 4,
      name: "Student Name",
      position: "Treasurer",
      year: "Second Year",
      branch: "Computer Engineering",
      email: "treasurer@iete.pce.edu"
    }
  ]

  const departmentHeads = [
    {
      id: 5,
      name: "Student Name",
      position: "Technical Head",
      year: "Final Year",
      branch: "Electronics & Telecommunication"
    },
    {
      id: 6,
      name: "Student Name",
      position: "Event Management Head",
      year: "Third Year",
      branch: "Electronics & Computer Science"
    },
    {
      id: 7,
      name: "Student Name",
      position: "Public Relations Head",
      year: "Third Year",
      branch: "Information Technology"
    },
    {
      id: 8,
      name: "Student Name",
      position: "Design & Graphics Head",
      year: "Second Year",
      branch: "Computer Engineering"
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
                  
                  <div className="text-center">
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
                <div className="text-sm text-gray-600">
                  <p>{head.year} • {head.branch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Committee