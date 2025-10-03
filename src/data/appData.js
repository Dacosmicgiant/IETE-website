// src/data/appData.js

export const APP_DATA = {
  // Site Information
  site: {
    name: "IETE-PCE",
    fullName: "Institution of Electronics and Telecommunication Engineers",
    description: "Excellence in Engineering",
    logo: {
      url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095597/IETE_LOGO_Red_xirien.png',
      alt: 'IETE-PCE Logo',
      aspectRatio: '1:1',
      fallback: '🏢'
    },
    hero: {
      url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752391267/iete_full_y0ia3p.jpg',
      alt: 'IETE-PCE Campus and Innovation',
      aspectRatio: '16:9',
      fallback: '🖼️'
    },
    about: {
      url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753094048/IETE_About_r15bfs.jpg',
      alt: 'IETE Institution Building',
      aspectRatio: '4:3',
      fallback: '🖼️'
    }
  },

  // Faculty Members - All fields are optional except name
  faculty: [
    {
      id: 1,
      name: "Dr. Avinash Vaidya", // Only required field
      position: "Head of Department",
      fullPosition: "Head of Department",
      department: "Electronics & Telecommunication Engineering",
      qualification: "Ph.D. in Electronics Engineering",
      experience: "15+ years",
      email: "hod.etc@pce.edu",
      phone: "+91 9876543210",
      bio: "Leading the department with expertise in advanced electronics and research supervision.",
      specializations: ["VLSI Design", "Digital Signal Processing", "Embedded Systems"],
      achievements: ["Best Teacher Award 2023", "Published 50+ research papers", "Principal Investigator for 5 research projects"],
      office: "Room 301, Main Block",
      officeHours: "Mon-Fri, 10:00 AM - 12:00 PM",
      courses: ["Advanced Digital Signal Processing", "VLSI Design Methodology", "Research Methodology"],
      image: {
        url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1754114245/hod_swqhz5.png',
        alt: 'Dr. Avinash Vaidya - HOD',
        aspectRatio: '3:4',
        fallback: '👤'
      },
      enabled: true
    },
    {
      id: 2,
      name: "Dr. Ameet Mehta",
      position: "Coordinator",
      bio: "Dedicated to fostering student development through IETE activities and industry connections.",
      image: {
        url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1754114244/ameet_akec3m.png',
        alt: 'Dr. Ameet Mehta - Coordinator',
        aspectRatio: '3:4',
        fallback: '👤'
      },
      enabled: true
    },
    {
      id: 3,
      name: "Prof. Shubham Thakur",
      position: "Co-Coordinator",
      qualification: "M.Tech in Electronics",
      experience: "8+ years",
      specializations: ["Microwave Engineering", "RF Circuit Design", "Internet of Things"],
      image: {
        url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1754114244/shubham_pymghn.jpg',
        alt: 'Prof. Shubham Thakur - Co-Coordinator',
        aspectRatio: '3:4',
        fallback: '👤'
      },
      enabled: true
    }
  ],

  // Committee Members - All fields are optional except name
  committee: {
    groupPhoto: {
      url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752391600/COREE_mjgrza.jpg',
      alt: 'IETE-PCE Committee Team Photo',
      aspectRatio: '16:9',
      fallback: '📸',
      title: "IETE-PCE Core Team 2024-25",
      description: "Our dedicated team working towards excellence in electronics and telecommunications.",
      year: "2024-25"
    },
    members: [
      {
        id: 1,
        name: "Saniya Mahadik", // Only required field
        position: "President",
        year: "BTech",
        email: "saniya.mahadik@example.com",
        phone: "+91 9876543210",
        bio: "Leading the IETE-PCE chapter with passion for electronics and innovation.",
        specialization: "Electronics & Communication",
        achievements: ["Best Student Leader 2024", "IEEE Young Professional Award"],
        linkedIn: "https://linkedin.com/in/saniya-mahadik",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752390952/Saniya_Mahadik_flrvje.jpg',
          alt: 'Saniya Mahadik - President',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true
      },
      {
        id: 2,
        name: "Shravani Margaj",
        position: "Vice President",
        year: "BTech",
        bio: "Supporting the chapter's growth and organizing technical events.",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752390951/Shravani_Margaj_ijzeh6.jpg',
          alt: 'Shravani Margaj - Vice President',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true
      },
      {
        id: 3,
        name: "Riddhi Samarth",
        position: "Secretary",
        specialization: "Communication Systems",
        year: "BTech",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752390951/Riddhi_Samarth_zphwc5.jpg',
          alt: 'Riddhi Samarth - Secretary',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true
      },
      {
        id: 4,
        name: "Akanksha Rakshe",
        position: "Treasurer",
        year: "BTech",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752390971/Akanksha_Rakshe_r8mgdr.jpg',
          alt: 'Akanksha Rakshe - Treasurer',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true
      },
      {
        id: 5,
        name: "Nikita Ekunde",
        position: "Publicity Head",
        year: "BTech",
         image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752390974/Nikita_Ekunde_atzbjm.jpg',
          alt: 'Nikita Ekunde- Publicity Head',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true
      },
      {
        id: 6,
        name: "Aditi Patil",
        position: "Content Head",
        year: "BTech",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752390970/Aditi_Patil_jbchls.jpg',
          alt: 'Aditi Patil - Content Head',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        
        
        enabled: true
      },
      {
        id: 7,
        name: "Chinmay Dabholkar",
        position: "Graphics Head",
        year: "BTech",
        specialization: "Design & Multimedia",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752390972/Chinmay_Dabholkar_taozi5.jpg',
          alt: 'Chinmay Dabholkar - Graphics Head',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true
      },
      {
        id: 8,
        name: "Aayush Gupta",
        position: "Technical Head",
        year: "BTech",
        bio: "Leading technical workshops and innovation projects.",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752390952/Aayush_Gupta_wjroqw.jpg',
          alt: 'Aayush Gupta - Technical Head',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true
      },
      {
        id: 9,
        name: "Reva Patil",
        position: "Social Media Head",
        year: "BTech",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752390950/Reva_Patil_iyq8do.jpg',
          alt: 'Reva Patil - Social Media Head',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true
      },
      {
        id: 10,
        name: "Vansh Katkar",
        position: "Satellite Club Head",
        year: "BTech",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1752392789/Vansh_Katkar_kofpjq.jpg',
          alt: 'Vansh Katkar-Satellite Club Head',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true
      },
      {
        id: 11,
        name: "Prathamesh Patil",
        position: "Public Relations Head",
        year: "BTech",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753111473/prathmesh_patil_lolhku.jpg',
          alt: 'Prathamesh Patil - Public Relations Head',
          aspectRatio: '3:4',
          fallback: '👤'
        },
        enabled: true},
    ],
    combinedMembers: [
      {
        id: "combined-nominated",
        title: "",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753096196/Narayan_Pratiksha_bsli4n.jpg',
          alt: 'Additional Nominated Members',
          aspectRatio: '3:4',
          fallback: '👥'
        },
        members: [
          {
            name: "Pratiksha Chaudhari & Narayan Yadav", // Only required field for sub-members
            position: "Coordinator Nominated Members",
            year: "BTech",
            specialization: "Power Electronics"
          }
        ],
        enabled: true
      }
    ]
  },

  // Events - All fields are optional except name, date, and time
  events: {
    categories: {
      workshops: {
        name: "Workshops",
        description: "Hands-on learning experiences with practical applications",
        icon: "🛠️",
        color: "cyan",
        enabled: true
      },
      competitions: {
        name: "Competitions",
        description: "Technical challenges and contests with exciting prizes",
        icon: "🏆",
        color: "blue",
        enabled: true
      },
      seminars: {
        name: "Seminars",
        description: "Expert talks and knowledge sharing sessions",
        icon: "🎤",
        color: "purple",
        enabled: true
      },
      IV: {
        name: "Industrial visits and Trainings",
        description: "Professional skill development and certification programs",
        icon: "📚",
        color: "emerald",
        enabled: true
      }
    },
    workshops: [
      {
        id: 1,
        title: "Inauguration of IETE", // Required
        date: "2025-07-15", // Required
        time: "10:00 AM - 4:00 PM", // Required
        description: "Learn to build IoT applications using Arduino and sensors. Hands-on experience with real projects.",
        venue: "Lab Complex A",
        instructor: "Dr. Rajesh Kumar",
        capacity: 30,
        registered: 18,
        level: "Beginner",
        duration: "6 hours",
        fee: "₹500",
        prerequisites: "Basic programming knowledge",
        materials: "Arduino kit will be provided",
        certificate: "IETE Workshop Certificate",
        registrationDeadline: "2025-07-10",
        tags: ["IoT", "Arduino", "Sensors", "Hands-on"],
        targetAudience: "2nd year and above",
        outcomes: ["Build working IoT prototypes", "Understand sensor interfacing", "Learn Arduino programming"],
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095083/Innogration_ddmusa.jpg',
          alt: 'Inauguration of IETE',
          aspectRatio: '3:4',
          fallback: '🛠️'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095083/Innogration_ddmusa.jpg',
          alt: 'Inauguration of IETE',
          aspectRatio: '3:4',
          fallback: '🛠️'
        },
        enabled: true
      },
      {
        id: 2,
        title: "PCB Design Workshop",
        date: "2025-07-22",
        time: "9:00 AM - 5:00 PM",
        instructor: "Prof. Priya Sharma",
        level: "Advanced",
        fee: "₹800",
        description: "Master PCB design using industry-standard tools. Create professional circuit boards from scratch.",
        venue: "Electronics Lab",
        capacity: 25,
        registered: 22,
        duration: "8 hours",
        prerequisites: "Circuit design basics",
        tags: ["PCB", "Electronics", "Design", "Advanced"],
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095421/PCB_Design_c9nshr.jpg',
          alt: 'PCB Design Workshop',
          aspectRatio: '3:4',
          fallback: '🛠️'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095421/PCB_Design_c9nshr.jpg',
          alt: 'PCB Design Workshop',
          aspectRatio: '3:4',
          fallback: '🛠️'
        },
        enabled: true
      },
    ],
    competitions: [
      {
        id: 1,
        title: "Circuit Craft",
        date: "2025-01-24",
        time: "2:00 AM - 5:00 PM",
        description: "Design innovative electronic circuits to solve real-world problems. Cash prizes for winners.",
        venue: "Main Auditorium",
        prizes: "₹3000 Total Prize Pool",
        registrationFee: "₹210 per team",
        teamSize: "2-4 members",
        deadline: "2025-08-03",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095536/Circuir_craft_kks4em.jpg',
          alt: 'Circuit Design Challenge',
          aspectRatio: '3:4',
          fallback: '🏆'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095536/Circuir_craft_kks4em.jpg',
          alt: 'Circuit Design Challenge',
          aspectRatio: '3:4',
          fallback: '🏆'
        },
        enabled: true
      },
      {
        id: 2,
        title: "Technical Quiz",
        date: "2025-08-15",
        time: "4:00 PM - 5:00 PM",
        description: "Test your electronics knowledge in this fun quiz competition.",
        venue: "Classroom 101",
        prizes: "₹5,000 Total Prizes",
        teamSize: "Individual",
        tags: ["Quiz", "Electronics", "Competition"],
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095122/Tech_Quiz_weviyp.jpg',
          alt: 'Technical Quiz',
          aspectRatio: '3:4',
          fallback: '🏆'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095122/Tech_Quiz_weviyp.jpg',
          alt: 'Technical Quiz',
          aspectRatio: '3:4',
          fallback: '🏆'
        },
        enabled: true
      },
      {
        id: 3,
        title: "HACKROBO",
        date: "2025-09-19",
        time: "9:00 AM - 6:00 PM",
        description: "2-day long national level hardware hackathon focusing on robotics and embedded systems innovation.",
        venue: "Main Campus",
        prizes: "Exciting prizes for winners",
        teamSize: "3-5 members",
        duration: "2 days",
        tags: ["Hardware", "Robotics", "Hackathon", "National Level"],
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759300637/HackRobo_wlalyz.jpg',
          alt: 'HACKROBO Hardware Hackathon',
          aspectRatio: '3:4',
          fallback: '🤖'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759300637/HackRobo_wlalyz.jpg',
          alt: 'HACKROBO Hardware Hackathon Details',
          aspectRatio: '3:4',
          fallback: '🤖'
        },
        enabled: true
      }
    ],
    seminars: [
      {
        id: 1,
        title: "Satellite Club Talk",
        date: "2024-09-23",
        time: "3:00 PM - 5:00 PM",
        description: "A technical talk hosted by the Satellite Club to explore advancements and opportunities in space technology and satellite communication.",
        venue: "Main Auditorium",
        speaker: "Ms Leena Bokil",
        attendance: "Free for all students",
        topics: ["Overview", "Hardware Challenges", "Industry Applications"],
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095378/satalite_club_talk_xmkus2.jpg',
          alt: 'Satellite Club Talk',
          aspectRatio: '3:4',
          fallback: '🎤'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095378/satalite_club_talk_xmkus2.jpg',
          alt: 'Satellite Club Talk',
          aspectRatio: '3:4',
          fallback: '🎤'
        },
        enabled: true
      },
    ],
    IV: [
      {
        id: 1,
        title: "Industrial visits and Trainings",
        date: "2025-03-8",
        time: "12:00 AM - 5:00 PM",
        description: "DIGISAT - A professional industrial visit organized by the IETE Committee to bridge academic learning with real-world industry exposure.",
        trainer: "Ms. Kavya Reddy",
        certification: "IETE Certificate",
        fee: "₹300",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095402/Industrial_visit_tlxkop.jpg',
          alt: 'DIGISAT Industrial Visit',
          aspectRatio: '4:3',
          fallback: '📚'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095402/Industrial_visit_tlxkop.jpg',
          alt: 'DIGISAT Industrial Visit',
          aspectRatio: '4:3',
          fallback: '📚'
        },
        enabled: true
      },
    ]
  },

  // Configuration Settings
  config: {
    faculty: {
      showQualifications: false, //false
      showExperience: false,
      showEmails: false,
      showPhones: false,
      showBios: false,
      showSpecializations: false,
      showAchievements: false,
      showOfficeInfo: false,
      showCourses: false,
      gridLayout: "3-column", // "2-column", "3-column", "4-column"
      showFullPositions: false,
      sectionTitle: "Our Faculty",
      sectionDescription: "Meet our experienced faculty members who guide and support the IETE-PCE chapter."
    },
    committee: {
      showEmails: false,
      showPhones: false,
      showBios: false, //false
      showSpecializations: false,
      showAchievements: false,
      showSocialLinks: false,
      gridLayout: "2-column", // "2-column", "3-column", "4-column"
      showCombinedMembers: true
    },
    events: {
      enabledCategories: {
        workshops: true,
        competitions: true,
        seminars: true,
        IV: true
      }
    }
  }
}

