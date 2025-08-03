// src/pages/EventCategory.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { COLORS } from '../constants/colors'
import { APP_DATA, getEnabledEvents } from '../data/appData'
import Image from '../components/ui/Image'

const EventCategory = () => {
  const { type } = useParams()
  const navigate = useNavigate()

  const categoryInfo = APP_DATA.events.categories[type]
  const events = getEnabledEvents(type) // Only get enabled events

  if (!categoryInfo || !categoryInfo.enabled) {
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
    // Don't render disabled events
    if (event.enabled === false) {
      return null
    }

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
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 ${COLORS.effects.rounded} text-xs font-medium ${
              type === 'workshops' ? 'bg-cyan-500/20 text-cyan-400' :
              type === 'competitions' ? 'bg-blue-500/20 text-blue-400' :
              type === 'seminars' ? 'bg-purple-500/20 text-purple-400' :
              'bg-emerald-500/20 text-emerald-400'
            }`}>
              {event.level || event.teamSize || event.attendance || event.certification || event.difficulty || 'Event'}
            </span>
            <span className={`${COLORS.primary.textMuted} text-xs`}>
              {new Date(event.date).toLocaleDateString()}
            </span>
          </div>

          <h3 className={`${COLORS.typography.heading.sm} ${COLORS.primary.text} group-hover:${COLORS.accent.primaryText} transition-colors`}>
            {event.title}
          </h3>

          {event.description && (
            <p className={`${COLORS.primary.textMuted} text-sm line-clamp-3`}>
              {event.description}
            </p>
          )}

          {/* Event Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {event.tags.slice(0, 4).map((tag, index) => (
                <span key={index} className={`text-xs px-2 py-1 ${COLORS.effects.rounded} bg-slate-700/30 ${COLORS.primary.textLight}`}>
                  {tag}
                </span>
              ))}
              {event.tags.length > 4 && (
                <span className={`text-xs px-2 py-1 ${COLORS.effects.rounded} bg-slate-700/30 ${COLORS.primary.textLight}`}>
                  +{event.tags.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Event Specific Details */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className={`${COLORS.primary.textSecondary} flex items-center`}>
                🕒 {event.time}
              </span>
              {event.venue && (
                <span className={`${COLORS.primary.textSecondary} flex items-center`}>
                  📍 {event.venue}
                </span>
              )}
            </div>
            
            {/* Type-specific information */}
            {type === 'workshops' && (
              <div className="flex items-center justify-between">
                {event.instructor && (
                  <span className={`${COLORS.primary.textSecondary}`}>
                    👨‍🏫 {event.instructor}
                  </span>
                )}
                {event.fee && (
                  <span className={`${COLORS.accent.primaryText} font-medium`}>
                    💰 {event.fee}
                  </span>
                )}
              </div>
            )}
            
            {type === 'competitions' && (
              <div className="flex items-center justify-between">
                {event.prizes && (
                  <span className={`${COLORS.primary.textSecondary}`}>
                    💰 {event.prizes}
                  </span>
                )}
                {event.deadline && (
                  <span className={`${COLORS.primary.textSecondary}`}>
                    📅 Deadline: {new Date(event.deadline).toLocaleDateString()}
                  </span>
                )}
              </div>
            )}
            
            {type === 'seminars' && (
              <div className="flex items-center justify-between">
                {event.speaker && (
                  <span className={`${COLORS.primary.textSecondary}`}>
                    🎤 {event.speaker}
                  </span>
                )}
                {event.capacity && event.registered && (
                  <span className={`${COLORS.primary.textSecondary}`}>
                    👥 {event.registered}/{event.capacity}
                  </span>
                )}
              </div>
            )}
            
            {type === 'training' && (
              <div className="flex items-center justify-between">
                {event.trainer && (
                  <span className={`${COLORS.primary.textSecondary}`}>
                    👨‍💼 {event.trainer}
                  </span>
                )}
                {event.duration && (
                  <span className={`${COLORS.primary.textSecondary}`}>
                    ⏱️ {event.duration}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Additional Info Row */}
          <div className="flex items-center justify-between text-xs pt-2">
            {/* Left side - extra info based on event type */}
            <div className="flex items-center space-x-3">
              {event.targetAudience && (
                <span className={`${COLORS.primary.textLight}`}>
                  👥 {event.targetAudience}
                </span>
              )}
              {event.prerequisites && (
                <span className={`${COLORS.primary.textLight}`}>
                  📋 Prerequisites required
                </span>
              )}
            </div>
            
            {/* Right side - action button */}
            <button className={`text-xs ${COLORS.accent.primaryText} font-medium group-hover:underline`}>
              View Details →
            </button>
          </div>

          {/* Registration Status and Button */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-700/30">
            <div className="flex items-center space-x-2">
              {event.capacity && event.registered && (
                <span className={`text-xs ${
                  event.registered >= event.capacity ? 
                  'text-red-400' : 
                  event.registered >= event.capacity * 0.8 ? 
                  'text-yellow-400' : 
                  'text-green-400'
                }`}>
                  {event.registered >= event.capacity ? 'Full' : 
                   event.registered >= event.capacity * 0.8 ? 'Filling Fast' : 
                   'Available'}
                </span>
              )}
              {event.registrationDeadline && (
                <span className={`text-xs ${COLORS.primary.textLight}`}>
                  Deadline: {new Date(event.registrationDeadline).toLocaleDateString()}
                </span>
              )}
            </div>
            <button className={`text-xs ${COLORS.interactive.buttonPrimary} px-3 py-1 rounded-full hover:scale-105 transition-transform`}>
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
            <div className="text-6xl">{categoryInfo.icon}</div>
            <div className="text-center">
              <h1 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} mb-3`}>
                {categoryInfo.name}
              </h1>
              <p className={`${COLORS.primary.textMuted} text-lg max-w-2xl`}>
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
            <div className="text-6xl mb-6">{categoryInfo.icon}</div>
            <h3 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-4`}>
              No {categoryInfo.name} Found
            </h3>
            <p className={`${COLORS.primary.textMuted} mb-6 max-w-md mx-auto`}>
              There are currently no {categoryInfo.name.toLowerCase()} available. Check back later for exciting new events!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/events')}
                className={`${COLORS.interactive.buttonPrimary} px-6 py-3 ${COLORS.effects.roundedLg}`}
              >
                Explore Other Events
              </button>
              <button 
                onClick={() => navigate('/')}
                className={`${COLORS.interactive.buttonSecondary} px-6 py-3 ${COLORS.effects.roundedLg}`}
              >
                Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {events.length > 0 && (
          <div className={`text-center mt-16 p-8 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
            <h3 className={`${COLORS.typography.heading.md} ${COLORS.primary.text} mb-4`}>
              Ready to Join?
            </h3>
            <p className={`${COLORS.primary.textMuted} mb-6 max-w-md mx-auto`}>
              Don't miss out on these amazing {categoryInfo.name.toLowerCase()}. Register now and enhance your skills!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/events')}
                className={`${COLORS.interactive.buttonPrimary} px-6 py-3 ${COLORS.effects.roundedLg}`}
              >
                Browse All Events
              </button>
              <button 
                onClick={() => navigate('/committee')}
                className={`${COLORS.interactive.buttonSecondary} px-6 py-3 ${COLORS.effects.roundedLg}`}
              >
                Contact Organizers
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default EventCategory