// src/pages/Events.jsx
import { useNavigate } from 'react-router-dom'
import { COLORS } from '../constants/colors'
import { APP_DATA, getEnabledEvents } from '../data/appData'
import Image from '../components/ui/Image'

const Events = () => {
  const navigate = useNavigate()
  const eventCategories = APP_DATA.events.categories

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
        {/* Event Image using new image system */}
        <div className="mb-4">
          <Image 
            imageData={event.image}
            containerClassName="group-hover:scale-105 transition-transform duration-300"
          />
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
              {eventCategories[type].name.slice(0, -1)}
            </span>
            <span className={`${COLORS.primary.textMuted} text-xs`}>
              {new Date(event.date).toLocaleDateString()}
            </span>
          </div>

          <h3 className={`${COLORS.typography.heading.sm} ${COLORS.primary.text} group-hover:${COLORS.accent.primaryText} transition-colors`}>
            {event.title}
          </h3>

          {event.description && (
            <p className={`${COLORS.primary.textMuted} text-sm line-clamp-2`}>
              {event.description}
            </p>
          )}

          {/* Event Tags */}
          {event.tags && (
            <div className="flex flex-wrap gap-1">
              {event.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className={`text-xs px-2 py-1 ${COLORS.effects.rounded} bg-slate-700/30 ${COLORS.primary.textLight}`}>
                  {tag}
                </span>
              ))}
              {event.tags.length > 3 && (
                <span className={`text-xs px-2 py-1 ${COLORS.effects.rounded} bg-slate-700/30 ${COLORS.primary.textLight}`}>
                  +{event.tags.length - 3}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <span className={`${COLORS.primary.textSecondary} flex items-center`}>
                🕒 {event.time}
              </span>
              {event.venue && (
                <span className={`${COLORS.primary.textSecondary} flex items-center`}>
                  📍 {event.venue}
                </span>
              )}
            </div>
            <button className={`text-xs ${COLORS.accent.primaryText} font-medium group-hover:underline`}>
              Learn More →
            </button>
          </div>

          {/* Additional Info based on event type */}
          {type === 'workshops' && event.fee && (
            <div className="text-xs text-center">
              <span className={`px-2 py-1 ${COLORS.effects.rounded} ${COLORS.accent.primaryText} bg-blue-500/20`}>
                Fee: {event.fee}
              </span>
            </div>
          )}
          
          {type === 'competitions' && event.registrationFee && (
            <div className="text-xs text-center">
              <span className={`px-2 py-1 ${COLORS.effects.rounded} ${COLORS.accent.primaryText} bg-blue-500/20`}>
                Entry: {event.registrationFee}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }

  const CategorySection = ({ type, title, description }) => {
    const events = getEnabledEvents(type).slice(0, 3) // Show only first 3 enabled events
    
    // Don't render if category is disabled or no events
    if (!eventCategories[type]?.enabled || events.length === 0) {
      return null
    }

    return (
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className={`text-3xl`}>{eventCategories[type].icon}</div>
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

  // Get enabled categories
  const enabledCategories = Object.keys(eventCategories).filter(
    category => eventCategories[category].enabled
  )

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
        <div className="space-y-16">
          {enabledCategories.map(categoryKey => (
            <CategorySection 
              key={categoryKey}
              type={categoryKey}
              title={eventCategories[categoryKey].name}
              description={eventCategories[categoryKey].description}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Events