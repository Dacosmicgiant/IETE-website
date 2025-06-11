const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "IoT Workshop",
      date: "25 JUN 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Electronics Lab, PCE",
      description: "Hands-on workshop on Internet of Things applications and implementation using Arduino and Raspberry Pi.",
      type: "Workshop",
      status: "Registration Open"
    },
    {
      id: 2,
      title: "Annual Tech Symposium 2025",
      date: "30 JUN 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium, PCE",
      description: "Annual technical symposium featuring industry experts, research presentations, and networking opportunities.",
      type: "Symposium",
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Project Competition",
      date: "05 JUL 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Central Hall, PCE",
      description: "Showcase your innovative projects and compete with fellow students. Categories include AI/ML, IoT, and Electronics.",
      type: "Competition",
      status: "Registration Open"
    },
    {
      id: 4,
      title: "Industry Expert Lecture Series",
      date: "12 JUL 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Seminar Hall, PCE",
      description: "Learn from industry leaders about the latest trends in 5G technology and telecommunications.",
      type: "Lecture",
      status: "Coming Soon"
    }
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Machine Learning Workshop",
      date: "15 MAY 2025",
      description: "Introduction to machine learning algorithms and practical implementation using Python.",
      type: "Workshop",
      participants: 85
    },
    {
      id: 6,
      title: "Circuit Design Competition",
      date: "28 APR 2025",
      description: "Students competed in designing innovative electronic circuits for real-world applications.",
      type: "Competition",
      participants: 42
    },
    {
      id: 7,
      title: "Robotics Demonstration",
      date: "10 MAR 2025",
      description: "Interactive session showcasing latest developments in robotics and automation.",
      type: "Demonstration",
      participants: 120
    }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Workshop':
        return 'bg-blue-100 text-blue-800'
      case 'Symposium':
        return 'bg-purple-100 text-purple-800'
      case 'Competition':
        return 'bg-red-100 text-red-800'
      case 'Lecture':
        return 'bg-green-100 text-green-800'
      case 'Demonstration':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us for exciting workshops, competitions, and learning opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600">Don't miss out on these exciting upcoming events and opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'Registration Open' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {event.date} | {event.time}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  
                  {event.status === 'Registration Open' && (
                    <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-gray-600">Look back at our successful events and achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    {event.participants} participants
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We organize various types of events to cater to different interests and learning objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Workshops</h3>
              <p className="text-gray-600">Hands-on learning sessions</p>
            </div>
            
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Competitions</h3>
              <p className="text-gray-600">Technical challenges and contests</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Seminars</h3>
              <p className="text-gray-600">Expert talks and presentations</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Symposiums</h3>
              <p className="text-gray-600">Large-scale technical gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter to get notified about upcoming events and activities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events