// Helper Functions for Easy Management

// Faculty Management
export const addFaculty = (facultyData) => {
  // Only name is required, everything else is optional
  if (!facultyData.name) {
    console.error("Faculty name is required")
    return false
  }
  
  const newId = APP_DATA.faculty.length > 0 ? Math.max(...APP_DATA.faculty.map(f => f.id)) + 1 : 1
  const newFaculty = {
    id: newId,
    enabled: true,
    ...facultyData
  }
  APP_DATA.faculty.push(newFaculty)
  return newFaculty
}

export const removeFaculty = (id) => {
  const index = APP_DATA.faculty.findIndex(f => f.id === id)
  if (index > -1) {
    APP_DATA.faculty.splice(index, 1)
    return true
  }
  return false
}

export const toggleFacultyEnabled = (id) => {
  const faculty = APP_DATA.faculty.find(f => f.id === id)
  if (faculty) {
    faculty.enabled = !faculty.enabled
    return faculty.enabled
  }
  return false
}

// Committee Management
export const addCommitteeMember = (memberData) => {
  // Only name is required, everything else is optional
  if (!memberData.name) {
    console.error("Committee member name is required")
    return false
  }
  
  const newId = APP_DATA.committee.members.length > 0 ? Math.max(...APP_DATA.committee.members.map(m => m.id)) + 1 : 1
  const newMember = {
    id: newId,
    enabled: true,
    ...memberData
  }
  APP_DATA.committee.members.push(newMember)
  return newMember
}

