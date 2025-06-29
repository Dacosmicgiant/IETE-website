// src/utils/imageUtils.js

import { IMAGES, getImage, getAspectRatioClass } from '../data/imagesData'

/**
 * Get all images from a specific category
 * @param {string} category - The category name (e.g., 'committee', 'faculty')
 * @returns {Object} Object containing all images in the category
 */
export const getImagesByCategory = (category) => {
  return IMAGES[category] || {}
}

/**
 * Get all committee member images
 * @returns {Object} Object containing all committee member images
 */
export const getCommitteeMemberImages = () => {
  const committee = getImagesByCategory('committee')
  // Exclude group photo, return only individual member images
  const { groupPhoto, ...memberImages } = committee
  return memberImages
}

/**
 * Get all event images for a specific event type
 * @param {string} eventType - Type of event (workshops, competitions, seminars, training)
 * @returns {Object} Object containing all images for that event type
 */
export const getEventImages = (eventType) => {
  const events = getImagesByCategory('events')
  return events[eventType] || {}
}

/**
 * Get all event detail images for a specific event type
 * @param {string} eventType - Type of event (workshops, competitions, seminars, training)
 * @returns {Object} Object containing all detail images for that event type
 */
export const getEventDetailImages = (eventType) => {
  const eventDetails = getImagesByCategory('eventDetails')
  return eventDetails[eventType] || {}
}

/**
 * Validate if an image path exists in the IMAGES data
 * @param {string} imagePath - Dot notation path to image (e.g., 'logo', 'committee.saniyaMahadik')
 * @returns {boolean} True if image exists, false otherwise
 */
export const validateImagePath = (imagePath) => {
  return getImage(imagePath) !== null
}

/**
 * Get image URL directly without component
 * @param {string} imagePath - Dot notation path to image
 * @returns {string|null} Image URL or null if not found
 */
export const getImageUrl = (imagePath) => {
  const imageData = getImage(imagePath)
  return imageData?.url || null
}

/**
 * Get image alt text
 * @param {string} imagePath - Dot notation path to image
 * @returns {string} Alt text or default text if not found
 */
export const getImageAlt = (imagePath) => {
  const imageData = getImage(imagePath)
  return imageData?.alt || 'Image'
}

/**
 * Get all missing images (images with placeholder URLs)
 * @returns {Array} Array of image paths that have placeholder URLs
 */
export const getMissingImages = () => {
  const missingImages = []
  
  const checkObject = (obj, currentPath = '') => {
    Object.keys(obj).forEach(key => {
      const newPath = currentPath ? `${currentPath}.${key}` : key
      
      if (obj[key]?.url) {
        // Check if URL is a placeholder
        if (obj[key].url.includes('your-storage-service.com') || 
            obj[key].url.includes('placeholder') ||
            obj[key].url.includes('example.com')) {
          missingImages.push(newPath)
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        checkObject(obj[key], newPath)
      }
    })
  }
  
  checkObject(IMAGES)
  return missingImages
}

/**
 * Get image statistics
 * @returns {Object} Statistics about images in the system
 */
export const getImageStats = () => {
  const stats = {
    total: 0,
    byCategory: {},
    byAspectRatio: {},
    missing: 0,
    withUrls: 0
  }
  
  const analyzeObject = (obj, category = '') => {
    Object.keys(obj).forEach(key => {
      if (obj[key]?.url) {
        stats.total++
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1
        
        const aspectRatio = obj[key].aspectRatio
        stats.byAspectRatio[aspectRatio] = (stats.byAspectRatio[aspectRatio] || 0) + 1
        
        if (obj[key].url.includes('your-storage-service.com') || 
            obj[key].url.includes('placeholder') ||
            obj[key].url.includes('example.com')) {
          stats.missing++
        } else {
          stats.withUrls++
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null && !obj[key].url) {
        analyzeObject(obj[key], category || key)
      }
    })
  }
  
  analyzeObject(IMAGES)
  return stats
}

/**
 * Preload critical images for better performance
 * @param {Array} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths = []) => {
  const defaultCriticalImages = ['logo', 'hero.main']
  const imagesToLoad = imagePaths.length > 0 ? imagePaths : defaultCriticalImages
  
  imagesToLoad.forEach(path => {
    const imageData = getImage(path)
    if (imageData?.url && !imageData.url.includes('placeholder')) {
      const img = new Image()
      img.src = imageData.url
      // Optional: Add onload/onerror handlers
      img.onload = () => console.log(`Preloaded: ${path}`)
      img.onerror = () => console.warn(`Failed to preload: ${path}`)
    }
  })
}

/**
 * Generate srcSet for responsive images (if you have multiple sizes)
 * @param {string} imagePath - Dot notation path to image
 * @param {Object} sizes - Object with size variants {small: 'url', medium: 'url', large: 'url'}
 * @returns {string} srcSet string for responsive images
 */
export const generateSrcSet = (imagePath, sizes) => {
  if (!sizes || typeof sizes !== 'object') return ''
  
  const srcSetArray = []
  
  if (sizes.small) srcSetArray.push(`${sizes.small} 480w`)
  if (sizes.medium) srcSetArray.push(`${sizes.medium} 768w`)
  if (sizes.large) srcSetArray.push(`${sizes.large} 1200w`)
  
  return srcSetArray.join(', ')
}

/**
 * Check if image is loaded and accessible
 * @param {string} imageUrl - URL of the image to check
 * @returns {Promise<boolean>} Promise that resolves to true if image loads successfully
 */
export const checkImageAccessibility = (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = imageUrl
  })
}

