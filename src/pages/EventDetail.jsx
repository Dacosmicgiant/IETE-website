// src/pages/EventDetail.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { COLORS } from '../constants/colors'
import { APP_DATA, getEnabledEvents } from '../data/appData'
import Image from '../components/ui/Image'

const EventDetail = () => {
  const { type, id } = useParams()
  const navigate = useNavigate()
  const [isRegistered, setIsRegistered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const events = getEnabledEvents(type)
  const event = events?.find(e => e.id === parseInt(id))
  const categoryInfo = APP_DATA.events.categories[type]

  // Reset carousel when event changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [id, type])

  // Keyboard navigation for carousel
  useEffect(() => {
    if (!event?.gallery || event.gallery.length <= 1) return

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        previousImage()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentImageIndex, event])

  if (!event || !categoryInfo || !categoryInfo.enabled) {
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

  const isEventPast = (dateString) => {
    const eventDate = new Date(dateString)
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Set to start of today
    return eventDate < today
  }

  const handleRegistration = () => {
    setIsRegistered(!isRegistered)
  }

  // Carousel functions
  const nextImage = () => {
    if (event.gallery && event.gallery.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % event.gallery.length)
    }
  }

  const previousImage = () => {
    if (event.gallery && event.gallery.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + event.gallery.length) % event.gallery.length)
    }
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  // Gallery Carousel Component - Separate section
  const GalleryCarousel = () => {
    const hasGallery = event.gallery && event.gallery.length > 0
    
    if (!hasGallery) return null

    const showCarouselControls = event.gallery.length > 1
    const currentImage = event.gallery[currentImageIndex]

    return (
      <div className="mb-12">
        <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-8 text-center`}>
          Event Gallery
        </h2>
        
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Main Image Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image 
              imageData={{
                ...currentImage,
                fallback: currentImage.fallback || '🖼️'
              }}
              containerClassName="transition-all duration-500 ease-in-out"
            />

            {/* Navigation Buttons - Only show if multiple images */}
            {showCarouselControls && (
              <>
                {/* Previous Button */}
                <button
                  onClick={previousImage}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${COLORS.effects.glass} ${COLORS.effects.rounded} p-4 ${COLORS.interactive.cardHover} transition-all duration-300 group z-10`}
                  aria-label="Previous image"
                >
                  <svg className={`w-6 h-6 ${COLORS.primary.text} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 ${COLORS.effects.glass} ${COLORS.effects.rounded} p-4 ${COLORS.interactive.cardHover} transition-all duration-300 group z-10`}
                  aria-label="Next image"
                >
                  <svg className={`w-6 h-6 ${COLORS.primary.text} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className={`absolute top-4 right-4 ${COLORS.effects.glass} ${COLORS.effects.rounded} px-4 py-2 text-sm ${COLORS.primary.text} font-medium z-10`}>
                  {currentImageIndex + 1} / {event.gallery.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Indicators - Only show if multiple images */}
          {showCarouselControls && (
            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              {event.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`transition-all duration-300 ${
                    index === currentImageIndex
                      ? `w-12 h-3 ${COLORS.accent.primaryBg} rounded-full`
                      : `w-3 h-3 ${COLORS.effects.glass} rounded-full hover:${COLORS.accent.primaryBg} hover:scale-125`
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Image Caption */}
          {currentImage.alt && (
            <p className={`text-center mt-4 text-base ${COLORS.primary.textMuted}`}>
              {currentImage.alt}
            </p>
          )}
        </div>
      </div>
    )
  }

  const getEventSpecificDetails = () => {
    switch (type) {
      case 'workshops':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                👨‍🏫 Workshop Details
              </h4>
              {event.instructor && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Instructor:</strong> {event.instructor}</p>
              )}
              {event.duration && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Duration:</strong> {event.duration}</p>
              )}
              {event.level && (
                <p className={`${COLORS.primary.textSecondary}`}><strong>Level:</strong> {event.level}</p>
              )}
            </div>
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                👥 Registration Info
              </h4>
              {event.capacity && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}>
                  <strong>Capacity:</strong> {event.capacity} students
                </p>
              )}
              {event.fee && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Fee:</strong> {event.fee}</p>
              )}
              {event.prerequisites && (
                <p className={`${COLORS.primary.textSecondary}`}><strong>Prerequisites:</strong> {event.prerequisites}</p>
              )}
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
              {event.prizes && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Prize Pool:</strong> {event.prizes}</p>
              )}
              {event.registrationFee && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Registration Fee:</strong> {event.registrationFee}</p>
              )}
              {event.teamSize && (
                <p className={`${COLORS.primary.textSecondary}`}><strong>Team Size:</strong> {event.teamSize}</p>
              )}
            </div>
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                📅 Important Dates
              </h4>
              <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Event Date:</strong> {formatDate(event.date)}</p>
              {event.deadline && (
                <p className={`${COLORS.primary.textSecondary}`}><strong>Registration Deadline:</strong> {formatDate(event.deadline)}</p>
              )}
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
              {event.speaker && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Speaker:</strong> {event.speaker}</p>
              )}
              {event.speakerBio && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>About:</strong> {event.speakerBio}</p>
              )}
              {event.attendance && (
                <p className={`${COLORS.primary.textSecondary}`}><strong>Attendance:</strong> {event.attendance}</p>
              )}
            </div>
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                📚 Topics Covered
              </h4>
              {event.topics && event.topics.length > 0 ? (
                <ul className="space-y-2">
                  {event.topics.map((topic, index) => (
                    <li key={index} className={`${COLORS.primary.textSecondary} flex items-center`}>
                      <span className="mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`${COLORS.primary.textSecondary}`}>Topics will be announced soon</p>
              )}
            </div>
          </div>
        )
      
      case 'IV':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                👨‍💼 Visit Details
              </h4>
              {event.trainer && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Guide:</strong> {event.trainer}</p>
              )}
              {event.duration && (
                <p className={`${COLORS.primary.textSecondary} mb-2`}><strong>Duration:</strong> {event.duration}</p>
              )}
              {event.certification && (
                <p className={`${COLORS.primary.textSecondary}`}><strong>Certification:</strong> {event.certification}</p>
              )}
            </div>
            <div className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg}`}>
              <h4 className={`${COLORS.primary.text} font-bold mb-4 flex items-center`}>
                📋 Requirements
              </h4>
              {event.prerequisites ? (
                <p className={`${COLORS.primary.textSecondary}`}><strong>Prerequisites:</strong> {event.prerequisites}</p>
              ) : (
                <p className={`${COLORS.primary.textSecondary}`}>No prerequisites required</p>
              )}
              {event.materials && (
                <p className={`${COLORS.primary.textSecondary} mt-2`}><strong>Materials:</strong> {event.materials}</p>
              )}
              {event.fee && (
                <p className={`${COLORS.primary.textSecondary} mt-2`}><strong>Fee:</strong> {event.fee}</p>
              )}
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
        <div className="flex items-center space-x-2 mb-8 text-sm mt-12">
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

        {/* Event Header - ORIGINAL STRUCTURE MAINTAINED */}
        <div className={`${COLORS.layout.grid.cols2} lg:gap-16 items-stretch mb-12 pt-1.5`}>
          {/* Left: Event Image - ORIGINAL */}
          <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="max-w-md w-90">
                <Image 
                  imageData={event.detailImage || event.image || {
                    url: null,
                    alt: `${event.title} - Event Image`,
                    aspectRatio: '1:1',
                    fallback: '🛠️'
                  }}
                  containerClassName="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right: Event Info - ORIGINAL */}
          <div className="flex flex-col h-full min-h-0">
            <h1 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} mb-6 flex-shrink-0`}>
              {event.title}
            </h1>
            
            {event.description && (
              <p className={`${COLORS.typography.body.lg} ${COLORS.primary.textMuted} mb-8 flex-shrink-0`}>
                {event.description}
              </p>
            )}

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
                {event.venue && (
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">📍</div>
                    <div>
                      <p className={`${COLORS.primary.textSecondary} text-sm`}>Venue</p>
                      <p className={`${COLORS.primary.text} font-medium`}>{event.venue}</p>
                    </div>
                  </div>
                )}
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
              {!isEventPast(event.date) && (
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
              )}
              {isEventPast(event.date) && (
                <div className={`flex-1 px-8 py-4 ${COLORS.interactive.buttonSecondary} ${COLORS.effects.roundedLg} font-semibold text-center opacity-60 cursor-not-allowed`}>
                  Event Ended
                </div>
              )}
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

        {/* NEW: Gallery Carousel Section - Only shows if gallery exists */}
        <GalleryCarousel />

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
            {getEnabledEvents(type)
              .filter(e => e.id !== event.id)
              .slice(0, 3)
              .map((relatedEvent) => (
                <div 
                  key={relatedEvent.id}
                  className={`p-6 ${COLORS.effects.glass} ${COLORS.effects.roundedLg} ${COLORS.interactive.cardHover} cursor-pointer`}
                  onClick={() => navigate(`/events/${type}/${relatedEvent.id}`)}
                >
                  <h4 className={`${COLORS.primary.text} font-bold mb-2`}>{relatedEvent.title}</h4>
                  {relatedEvent.description && (
                    <p className={`${COLORS.primary.textMuted} text-sm mb-3 line-clamp-2`}>
                      {relatedEvent.description}
                    </p>
                  )}
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