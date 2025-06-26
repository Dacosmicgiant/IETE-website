import { COLORS } from '../../constants/colors'

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "IoT Workshop",
      date: "25 JUN 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Electronics Lab, PCE",
      description: "Hands-on workshop on Internet of Things applications and implementation using Arduino and Raspberry Pi.",
      type: "Workshop",
      status: "Registration Open",
      icon: "🔗"
    },
    {
      id: 2,
      title: "Annual Tech Symposium 2025",
      date: "30 JUN 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium, PCE",
      description: "Annual technical symposium featuring industry experts, research presentations, and networking opportunities.",
      type: "Symposium",
      status: "Coming Soon",
      icon: "🎯"
    },
    {
      id: 3,
      title: "Project Competition",
      date: "05 JUL 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Central Hall, PCE",
      description: "Showcase your innovative projects and compete with fellow students. Categories include AI/ML, IoT, and Electronics.",
      type: "Competition",
      status: "Registration Open",
      icon: "🏆"
    },
    {
      id: 4,
      title: "Industry Expert Lecture Series",
      date: "12 JUL 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Seminar Hall, PCE",
      description: "Learn from industry leaders about the latest trends in 5G technology and telecommunications.",
      type: "Lecture",
      status: "Coming Soon",
      icon: "🎤"
    }
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Machine Learning Workshop",
      date: "15 MAY 2025",
      description: "Introduction to machine learning algorithms and practical implementation using Python.",
      type: "Workshop",
      participants: 85,
      icon: "🤖"
    },
    {
      id: 6,
      title: "Circuit Design Competition",
      date: "28 APR 2025",
      description: "Students competed in designing innovative electronic circuits for real-world applications.",
      type: "Competition",
      participants: 42,
      icon: "⚡"
    },
    {
      id: 7,
      title: "Robotics Demonstration",
      date: "10 MAR 2025",
      description: "Interactive session showcasing latest developments in robotics and automation.",
      type: "Demonstration",
      participants: 120,
      icon: "🤖"
    }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Workshop':
        return 'from-blue-500 to-cyan-600'
      case 'Symposium':
        return 'from-purple-500 to-indigo-600'
      case 'Competition':
        return 'from-pink-500 to-red-600'
      case 'Lecture':
        return 'from-green-500 to-teal-600'
      case 'Demonstration':
        return 'from-yellow-500 to-orange-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
            📅 Upcoming Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tech Events & Workshops</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our cutting-edge workshops, seminars, and competitions designed to enhance your technical skills
          </p>
        </div>
        
        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-cyan-600/30 to-blue-600/30 flex items-center justify-center">
                  <div className="text-6xl">{event.icon}</div>
                </div>
                <div className="p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`bg-gradient-to-r ${getTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {event.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'Registration Open' 
                        ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                        : 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
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
                    <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
                      Register Now →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-white hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{event.icon}</div>
                  <span className={`bg-gradient-to-r ${getTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {event.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{event.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{event.date}</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    {event.participants}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Event Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border border-white/10 rounded-2xl">
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="text-white font-bold">Workshops</h4>
              <p className="text-gray-400 text-sm">Hands-on learning</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-lg border border-white/10 rounded-2xl">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="text-white font-bold">Competitions</h4>
              <p className="text-gray-400 text-sm">Technical challenges</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-lg border border-white/10 rounded-2xl">
              <div className="text-3xl mb-3">🎤</div>
              <h4 className="text-white font-bold">Seminars</h4>
              <p className="text-gray-400 text-sm">Expert talks</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-lg border border-white/10 rounded-2xl">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-white font-bold">Symposiums</h4>
              <p className="text-gray-400 text-sm">Large gatherings</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming events and activities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection