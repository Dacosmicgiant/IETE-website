// src/components/ui/Image.jsx
import { useState } from 'react'
import { COLORS } from '../../constants/colors'

const Image = ({ 
  imageData, // Now takes the image object directly instead of imagePath
  className = '', 
  containerClassName = '',
  showFallbackText = true,
  onClick = null,
  loading = 'lazy'
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Helper function to get aspect ratio class
  const getAspectRatioClass = (aspectRatio) => {
    switch (aspectRatio) {
      case '1:1':
        return 'aspect-square'
      case '3:4':
        return 'aspect-[3/4]'
      case '4:3':
        return 'aspect-[4/3]'
      case '16:9':
        return 'aspect-video'
      default:
        return 'aspect-square'
    }
  }

  // If no image data provided, show default fallback
  if (!imageData) {
    return (
      <div className={`aspect-square w-full ${COLORS.primary.bgTertiary} ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed ${containerClassName} ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
        <div className="text-center p-4">
          <div className="text-4xl mb-2">🖼️</div>
          {showFallbackText && (
            <p className={`${COLORS.primary.textMuted} text-xs`}>
              No image provided
            </p>
          )}
        </div>
      </div>
    )
  }

  const { url, alt, aspectRatio = '1:1', fallback = '🖼️' } = imageData
  const aspectRatioClass = getAspectRatioClass(aspectRatio)

  // If image URL is not provided or image failed to load, show fallback
  if (!url || imageError) {
    return (
      <div 
        className={`${aspectRatioClass} w-full ${COLORS.primary.bgTertiary} ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed ${containerClassName} ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
      >
        <div className="text-center p-4">
          <div className="text-4xl mb-2">{fallback}</div>
          {showFallbackText && (
            <p className={`${COLORS.primary.textMuted} text-xs`}>
              Image placeholder<br/>
              <span className="text-xs">Ratio: {aspectRatio}</span>
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`${aspectRatioClass} w-full ${COLORS.effects.roundedLg} overflow-hidden relative ${containerClassName} ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className={`absolute inset-0 ${COLORS.primary.bgTertiary} ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed`}>
          <div className="text-center p-4">
            <div className="text-4xl mb-2 animate-pulse">{fallback}</div>
            {showFallbackText && (
              <p className={`${COLORS.primary.textMuted} text-xs animate-pulse`}>
                Loading...<br/>
                <span className="text-xs">Ratio: {aspectRatio}</span>
              </p>
            )}
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={url}
        alt={alt || 'Image'}
        loading={loading}
        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  )
}

export default Image