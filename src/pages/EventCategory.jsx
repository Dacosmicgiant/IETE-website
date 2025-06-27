import { useParams, useNavigate } from 'react-router-dom'
import { COLORS } from '../constants/colors'
import { eventsData, eventTypes } from '../data/eventsData'

const EventCategory = () => {
  const { type } = useParams()
  const navigate = useNavigate()

  const categoryInfo = eventTypes[type]
  const events = eventsData[type] || []

  if (!categoryInfo) {
    return (
      <div className={`min-h-screen ${COLORS.primary.bg} pt-20 px-4 flex items-center justify-center`}>
        <div className="text-center">
          <h1 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-4`}>
            Category Not Found
          </h1>
          <button 
            onClick={() => navigate('/events')}
            className={`${COLORS.interactive.buttonPrimary} px-6 py-3 ${COLORS.effects.roundedLg}`}
          >
            Back to Events
          </button>
        </div>
      </div>
    )
  }

  const EventCard = ({ event }) => {
    return (
      <div 
        className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover} cursor-pointer group`}
        onClick={() => navigate(`/events/${type}/${event.id}`)}
      >
        {/* Event Image Placeholder */}
        <div className={`aspect-video w-full ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.rounded} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed mb-4 group-hover:scale-105 transition-transform duration-300`}>
          <div className="text-center p-4">
            <div className="text-2xl mb-2">{categoryInfo.icon}</div>
            <p className={`${COLORS.primary.textMuted} text-xs`}>
              Event Image<br/>
              <span className="text-xs">16:9 Ratio</span>
            </p>
          </div>
        </div>

        {/* Event Content */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 ${COLORS.effects.rounded} text-xs font-medium ${
              type === 'workshops' ? 'bg-cyan-500/20 text-cyan-400' :
              type === 'competitions' ? 'bg-blue-500/20 text-blue-400' :
              type === 'seminars' ? 'bg-purple-500/20 text-purple-400' :
              'bg-emerald-500/20 text-emerald-400'
            }`}>
              {event.level || event.teamSize || event.attendance || event.certification || 'Event'}
            </span>
            <span className={`${COLORS.primary.textMuted} text-xs`}>
              {new Date(event.date).toLocaleDateString()}
            </span>
          </div>

          <h3 className={`${COLORS.typography.heading.sm} ${COLORS.primary.text} group-hover:${COLORS.accent.primaryText} transition-colors`}>
            {event.title}
          </h3>

          <p className={`${COLORS.primary.textMuted} text-sm line-clamp-3`}>
            {event.description}
          </p>

          {/* Event Specific Details */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className={`${COLORS.primary.textSecondary} flex items-center`}>
                🕒 {event.time}
              </span>
              <span className={`${COLORS.primary.textSecondary} flex items-center`}>
                📍 {event.venue}
              </span>
            </div>
            
            {/* Type-specific information */}
            {type === 'workshops' && (
              <div className="flex items-center justify-between">
                <span className={`${COLORS.primary.textSecondary}`}>
                  👨‍🏫 {event.instructor}
                </span>
                
              </div>
            )}
            
            {type === 'competitions' && (
              <div className="flex items-center justify-between">
                <span className={`${COLORS.primary.textSecondary}`}>
                  💰 {event.prizes}
                </span>
                <span className={`${COLORS.primary.textSecondary}`}>
                  📅 Deadline: {new Date(event.deadline).toLocaleDateString()}
                </span>
              </div>
            )}
            
            {type === 'seminars' && (
              <div className="flex items-center justify-between">
                <span className={`${COLORS.primary.textSecondary}`}>
                  🎤 {event.speaker}
                </span>
                
              </div>
            )}
            
            {type === 'training' && (
              <div className="flex items-center justify-between">
                <span className={`${COLORS.primary.textSecondary}`}>
                  👨‍💼 {event.trainer}
                </span>
                <span className={`${COLORS.primary.textSecondary}`}>
                  ⏱️ {event.duration}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button className={`text-xs ${COLORS.accent.primaryText} font-medium group-hover:underline`}>
              View Details →
            </button>
            <button className={`text-xs ${COLORS.interactive.buttonPrimary} px-3 py-1 rounded-full`}>
              Register Now
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${COLORS.primary.bg} pt-20 px-4 ${COLORS.layout.section}`}>
      <div className={`${COLORS.layout.container}`}>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8 text-sm">
          <button 
            onClick={() => navigate('/events')}
            className={`${COLORS.primary.textMuted} hover:${COLORS.accent.primaryText} transition-colors`}
          >
            Events
          </button>
          <span className={COLORS.primary.textMuted}>→</span>
          <span className={COLORS.primary.text}>{categoryInfo.name}</span>
        </div>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            
            <div className="text-center">
              <h1 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} mb-3`}>
                {categoryInfo.name}
              </h1>
              <p className={`${COLORS.primary.textMuted} text-lg`}>
                {categoryInfo.description}
              </p>
            </div>
          </div>
          
        </div>

        {/* Events Grid */}
        {events.length > 0 ? (
          <div className={`${COLORS.layout.grid.cols3} ${COLORS.layout.grid.gap}`}>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className={`text-center p-12 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
            <div className="text-4xl mb-4">📅</div>
            <h3 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-4`}>
              No Events Found
            </h3>
            <p className={`${COLORS.primary.textMuted} mb-6`}>
              There are currently no events in this category. Check back later for updates!
            </p>
            <button 
              onClick={() => navigate('/events')}
              className={`${COLORS.interactive.buttonPrimary} px-6 py-3 ${COLORS.effects.roundedLg}`}
            >
              Explore Other Events
            </button>
          </div>
        )}

        
      </div>
    </div>
  )
}

export default EventCategory