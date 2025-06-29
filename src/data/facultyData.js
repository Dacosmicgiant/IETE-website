// src/data/facultyData.js

export const facultyMembers = [
  {
    id: 1,
    name: "Dr. Faculty Name",
    position: "HOD",
    fullPosition: "Head of Department",
    department: "Electronics & Telecommunication Engineering",
    qualification: "Ph.D. in Electronics Engineering", // Optional
    experience: "15+ years", // Optional
    email: "hod.etc@pce.edu", // Optional
    phone: "+91 9876543210", // Optional
    imageKey: "faculty.hod",
    bio: "Leading the department with expertise in advanced electronics and research supervision.", // Optional
    specializations: [ // Optional
      "VLSI Design",
      "Digital Signal Processing",
      "Embedded Systems"
    ],
    achievements: [ // Optional
      "Best Teacher Award 2023",
      "Published 50+ research papers",
      "Principal Investigator for 5 research projects"
    ],
    office: "Room 301, Main Block", // Optional
    officeHours: "Mon-Fri, 10:00 AM - 12:00 PM", // Optional
    courses: [ // Optional
      "Advanced Digital Signal Processing",
      "VLSI Design Methodology",
      "Research Methodology"
    ]
  },
  {
    id: 2,
    name: "Dr. Faculty Name",
    position: "Coordinator", 
    fullPosition: "IETE Student Chapter Coordinator",
    department: "Electronics & Telecommunication Engineering",
    qualification: "Ph.D. in Communication Engineering",
    experience: "12+ years",
    email: "coordinator.iete@pce.edu",
    imageKey: "faculty.coordinator",
    bio: "Dedicated to fostering student development through IETE activities and industry connections.",
    specializations: [
      "Wireless Communications",
      "Antenna Design",
      "5G Technology"
    ],
    achievements: [
      "IETE Excellence Award 2022",
      "Industry Collaboration Champion",
      "Student Mentor of the Year"
    ],
    office: "Room 205, ETC Block",
    officeHours: "Tue-Thu, 2:00 PM - 4:00 PM",
    courses: [
      "Wireless Communication Systems",
      "Antenna Theory and Design",
      "Communication Networks"
    ]
  },
  {
    id: 3,
    name: "Prof. Faculty Name",
    position: "Co-Coordinator",
    fullPosition: "IETE Student Chapter Co-Coordinator",
    department: "Electronics & Telecommunication Engineering", 
    qualification: "M.Tech in Electronics",
    experience: "8+ years",
    email: "co-coordinator.iete@pce.edu",
    imageKey: "faculty.coCoordinator",
    bio: "Supporting chapter activities and bridging the gap between students and industry.",
    specializations: [
      "Microwave Engineering",
      "RF Circuit Design",
      "Internet of Things"
    ],
    achievements: [
      "Young Faculty Award 2023",
      "Innovation in Teaching",
      "Student Project Guide"
    ],
    office: "Room 207, ETC Block",
    officeHours: "Mon, Wed, Fri, 11:00 AM - 1:00 PM",
    courses: [
      "Microwave Engineering",
      "RF and Microwave Circuits",
      "IoT Systems Design"
    ]
  }
]

// Faculty configuration
export const facultyConfig = {
  displaySettings: {
    showQualifications: true, // Set to true to show qualifications
    showExperience: true, // Set to true to show experience
    showEmails: false, // Set to true to show email addresses
    showPhones: false, // Set to true to show phone numbers
    showBios: true, // Set to true to show faculty bios
    showSpecializations: true, // Set to true to show specializations
    showAchievements: false, // Set to true to show achievements
    showOfficeInfo: false, // Set to true to show office and hours
    showCourses: false, // Set to true to show courses taught
    gridLayout: "3-column", // Options: "2-column", "3-column", "4-column"
    showFullPositions: false // Set to true to show full position titles instead of short ones
  },
  sectionTitle: "Our Faculty",
  sectionDescription: "Meet our experienced faculty members who guide and support the IETE-PCE chapter." // Optional
}

// Helper functions for easy management
export const addFacultyMember = (member) => {
  console.log("Add this faculty member to facultyMembers array:", member)
  /* Example usage:
  addFacultyMember({
    id: 4,
    name: "Dr. New Faculty",
    position: "Advisor",
    fullPosition: "Technical Advisor",
    department: "Electronics & Telecommunication Engineering",
    qualification: "Ph.D. in Electronics",
    experience: "10+ years",
    email: "newfaculty@pce.edu",
    imageKey: "faculty.newFaculty",
    bio: "Expert in emerging technologies.",
    specializations: ["AI/ML", "Robotics"],
    office: "Room 101",
    officeHours: "Daily 2-4 PM"
  })
  */
}

export const removeFacultyMember = (memberId) => {
  console.log("Remove faculty member with ID:", memberId)
}

// Get faculty by position
export const getFacultyByPosition = (position) => {
  return facultyMembers.filter(member => 
    member.position.toLowerCase().includes(position.toLowerCase())
  )
}

// Get HOD
export const getHOD = () => {
  return facultyMembers.find(member => 
    member.position.toLowerCase().includes('hod')
  )
}

// Get coordinators
export const getCoordinators = () => {
  return facultyMembers.filter(member => 
    member.position.toLowerCase().includes('coordinator')
  )
}

// Get faculty in hierarchy order
export const getFacultyInHierarchy = () => {
  const hod = getHOD()
  const coordinators = getCoordinators()
  const others = facultyMembers.filter(member => 
    !member.position.toLowerCase().includes('hod') && 
    !member.position.toLowerCase().includes('coordinator')
  )
  
  return [hod, ...coordinators, ...others].filter(Boolean)
}