export const removeCommitteeMember = (id) => {
  const index = APP_DATA.committee.members.findIndex(m => m.id === id)
  if (index > -1) {
    APP_DATA.committee.members.splice(index, 1)
    return true
  }
  return false
}

export const toggleCommitteeMemberEnabled = (id) => {
  const member = APP_DATA.committee.members.find(m => m.id === id)
  if (member) {
    member.enabled = !member.enabled
    return member.enabled
  }
  return false
}

// Event Management
export const addEvent = (category, eventData) => {
  // Only title, date, and time are required
  if (!eventData.title || !eventData.date || !eventData.time) {
    console.error("Event title, date, and time are required")
    return false
  }
  
  const events = APP_DATA.events[category]
  if (!events) {
    console.error(`Invalid event category: ${category}`)
    return false
  }
  
  const newId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1
  const newEvent = {
    id: newId,
    enabled: true,
    ...eventData
  }
  events.push(newEvent)
  return newEvent
}

export const removeEvent = (category, id) => {
  const events = APP_DATA.events[category]
  if (events) {
    const index = events.findIndex(e => e.id === id)
    if (index > -1) {
      events.splice(index, 1)
      return true
    }
  }
  return false
}

export const toggleEventEnabled = (category, id) => {
  const events = APP_DATA.events[category]
  if (events) {
    const event = events.find(e => e.id === id)
    if (event) {
      event.enabled = !event.enabled
      return event.enabled
    }
  }
  return false
}

