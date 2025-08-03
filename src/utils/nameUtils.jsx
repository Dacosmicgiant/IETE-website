// src/utils/nameUtils.jsx

/**
 * Formats a person's name for consistent display across the application
 * @param {string} fullName - The complete name to format
 * @param {boolean} isFaculty - Whether this is a faculty member (has prefixes like Dr., Prof.)
 * @returns {JSX.Element} - Formatted name with proper line breaks
 */
export const formatPersonName = (fullName, isFaculty = false) => {
  if (!fullName || typeof fullName !== 'string') {
    return <span>{fullName || 'Unknown'}</span>
  }

  // Clean and split the name
  const nameParts = fullName.trim().split(/\s+/)
  
  if (nameParts.length === 1) {
    // Single name - display as is
    return <span>{nameParts[0]}</span>
  } else if (nameParts.length === 2) {
    // Two words - likely first name + last name (student pattern)
    return (
      <span>
        {nameParts[0]}
        <br />
        {nameParts[1]}
      </span>
    )
  } else if (nameParts.length >= 3) {
    // Three or more words
    if (isFaculty) {
      // For faculty: Check if first word is a prefix
      const prefixes = ['Dr.', 'Prof.', 'Mr.', 'Ms.', 'Mrs.', 'Professor', 'Doctor']
      const hasPrefix = prefixes.some(prefix => 
        nameParts[0].toLowerCase().includes(prefix.toLowerCase())
      )
      
      if (hasPrefix) {
        // If has prefix: "Dr. FirstName" on first line, "LastName" on second line
        const firstLine = nameParts.slice(0, 2).join(' ') // "Dr. FirstName"
        const secondLine = nameParts.slice(2).join(' ')   // "LastName"
        
        return (
          <span>
            {firstLine}
            <br />
            {secondLine}
          </span>
        )
      } else {
        // No prefix but 3+ words: "FirstName MiddleName" on first line, "LastName" on second
        const firstLine = nameParts.slice(0, -1).join(' ') // All except last
        const secondLine = nameParts[nameParts.length - 1] // Last word
        
        return (
          <span>
            {firstLine}
            <br />
            {secondLine}
          </span>
        )
      }
    } else {
      // For students with 3+ names: "FirstName" on first line, "MiddleName LastName" on second
      const firstLine = nameParts[0]                    // First word
      const secondLine = nameParts.slice(1).join(' ')   // Rest of the words
      
      return (
        <span>
          {firstLine}
          <br />
          {secondLine}
        </span>
      )
    }
  }

  // Fallback - shouldn't reach here but just in case
  return <span>{fullName}</span>
}

/**
 * Auto-detects if a name likely belongs to faculty based on prefixes
 * @param {string} fullName - The name to check
 * @returns {boolean} - True if likely faculty, false otherwise
 */
export const detectFacultyName = (fullName) => {
  if (!fullName || typeof fullName !== 'string') return false
  
  const prefixes = ['Dr.', 'Prof.', 'Professor', 'Doctor', 'Mr.', 'Ms.', 'Mrs.']
  const firstWord = fullName.trim().split(/\s+/)[0]
  
  return prefixes.some(prefix => 
    firstWord.toLowerCase().includes(prefix.toLowerCase())
  )
}

/**
 * Formats name with auto-detection of faculty status
 * @param {string} fullName - The complete name to format
 * @returns {JSX.Element} - Formatted name with proper line breaks
 */
export const formatNameAuto = (fullName) => {
  const isFaculty = detectFacultyName(fullName)
  return formatPersonName(fullName, isFaculty)
}

/**
 * Get display name for headers/titles (single line, no breaks)
 * @param {string} fullName - The complete name
 * @returns {string} - Single line name for titles
 */
export const getDisplayName = (fullName) => {
  return fullName || 'Unknown'
}

// Example usage:
/*
import { formatPersonName, formatNameAuto } from '../utils/nameUtils'

// For faculty (manual specification)
{formatPersonName("Dr. Avinash Vaidya", true)}
// Result: "Dr. Avinash" on first line, "Vaidya" on second line

// For students (manual specification)  
{formatPersonName("Saniya Mahadik", false)}
// Result: "Saniya" on first line, "Mahadik" on second line

// Auto-detection
{formatNameAuto("Prof. Shubham Thakur")}
// Automatically detects as faculty and formats accordingly

{formatNameAuto("Riddhi Samarth")}
// Automatically detects as student and formats accordingly
*/