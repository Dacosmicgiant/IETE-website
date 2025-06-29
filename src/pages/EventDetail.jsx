import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { COLORS } from '../constants/colors'
import { eventsData, eventTypes } from '../data/eventsData'
import Image from '../components/ui/Image'

const EventDetail = () => {
  const { type, id } = useParams()
  const navigate = useNavigate()
  const [isRegistered, setIsRegistered] = useState(false)

  const event = eventsData[type]?.find(e => e.id === parseInt(id))
  const categoryInfo = eventTypes[type]

  if (!event || !categoryInfo) {
    return (
      <div className={`min-h-screen ${COLORS.primary.bg} pt-20 px-4 flex items-center justify-center`}>
        <div className="text-center">
          <h1 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-4`}>
            Event Not Found
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

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const handleRegistration = () => {
    setIsRegistered(!isRegistered)
    // Here you would typically handle the actual registration logic
  }

  const getEventSpecificDetails = () => {
    switch (type) {
      case 'workshops':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                👨‍🏫 Instructor Details
              </h4>
              <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Name:</strong> {event.instructor}</p>
              <p className={`${COLORS.primary.textSecondary}`}><strong>Duration:</strong> {event.duration}</p>
            </div>
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                👥 Registration Info
              </h4>
              <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Capacity:</strong> {event.capacity} students</p>
              <p className={`${COLORS.primary.textSecondary}`}><strong>Level:</strong> {event.level}</p>
            </div>
          </div>
        )
      
      case 'competitions':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                🏆 Prize & Registration
              </h4>
              <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Prize Pool:</strong> {event.prizes}</p>
              <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Registration Fee:</strong> {event.registrationFee}</p>
              <p className={`${COLORS.primary.textSecondary}`}><strong>Team Size:</strong> {event.teamSize}</p>
            </div>
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                📅 Important Dates
              </h4>
              <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Event Date:</strong> {formatDate(event.date)}</p>
              <p className={`${COLORS.primary.textSecondary}`}><strong>Registration Deadline:</strong> {formatDate(event.deadline)}</p>
            </div>
          </div>
        )
      
      case 'seminars':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                🎤 Speaker Information
              </h4>
              <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Speaker:</strong> {event.speaker}</p>
              <p className={`${COLORS.primary.textSecondary}`}><strong>Attendance:</strong> {event.attendance}</p>
            </div>
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                📚 Topics Covered
              </h4>
              <ul className="space-y-2">
                {event.topics.map((topic, index) => (
                  <li key={index} className={`${COLORS.primary.textSecondary} flex items-center`}>
                    <span className="mr-2">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      
      case 'training':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                👨‍💼 Training Details
              </h4>
              <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Trainer:</strong> {event.trainer}</p>
              <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Duration:</strong> {event.duration}</p>
              <p className={`${COLORS.primary.textSecondary}`}><strong>Certification:</strong> {event.certification}</p>
            </div>
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                📋 Requirements
              </h4>
              <p className={`${COLORS.primary.textSecondary}`}><strong>Prerequisites:</strong> {event.prerequisites}</p>
            </div>
          </div>
        )
      
      default:
        return null
    }
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
          <button 
            onClick={() => navigate(`/events/${type}`)}
            className={`${COLORS.primary.textMuted} hover:${COLORS.accent.primaryText} transition-colors`}
          >
            {categoryInfo.name}
          </button>
          <span className={COLORS.primary.textMuted}>→</span>
          <span className={COLORS.primary.text}>{event.title}</span>
        </div>

        {/* Event Header */}
        <div className={`${COLORS.layout.grid.cols2} lg:gap-16 items-stretch mb-12 pt-1.5`}>
          {/* Left: Event Image */}
          <div className="flex flex-col h-full">
            <div className="max-w-md mx-auto mb-6 flex-shrink min-h-0">
              <Image 
                imagePath={event.detailImageKey}
                containerClassName="transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            {/* Event Category Badge */}
            <div className="flex items-center space-x-4 mt-auto flex-shrink-0">
              <span className={`px-4 py-2 ${COLORS.effects.rounded} text-sm font-medium ${
                type === 'workshops' ? 'bg-cyan-500/20 text-cyan-400' :
                type === 'competitions' ? 'bg-blue-500/20 text-blue-400' :
                type === 'seminars' ? 'bg-purple-500/20 text-purple-400' :
                'bg-emerald-500/20 text-emerald-400'
              }`}>
                {categoryInfo.icon} {categoryInfo.name.slice(0, -1)}
              </span>
              <span className={`${COLORS.primary.textMuted} text-sm`}>
                {formatDate(event.date)}
              </span>
            </div>
          </div>

          {/* Right: Event Info */}
          <div className="flex flex-col h-full min-h-0">
            <h1 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} mb-6 flex-shrink-0`}>
              {event.title}
            </h1>
            
            <p className={`${COLORS.typography.body.lg} ${COLORS.primary.textMuted} mb-8 flex-shrink-0`}>
              {event.description}
            </p>

            {/* Quick Info */}
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg} mb-8 flex-grow min-h-0`}>
              <h3 className={`${COLORS.primary.text} font-bold mb-4`}>Event Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="text-xl">📅</div>
                  <div>
                    <p className={`${COLORS.primary.textSecondary} text-sm`}>Date</p>
                    <p className={`${COLORS.primary.text} font-medium`}>{formatDate(event.date)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-xl">🕒</div>
                  <div>
                    <p className={`${COLORS.primary.textSecondary} text-sm`}>Time</p>
                    <p className={`${COLORS.primary.text} font-medium`}>{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-xl">📍</div>
                  <div>
                    <p className={`${COLORS.primary.textSecondary} text-sm`}>Venue</p>
                    <p className={`${COLORS.primary.text} font-medium`}>{event.venue}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-xl">🎯</div>
                  <div>
                    <p className={`${COLORS.primary.textSecondary} text-sm`}>Category</p>
                    <p className={`${COLORS.primary.text} font-medium`}>{categoryInfo.name.slice(0, -1)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Button */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto flex-shrink-0">
              <button 
                onClick={handleRegistration}
                className={`flex-1 px-8 py-4 ${
                  isRegistered 
                    ? `${COLORS.interactive.buttonSecondary} cursor-default` 
                    : COLORS.interactive.buttonPrimary
                } ${COLORS.effects.roundedLg} font-semibold transition-all duration-300 ${
                  !isRegistered && 'hover:scale-105'
                }`}
                disabled={isRegistered}
              >
                {isRegistered ? '✓ Registered Successfully' : 'Register Now'}
              </button>
              <button className={`px-8 py-4 ${COLORS.interactive.buttonSecondary} ${COLORS.effects.roundedLg} font-semibold`}>
                Share Event
              </button>
            </div>
          </div>
        </div>

        {/* Event Specific Details */}
        <div className="mb-12">
          <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-8 text-center`}>
            Event Details
          </h2>
          {getEventSpecificDetails()}
        </div>

        {/* Related Events */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text}`}>
              More {categoryInfo.name}
            </h2>
            <button 
              onClick={() => navigate(`/events/${type}`)}
              className={`${COLORS.interactive.buttonSecondary} px-4 py-2 ${COLORS.effects.rounded} text-sm`}
            >
              View All →
            </button>
          </div>
          
          <div className={`${COLORS.layout.grid.cols3} ${COLORS.layout.grid.gap}`}>
            {eventsData[type]
              .filter(e => e.id !== event.id)
              .slice(0, 3)
              .map((relatedEvent) => (
                <div 
                  key={relatedEvent.id}
                  className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg} ${COLORS.interactive.cardHover} cursor-pointer`}
                  onClick={() => navigate(`/events/${type}/${relatedEvent.id}`)}
                >
                  <h4 className={`${COLORS.primary.text} font-bold mb-2`}>{relatedEvent.title}</h4>
                  <p className={`${COLORS.primary.textMuted} text-sm mb-3 line-clamp-2`}>
                    {relatedEvent.description}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className={COLORS.primary.textSecondary}>
                      {new Date(relatedEvent.date).toLocaleDateString()}
                    </span>
                    <span className={`${COLORS.accent.primaryText} font-medium`}>
                      Learn More →
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default EventDetail