// Getter Functions
export const getEnabledFaculty = () => APP_DATA.faculty.filter(f => f.enabled !== false)
export const getEnabledCommitteeMembers = () => APP_DATA.committee.members.filter(m => m.enabled !== false)
export const getEnabledEvents = (category) => APP_DATA.events[category]?.filter(e => e.enabled !== false) || []
export const getExecutiveMembers = () => getEnabledCommitteeMembers().filter(m => 
  m.position && ['president', 'vice president', 'secretary', 'treasurer'].some(pos => 
    m.position.toLowerCase().includes(pos)
  )
)

// Utility Functions
export const getFacultyByPosition = (position) => getEnabledFaculty().filter(f => 
  f.position && f.position.toLowerCase().includes(position.toLowerCase())
)

export const getCommitteeMembersByPosition = (position) => getEnabledCommitteeMembers().filter(m => 
  m.position && m.position.toLowerCase().includes(position.toLowerCase())
)

export const getUpcomingEvents = (limit = null) => {
  const allEvents = []
  Object.keys(APP_DATA.events.categories).forEach(category => {
    const categoryEvents = getEnabledEvents(category)
    categoryEvents.forEach(event => {
      allEvents.push({ ...event, category })
    })
  })
  
  // Sort by date
  allEvents.sort((a, b) => new Date(a.date) - new Date(b.date))
  
  // Filter upcoming events
  const now = new Date()
  const upcoming = allEvents.filter(event => new Date(event.date) >= now)
  
  return limit ? upcoming.slice(0, limit) : upcoming
}

