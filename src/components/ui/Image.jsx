import { useState } from 'react'
import { COLORS } from '../../constants/colors'
import { getImage, getAspectRatioClass } from '../../data/imagesData'

const Image = ({ 
  imagePath, 
  className = '', 
  containerClassName = '',
  showFallbackText = true,
  onClick = null,
  loading = 'lazy'
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Get image data from the centralized images data
  const imageData = getImage(imagePath)

  if (!imageData) {
    return (
      <div className={`${getAspectRatioClass('1:1')} w-full ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed ${containerClassName}`}>
        <div className="text-center p-4">
          <div className="text-3xl mb-2">❌</div>
          {showFallbackText && (
            <p className={`${COLORS.primary.textMuted} text-xs`}>
              Image not found<br/>
              <span className="text-xs">Path: {imagePath}</span>
            </p>
          )}
        </div>
      </div>
    )
  }

  const { url, alt, aspectRatio, fallback } = imageData
  const aspectRatioClass = getAspectRatioClass(aspectRatio)

  // If image URL is not provided or image failed to load, show fallback
  if (!url || imageError) {
    return (
      <div 
        className={`${aspectRatioClass} w-full ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed ${containerClassName} ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
      >
        <div className="text-center p-4">
          <div className="text-3xl mb-2">{fallback}</div>
          {showFallbackText && (
            <p className={`${COLORS.primary.textMuted} text-xs`}>
              Replace with image<br/>
              <span className="text-xs">Ratio: {aspectRatio}</span>
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`${aspectRatioClass} w-full ${COLORS.effects.roundedLg} overflow-hidden ${containerClassName} ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className={`absolute inset-0 ${COLORS.primary.bgTertiary}/20 ${COLORS.effects.roundedLg} flex items-center justify-center ${COLORS.primary.border} border-2 border-dashed`}>
          <div className="text-center p-4">
            <div className="text-3xl mb-2 animate-pulse">{fallback}</div>
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
        alt={alt}
        loading={loading}
        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  )
}

export default Image