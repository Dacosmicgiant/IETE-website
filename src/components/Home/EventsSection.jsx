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
      icon: "🔗",
      color: "cyan"
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
      icon: "🎯",
      color: "purple"
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
      icon: "🏆",
      color: "blue"
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
      icon: "🎤",
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

  return (
    <section id="events" className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="max-w-7xl mx-auto py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
        
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">Tech Events & Workshops</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Join our cutting-edge workshops, seminars, and competitions designed to enhance your technical skills
          </p>
        </div>
        
        

        {/* Event Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="text-center p-6 sm:p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl hover:bg-slate-800/50 transition-all duration-300 group">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Workshops</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light">Hands-on learning</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl hover:bg-slate-800/50 transition-all duration-300 group">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏆</div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Competitions</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light">Technical challenges</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl hover:bg-slate-800/50 transition-all duration-300 group">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎤</div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Seminars</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light">Expert talks</p>
          </div>
          
        </div>

        
      </div>
    </section>
  )
}

export default EventsSection