// SUPER SIMPLE USAGE EXAMPLES:

/* 
// MINIMAL ADDITIONS - Just provide the essentials!

// Add faculty with just name
addFaculty({
  name: "Dr. Simple Faculty"
})

// Add faculty with name and position
addFaculty({
  name: "Dr. New Professor",
  position: "Assistant Professor"
})

// Add committee member with just name  
addCommitteeMember({
  name: "Simple Student"
})

// Add committee member with name and position
addCommitteeMember({
  name: "New Student",
  position: "Marketing Head"
})

// Add workshop with just essentials
addEvent('workshops', {
  title: "Simple Workshop",
  date: "2025-09-15", 
  time: "10:00 AM - 2:00 PM"
})

// Add workshop with more details
addEvent('workshops', {
  title: "Advanced Workshop",
  date: "2025-09-20",
  time: "9:00 AM - 5:00 PM",
  venue: "Lab A",
  instructor: "Dr. Expert",
  fee: "₹500"
})

// Add competition with just essentials
addEvent('competitions', {
  title: "Quick Contest",
  date: "2025-09-25",
  time: "2:00 PM - 6:00 PM"
})

// Add seminar with speaker
addEvent('seminars', {
  title: "Tech Talk",
  date: "2025-09-30", 
  time: "3:00 PM - 4:00 PM",
  speaker: "Industry Expert"
})

// Add training with minimal info
addEvent('training', {
  title: "Skill Training",
  date: "2025-10-05",
  time: "10:00 AM - 3:00 PM"
})

// COMPLETE EXAMPLES with all optional fields:

addFaculty({
  name: "Dr. Complete Faculty",
  position: "Professor",
  qualification: "Ph.D. in Electronics",
  experience: "10+ years",
  email: "faculty@college.edu",
  bio: "Expert in electronics and communications",
  specializations: ["VLSI", "IoT", "5G"],
  achievements: ["Best Teacher 2024", "Research Excellence"],
  office: "Room 101",
  officeHours: "Mon-Wed 2-4 PM",
  image: {
    url: "https://example.com/photo.jpg",
    alt: "Dr. Complete Faculty",
    aspectRatio: "3:4", 
    fallback: "👤"
  }
})

*/