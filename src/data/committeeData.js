// src/data/committeeData.js

// Individual committee members
export const committeeMembers = [
  {
    id: 1,
    name: "Saniya Mahadik",
    position: "President",
    year: "Final Year",
    email: "saniya.mahadik@example.com", // Optional
    phone: "+91 9876543210", // Optional
    imageKey: "committee.saniyaMahadik",
    bio: "Leading the IETE-PCE chapter with passion for electronics and innovation.", // Optional
    linkedIn: "https://linkedin.com/in/saniya-mahadik", // Optional
    specialization: "Electronics & Communication", // Optional
    achievements: [ // Optional
      "Best Student Leader 2024",
      "IEEE Young Professional Award"
    ]
  },
  {
    id: 2,
    name: "Shravani Margaj",
    position: "Vice President",
    year: "Third Year", 
    email: "shravani.margaj@example.com",
    imageKey: "committee.shravaniMargaj",
    bio: "Supporting the chapter's growth and organizing technical events.",
    specialization: "Signal Processing"
  },
  {
    id: 3,
    name: "Riddhi Samarth",
    position: "Secretary",
    year: "Third Year",
    email: "riddhi.samarth@example.com",
    imageKey: "committee.riddhiSamarth",
    bio: "Managing chapter documentation and communication.",
    specialization: "Communication Systems"
  },
  {
    id: 4,
    name: "Akanksha Rakshe",
    position: "Treasurer", 
    year: "Second Year",
    email: "akanksha.rakshe@example.com",
    imageKey: "committee.akankshaRakshe",
    bio: "Handling financial planning and budget management.",
    specialization: "Digital Electronics"
  },
  {
    id: 5,
    name: "Nikita Ekunde",
    position: "Publicity Head",
    year: "Third Year",
    email: "nikita.ekunde@example.com",
    imageKey: "committee.nikitaEkunde",
    bio: "Creating awareness and promoting chapter activities.",
    specialization: "Media & Communications"
  },
  {
    id: 6,
    name: "Aditi Patil",
    position: "Content Head",
    year: "Second Year",
    email: "aditi.patil@example.com",
    imageKey: "committee.aditiPatil",
    bio: "Developing technical content and educational materials.",
    specialization: "Technical Writing"
  },
  {
    id: 7,
    name: "Chinmay Dabholkar",
    position: "Graphics Head",
    year: "Second Year",
    email: "chinmay.dabholkar@example.com",
    imageKey: "committee.chinmayDabholkar",
    bio: "Designing visual content and promotional materials.",
    specialization: "Design & Multimedia"
  },
  {
    id: 8,
    name: "Aayush Gupta",
    position: "Technical Head",
    year: "Third Year",
    email: "aayush.gupta@example.com",
    imageKey: "committee.aayushGupta",
    bio: "Leading technical workshops and innovation projects.",
    specialization: "Embedded Systems"
  },
  {
    id: 9,
    name: "Reva Patil",
    position: "Coordinator Nominated Member",
    year: "Second Year",
    email: "reva.patil@example.com",
    imageKey: "committee.revaPatil",
    bio: "Faculty-nominated representative ensuring academic alignment.",
    specialization: "VLSI Design"
  }
]

// Combined/Group members (for special cases where multiple people share a role or photo)
export const combinedMembers = [
  {
    id: "combined-nominated",
    title: "Additional Nominated Members",
    imageKey: "committee.combinedNominated",
    members: [
      {
        name: "Pratiksha Chaudhari",
        position: "Coordinator Nominated Member",
        year: "Second Year",
        email: "pratiksha.chaudhari@example.com",
        specialization: "Power Electronics"
      },
      {
        name: "Narayan Yadav",
        position: "Coordinator Nominated Member", 
        year: "Second Year",
        email: "narayan.yadav@example.com",
        specialization: "Control Systems"
      }
    ]
  }
]

// Committee configuration
export const committeeConfig = {
  groupPhoto: {
    imageKey: "committee.groupPhoto",
    title: "IETE-PCE Core Team 2024-25",
    description: "Our dedicated team working towards excellence in electronics and telecommunications.",
    year: "2024-25"
  },
  displaySettings: {
    showEmails: false, // Set to true to show email addresses
    showPhones: false, // Set to true to show phone numbers
    showBios: true, // Set to true to show member bios
    showSpecializations: true, // Set to true to show specializations
    showAchievements: false, // Set to true to show achievements
    showSocialLinks: false, // Set to true to show LinkedIn/social links
    gridLayout: "2-column", // Options: "2-column", "3-column", "4-column"
    showCombinedMembers: true // Set to false to hide combined member cards
  }
}

// Helper functions for easy management
export const addCommitteeMember = (member) => {
  // Add a new member (you would need to update the actual file)
  console.log("Add this member to committeeMembers array:", member)
  /* Example usage:
  addCommitteeMember({
    id: 10,
    name: "New Member Name",
    position: "New Position",
    year: "Year",
    email: "email@example.com",
    imageKey: "committee.newMember",
    bio: "Member bio",
    specialization: "Member specialization"
  })
  */
}

export const removeCommitteeMember = (memberId) => {
  // Remove a member by ID
  console.log("Remove member with ID:", memberId)
}

// Get members by position
export const getMembersByPosition = (position) => {
  return committeeMembers.filter(member => 
    member.position.toLowerCase().includes(position.toLowerCase())
  )
}

// Get executive members (core positions)
export const getExecutiveMembers = () => {
  const executivePositions = ['president', 'vice president', 'secretary', 'treasurer']
  return committeeMembers.filter(member => 
    executivePositions.some(pos => member.position.toLowerCase().includes(pos))
  )
}

// Get committee heads (specialized roles)
export const getCommitteeHeads = () => {
  return committeeMembers.filter(member => 
    member.position.toLowerCase().includes('head')
  )
}

// Get all members in display order
export const getAllMembersOrdered = () => {
  // Order: Executive positions first, then heads, then others
  const executives = getExecutiveMembers()
  const heads = getCommitteeHeads()
  const others = committeeMembers.filter(member => 
    !getExecutiveMembers().includes(member) && !getCommitteeHeads().includes(member)
  )
  
  return [...executives, ...heads, ...others]
}