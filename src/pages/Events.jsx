import { useNavigate } from 'react-router-dom'
import { COLORS } from '../constants/colors'
import { eventsData, eventTypes } from '../data/eventsData'

const Events = () => {
  const navigate = useNavigate()

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const EventCard = ({ event, type }) => {
    return (
      <div 
        className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover} cursor-pointer group`}
        onClick={() => navigate(`/events/${type}/${event.id}`)}
      >
        {/* Event Image Placeholder */}
        <div className={`aspect-video w-full ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.rounded} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed mb-4 group-hover:scale-105 transition-transform duration-300`}>
          <div className="text-center p-4">
            <div className="text-2xl mb-2">{eventTypes[type].icon}</div>
            <p className={`${COLORS.primary.textMuted} text-xs`}>
              Event Image<br/>
              <span className="text-xs">16:9 Ratio</span>
            </p>
          </div>
        </div>

        {/* Event Content */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 ${COLORS.effects.rounded} text-xs font-medium ${
              type === 'workshops' ? 'bg-cyan-500/20 text-cyan-400' :
              type === 'competitions' ? 'bg-blue-500/20 text-blue-400' :
              type === 'seminars' ? 'bg-purple-500/20 text-purple-400' :
              'bg-emerald-500/20 text-emerald-400'
            }`}>
              {eventTypes[type].name.slice(0, -1)}
            </span>
            <span className={`${COLORS.primary.textMuted} text-xs`}>
              {new Date(event.date).toLocaleDateString()}
            </span>
          </div>

          <h3 className={`${COLORS.typography.heading.sm} ${COLORS.primary.text} group-hover:${COLORS.accent.primaryText} transition-colors`}>
            {event.title}
          </h3>

          <p className={`${COLORS.primary.textMuted} text-sm line-clamp-2`}>
            {event.description}
          </p>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <span className={`${COLORS.primary.textSecondary} flex items-center`}>
                🕒 {event.time.split(' - ')[0]}
              </span>
              <span className={`${COLORS.primary.textSecondary} flex items-center`}>
                📍 {event.venue}
              </span>
            </div>
            <button className={`text-xs ${COLORS.accent.primaryText} font-medium group-hover:underline`}>
              Learn More →
            </button>
          </div>
        </div>
      </div>
    )
  }

  const CategorySection = ({ type, title, description }) => {
    const events = eventsData[type].slice(0, 3) // Show only first 3 events

    return (
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className={`text-3xl`}>{eventTypes[type].icon}</div>
            <div>
              <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text}`}>
                {title}
              </h2>
              <p className={`${COLORS.primary.textMuted} text-sm`}>
                {description}
              </p>
            </div>
          </div>
          <button 
            onClick={() => navigate(`/events/${type}`)}
            className={`${COLORS.interactive.buttonSecondary} px-4 py-2 ${COLORS.effects.rounded} text-sm font-medium hover:scale-105 transition-transform`}
          >
            View All {title} →
          </button>
        </div>

        <div className={`${COLORS.layout.grid.cols3} ${COLORS.layout.grid.gap}`}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} type={type} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <div className={`min-h-screen ${COLORS.primary.bg} pt-20 px-4 ${COLORS.layout.section}`}>
      <div className={`${COLORS.layout.container}`}>
        {/* Page Header */}
        <div className="text-center mb-2">
          <h1 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} pt-12 mb-1`}>
            Events & <span className={COLORS.accent.primaryText}>Activities</span>
          </h1>
          
        </div>

        

        {/* Event Categories */}
        <div className="space-y-16 ">
          <CategorySection 
            type="workshops"
            title="Workshops"
            description="Hands-on learning experiences with practical applications"
          />
          
          <CategorySection 
            type="competitions"
            title="Competitions"
            description="Technical challenges and contests with exciting prizes"
          />
          
          <CategorySection 
            type="seminars"
            title="Seminars"
            description="Expert talks and knowledge sharing sessions"
          />
          
          <CategorySection 
            type="training"
            title="Training"
            description="Professional skill development and certification programs"
          />
        </div>

        
      </div>
    </div>
  )
}

export default Events