/**
 * Batch check multiple images for accessibility
 * @param {Array} imagePaths - Array of image paths to check
 * @returns {Promise<Object>} Promise that resolves to object with results
 */
export const batchCheckImages = async (imagePaths) => {
  const results = {
    accessible: [],
    inaccessible: [],
    total: imagePaths.length
  }
  
  const checkPromises = imagePaths.map(async (path) => {
    const imageData = getImage(path)
    if (!imageData?.url) {
      results.inaccessible.push({ path, reason: 'No URL found' })
      return
    }
    
    const isAccessible = await checkImageAccessibility(imageData.url)
    if (isAccessible) {
      results.accessible.push(path)
    } else {
      results.inaccessible.push({ path, reason: 'Failed to load', url: imageData.url })
    }
  })
  
  await Promise.all(checkPromises)
  return results
}

/**
 * Get optimized image URL with transformations (for services like Cloudinary)
 * @param {string} imagePath - Dot notation path to image
 * @param {Object} transformations - Transformation options {width, height, quality, format}
 * @returns {string|null} Optimized image URL or null if not found
 */
export const getOptimizedImageUrl = (imagePath, transformations = {}) => {
  const imageData = getImage(imagePath)
  if (!imageData?.url) return null
  
  // This is a basic example for Cloudinary
  // Adjust based on your storage service's transformation API
  if (imageData.url.includes('cloudinary.com')) {
    const { width, height, quality = 'auto', format = 'auto' } = transformations
    
    // Insert transformations into Cloudinary URL
    const transformString = [
      width && `w_${width}`,
      height && `h_${height}`,
      `q_${quality}`,
      `f_${format}`
    ].filter(Boolean).join(',')
    
    if (transformString) {
      return imageData.url.replace('/upload/', `/upload/${transformString}/`)
    }
  }
  
  return imageData.url
}

/**
 * Log image system status to console (useful for debugging)
 */
export const logImageSystemStatus = () => {
  const stats = getImageStats()
  const missing = getMissingImages()
  
  console.group('🖼️ Image System Status')
  console.log('📊 Statistics:', stats)
  console.log('❌ Missing Images:', missing)
  console.log('✅ Completion:', `${stats.withUrls}/${stats.total} (${((stats.withUrls/stats.total)*100).toFixed(1)}%)`)
  console.groupEnd()
}

// Export the main functions and utilities
export {
  getImage,
  getAspectRatioClass
}