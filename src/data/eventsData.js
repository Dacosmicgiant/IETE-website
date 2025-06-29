// src/data/eventsData.js

// Event categories configuration
export const eventCategories = {
  workshops: {
    name: "Workshops",
    description: "Hands-on learning experiences with practical applications",
    icon: "🛠️",
    color: "cyan",
    enabled: true // Set to false to hide this category
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
  training: {
    name: "Training",
    description: "Professional skill development and certification programs",
    icon: "📚", 
    color: "emerald",
    enabled: true
  }
  // Add new categories here:
  // webinars: {
  //   name: "Webinars",
  //   description: "Online expert sessions and discussions",
  //   icon: "💻",
  //   color: "indigo", 
  //   enabled: true
  // }
}

// Workshop events
const workshops = [
  {
    id: 1,
    title: "Introduction to IoT Development",
    description: "Learn to build IoT applications using Arduino and sensors. Hands-on experience with real projects.",
    date: "2025-07-15",
    time: "10:00 AM - 4:00 PM", 
    venue: "Lab Complex A",
    instructor: "Dr. Rajesh Kumar",
    capacity: 30,
    registered: 18,
    level: "Beginner",
    duration: "6 hours",
    imageKey: "events.workshops.iotDevelopment",
    detailImageKey: "eventDetails.workshops.iotDevelopment",
    // Optional fields
    prerequisites: "Basic programming knowledge",
    materials: "Arduino kit will be provided",
    certificate: "IETE Workshop Certificate",
    fee: "₹500",
    registrationDeadline: "2025-07-10",
    tags: ["IoT", "Arduino", "Sensors", "Hands-on"],
    difficulty: "Beginner",
    targetAudience: "2nd year and above",
    outcomes: [
      "Build working IoT prototypes",
      "Understand sensor interfacing",
      "Learn Arduino programming"
    ],
    enabled: true // Set to false to hide this event
  },
  {
    id: 2,
    title: "Advanced PCB Design Workshop",
    description: "Master PCB design using Altium Designer. Create professional circuit boards from scratch.",
    date: "2025-07-22",
    time: "9:00 AM - 5:00 PM",
    venue: "Electronics Lab",
    instructor: "Prof. Priya Sharma", 
    capacity: 25,
    registered: 22,
    level: "Advanced",
    duration: "8 hours",
    imageKey: "events.workshops.pcbDesign",
    detailImageKey: "eventDetails.workshops.pcbDesign",
    prerequisites: "Circuit design basics",
    materials: "Laptops required",
    certificate: "PCB Design Certification",
    fee: "₹800",
    registrationDeadline: "2025-07-18",
    tags: ["PCB", "Altium", "Circuit Design", "Professional"],
    difficulty: "Advanced",
    targetAudience: "3rd year and above",
    outcomes: [
      "Design professional PCBs",
      "Master Altium Designer",
      "Understand manufacturing constraints"
    ],
    enabled: true
  },
  {
    id: 3,
    title: "Machine Learning for Engineers", 
    description: "Practical ML applications in engineering. Build predictive models for real-world problems.",
    date: "2025-07-29",
    time: "2:00 PM - 6:00 PM",
    venue: "Computer Lab 2",
    instructor: "Dr. Amit Patel",
    capacity: 35,
    registered: 12,
    level: "Intermediate",
    duration: "4 hours",
    imageKey: "events.workshops.machineLearning",
    detailImageKey: "eventDetails.workshops.machineLearning",
    prerequisites: "Python programming",
    materials: "Laptops with Python installed",
    certificate: "ML Workshop Certificate",
    fee: "₹600",
    registrationDeadline: "2025-07-25",
    tags: ["Machine Learning", "Python", "AI", "Data Science"],
    difficulty: "Intermediate",
    targetAudience: "All years",
    outcomes: [
      "Build ML models",
      "Apply ML in engineering",
      "Use Python libraries"
    ],
    enabled: true
  },
  {
    id: 4,
    title: "5G Network Fundamentals",
    description: "Understanding 5G technology, implementation, and future prospects in telecommunications.",
    date: "2025-08-05", 
    time: "10:00 AM - 3:00 PM",
    venue: "Seminar Hall",
    instructor: "Dr. Sneha Rao",
    capacity: 40,
    registered: 28,
    level: "Intermediate",
    duration: "5 hours",
    imageKey: "events.workshops.fiveGFundamentals",
    detailImageKey: "eventDetails.workshops.fiveGFundamentals",
    prerequisites: "Communication systems basics",
    materials: "Note-taking materials",
    certificate: "5G Technology Certificate",
    fee: "₹400",
    registrationDeadline: "2025-08-01",
    tags: ["5G", "Telecommunications", "Networks", "Future Tech"],
    difficulty: "Intermediate",
    targetAudience: "ETC students",
    outcomes: [
      "Understand 5G architecture",
      "Learn implementation challenges", 
      "Explore career opportunities"
    ],
    enabled: true
  }
]

// Competition events
const competitions = [
  {
    id: 1,
    title: "Circuit Design Challenge",
    description: "Design innovative electronic circuits to solve real-world problems. Cash prizes for winners.",
    date: "2025-08-10",
    time: "9:00 AM - 6:00 PM",
    venue: "Main Auditorium",
    prizes: "₹50,000 Total Prize Pool",
    registrationFee: "₹500 per team",
    teamSize: "2-4 members",
    deadline: "2025-08-03",
    imageKey: "events.competitions.circuitDesign",
    detailImageKey: "eventDetails.competitions.circuitDesign",
    // Optional fields
    rules: "Detailed rules available on registration",
    judgePanel: "Industry experts and faculty",
    timeline: "Registration: July 20 - Aug 3, Event: Aug 10",
    eligibility: "All undergraduate students",
    submissionFormat: "Working prototype + presentation",
    tags: ["Circuits", "Innovation", "Prize", "Competition"],
    difficulty: "Intermediate",
    categories: [
      { name: "Best Innovation", prize: "₹20,000" },
      { name: "Best Design", prize: "₹15,000" }, 
      { name: "Best Presentation", prize: "₹10,000" },
      { name: "People's Choice", prize: "₹5,000" }
    ],
    sponsors: ["TechCorp", "Innovation Labs"],
    enabled: true
  },
  {
    id: 2,
    title: "Robotics Championship",
    description: "Build autonomous robots to complete challenging tasks. Multi-round elimination format.",
    date: "2025-08-17",
    time: "8:00 AM - 8:00 PM",
    venue: "Sports Complex",
    prizes: "₹75,000 Total Prize Pool",
    registrationFee: "₹800 per team",
    teamSize: "3-5 members",
    deadline: "2025-08-10",
    imageKey: "events.competitions.robotics",
    detailImageKey: "eventDetails.competitions.robotics",
    rules: "Robots must be autonomous, detailed specs on website",
    judgePanel: "Robotics experts from industry and academia",
    timeline: "Registration: July 25 - Aug 10, Event: Aug 17",
    eligibility: "All engineering students",
    submissionFormat: "Working robot + technical documentation",
    tags: ["Robotics", "Autonomous", "Championship", "Tech"],
    difficulty: "Advanced",
    categories: [
      { name: "Grand Champion", prize: "₹30,000" },
      { name: "Runner Up", prize: "₹20,000" },
      { name: "Third Place", prize: "₹15,000" },
      { name: "Best Design", prize: "₹10,000" }
    ],
    sponsors: ["RoboTech Industries", "AI Innovations"],
    enabled: true
  },
  {
    id: 3,
    title: "Innovation Hackathon",
    description: "48-hour coding marathon to develop solutions for industry problems. Mentorship provided.",
    date: "2025-08-24",
    time: "6:00 PM (Fri) - 6:00 PM (Sun)",
    venue: "Innovation Center",
    prizes: "₹1,00,000 Total Prize Pool",
    registrationFee: "₹1000 per team",
    teamSize: "2-6 members",
    deadline: "2025-08-17",
    imageKey: "events.competitions.hackathon",
    detailImageKey: "eventDetails.competitions.hackathon",
    rules: "48-hour continuous development, mentorship available",
    judgePanel: "CTO panel from leading tech companies",
    timeline: "Registration: Aug 1-17, Hackathon: Aug 24-26",
    eligibility: "All students (any stream)",
    submissionFormat: "Working prototype + pitch presentation",
    tags: ["Hackathon", "Innovation", "48 hours", "Mentorship"],
    difficulty: "Intermediate",
    categories: [
      { name: "Grand Prize", prize: "₹40,000" },
      { name: "Runner Up", prize: "₹25,000" },
      { name: "Third Place", prize: "₹15,000" },
      { name: "Special Recognition", prize: "₹20,000" }
    ],
    sponsors: ["TechGiant Corp", "StartupIncubator"],
    enabled: true
  },
  {
    id: 4,
    title: "AI Challenge",
    description: "Develop AI models to solve complex engineering problems. Industry mentors available.",
    date: "2025-09-01",
    time: "10:00 AM - 5:00 PM",
    venue: "Tech Hub",
    prizes: "₹60,000 Total Prize Pool",
    registrationFee: "₹600 per team",
    teamSize: "2-4 members",
    deadline: "2025-08-25",
    imageKey: "events.competitions.aiChallenge",
    detailImageKey: "eventDetails.competitions.aiChallenge",
    rules: "AI/ML solutions for given problem statements",
    judgePanel: "AI researchers and industry experts",
    timeline: "Registration: Aug 15-25, Event: Sep 1",
    eligibility: "Students with AI/ML background",
    submissionFormat: "Trained model + documentation + demo",
    tags: ["AI", "Machine Learning", "Challenge", "Innovation"],
    difficulty: "Advanced",
    categories: [
      { name: "Best AI Solution", prize: "₹25,000" },
      { name: "Most Innovative", prize: "₹20,000" },
      { name: "Best Presentation", prize: "₹15,000" }
    ],
    sponsors: ["AI Research Lab", "DataTech Solutions"],
    enabled: true
  }
]

// Seminar events
const seminars = [
  {
    id: 1,
    title: "Future of Quantum Computing",
    description: "Exploring quantum computing applications in telecommunications and electronics.",
    date: "2025-07-18",
    time: "3:00 PM - 5:00 PM",
    venue: "Main Auditorium",
    speaker: "Dr. Vikram Singh, IIT Delhi",
    attendance: "Free for all students",
    topics: ["Quantum Algorithms", "Hardware Challenges", "Industry Applications"],
    imageKey: "events.seminars.quantumComputing",
    detailImageKey: "eventDetails.seminars.quantumComputing",
    // Optional fields
    speakerBio: "Leading quantum computing researcher with 15+ years experience",
    capacity: 200,
    registered: 150,
    prerequisites: "Basic physics knowledge helpful",
    materials: "Presentation slides will be shared",
    tags: ["Quantum", "Computing", "Future Tech", "Research"],
    targetAudience: "All engineering students",
    outcomes: [
      "Understand quantum principles",
      "Learn about applications",
      "Explore research opportunities"
    ],
    recordingAvailable: true,
    qnaSession: true,
    enabled: true
  },
  {
    id: 2,
    title: "Sustainable Electronics Design",
    description: "Green engineering practices for modern electronic system design and manufacturing.",
    date: "2025-07-25",
    time: "2:00 PM - 4:00 PM", 
    venue: "Conference Hall",
    speaker: "Prof. Maya Gupta, ISRO",
    attendance: "Free for all students",
    topics: ["Eco-friendly Materials", "Energy Efficiency", "Lifecycle Assessment"],
    imageKey: "events.seminars.sustainableElectronics",
    detailImageKey: "eventDetails.seminars.sustainableElectronics",
    speakerBio: "Environmental engineer and sustainability expert at ISRO",
    capacity: 150,
    registered: 80,
    prerequisites: "None",
    materials: "Case study handouts",
    tags: ["Sustainability", "Green Tech", "Environment", "Design"],
    targetAudience: "ETC and other engineering students",
    outcomes: [
      "Learn green design principles",
      "Understand environmental impact",
      "Apply sustainability metrics"
    ],
    recordingAvailable: false,
    qnaSession: true,
    enabled: true
  },
  {
    id: 3,
    title: "Industry 4.0 and IoT",
    description: "How Industry 4.0 is revolutionizing manufacturing through IoT and smart systems.",
    date: "2025-08-01",
    time: "4:00 PM - 6:00 PM",
    venue: "Smart Classroom",
    speaker: "Mr. Arjun Krishnan, Siemens",
    attendance: "Free for all students",
    topics: ["Smart Manufacturing", "Industrial IoT", "Digital Twins"],
    imageKey: "events.seminars.industry4",
    detailImageKey: "eventDetails.seminars.industry4",
    speakerBio: "Senior consultant at Siemens with expertise in Industry 4.0",
    capacity: 100,
    registered: 95,
    prerequisites: "Basic IoT knowledge helpful",
    materials: "Interactive demos",
    tags: ["Industry 4.0", "IoT", "Smart Systems", "Manufacturing"],
    targetAudience: "Final year students",
    outcomes: [
      "Understand Industry 4.0 concepts",
      "Learn IoT applications in industry",
      "Explore career opportunities"
    ],
    recordingAvailable: true,
    qnaSession: true,
    enabled: true
  },
  {
    id: 4,
    title: "Cybersecurity in Electronics",
    description: "Securing electronic systems and embedded devices against modern cyber threats.",
    date: "2025-08-08",
    time: "10:00 AM - 12:00 PM",
    venue: "Cybersecurity Lab",
    speaker: "Dr. Ravi Mehta, DRDO",
    attendance: "Free for all students",
    topics: ["Hardware Security", "Firmware Protection", "Threat Detection"],
    imageKey: "events.seminars.cybersecurity",
    detailImageKey: "eventDetails.seminars.cybersecurity",
    speakerBio: "Cybersecurity expert and researcher at DRDO",
    capacity: 80,
    registered: 70,
    prerequisites: "Computer systems knowledge",
    materials: "Security tools demonstration",
    tags: ["Cybersecurity", "Hardware Security", "Electronics", "Protection"],
    targetAudience: "ETC and CSE students",
    outcomes: [
      "Understand security threats",
      "Learn protection mechanisms",
      "Apply security principles"
    ],
    recordingAvailable: false,
    qnaSession: true,
    enabled: true
  }
]

// Training events
const training = [
  {
    id: 1,
    title: "Professional Communication Skills",
    description: "Enhance your technical communication skills for better career prospects.",
    date: "2025-07-20",
    time: "9:00 AM - 1:00 PM",
    venue: "Training Room 1",
    trainer: "Ms. Kavya Reddy",
    certification: "IETE Certificate",
    prerequisites: "None",
    duration: "4 hours",
    imageKey: "events.training.communication",
    detailImageKey: "eventDetails.training.communication",
    // Optional fields
    trainerBio: "Corporate communication expert with 10+ years experience",
    capacity: 50,
    registered: 35,
    fee: "₹300",
    materials: "Communication workbook included",
    tags: ["Communication", "Professional Skills", "Career", "Soft Skills"],
    targetAudience: "All students",
    modules: [
      "Effective Presentation Skills",
      "Technical Writing",
      "Email Etiquette",
      "Interview Communication"
    ],
    outcomes: [
      "Improve presentation skills",
      "Master technical writing",
      "Enhance professional communication"
    ],
    followUpSupport: true,
    enabled: true
  },
  {
    id: 2,
    title: "Project Management for Engineers",
    description: "Learn project management methodologies specifically designed for engineering projects.",
    date: "2025-07-27",
    time: "10:00 AM - 4:00 PM",
    venue: "Management Lab",
    trainer: "Mr. Suresh Iyer, PMP",
    certification: "IETE Certificate",
    prerequisites: "Basic engineering knowledge",
    duration: "6 hours",
    imageKey: "events.training.projectManagement",
    detailImageKey: "eventDetails.training.projectManagement",
    trainerBio: "Certified PMP with 15+ years in engineering project management",
    capacity: 40,
    registered: 30,
    fee: "₹500",
    materials: "PM toolkit and templates",
    tags: ["Project Management", "Engineering", "Leadership", "PMP"],
    targetAudience: "Third year and above",
    modules: [
      "Project Planning",
      "Risk Management", 
      "Team Leadership",
      "Quality Control"
    ],
    outcomes: [
      "Plan engineering projects",
      "Manage project risks",
      "Lead technical teams"
    ],
    followUpSupport: true,
    enabled: true
  },
  {
    id: 3,
    title: "Research Methodology Workshop",
    description: "Master research techniques, paper writing, and publication strategies for students.",
    date: "2025-08-03",
    time: "11:00 AM - 5:00 PM",
    venue: "Research Center",
    trainer: "Dr. Neha Joshi",
    certification: "IETE Certificate",
    prerequisites: "Third year or above",
    duration: "6 hours",
    imageKey: "events.training.researchMethodology",
    detailImageKey: "eventDetails.training.researchMethodology",
    trainerBio: "Research methodology expert with 50+ publications",
    capacity: 35,
    registered: 25,
    fee: "₹400",
    materials: "Research toolkit and templates",
    tags: ["Research", "Methodology", "Publications", "Academic"],
    targetAudience: "Research-oriented students",
    modules: [
      "Literature Review",
      "Research Design",
      "Data Analysis",
      "Paper Writing"
    ],
    outcomes: [
      "Design research studies",
      "Analyze research data",
      "Write research papers"
    ],
    followUpSupport: true,
    enabled: true
  },
  {
    id: 4,
    title: "Industry Readiness Program",
    description: "Comprehensive training program to prepare students for industry placements.",
    date: "2025-08-12",
    time: "9:00 AM - 6:00 PM",
    venue: "Placement Cell",
    trainer: "Industry Experts Panel",
    certification: "IETE Industry Certificate",
    prerequisites: "Final year students",
    duration: "9 hours",
    imageKey: "events.training.industryReadiness",
    detailImageKey: "eventDetails.training.industryReadiness",
    trainerBio: "Panel of industry HR and technical experts",
    capacity: 60,
    registered: 55,
    fee: "₹600",
    materials: "Industry readiness toolkit",
    tags: ["Industry", "Placement", "Career", "Professional Skills"],
    targetAudience: "Final year students",
    modules: [
      "Resume Building",
      "Interview Skills",
      "Technical Assessments",
      "Industry Expectations"
    ],
    outcomes: [
      "Build professional resume",
      "Master interview techniques",
      "Understand industry requirements"
    ],
    followUpSupport: true,
    enabled: true
  }
]

// Combine all events
export const eventsData = {
  workshops,
  competitions,
  seminars,
  training
}

// Legacy export for backwards compatibility
export const eventTypes = eventCategories

// Helper functions for easy event management
export const addEvent = (category, event) => {
  console.log(`Add this event to ${category}:`, event)
  /* Example usage:
  addEvent("workshops", {
    id: 5,
    title: "New Workshop",
    description: "Workshop description",
    date: "2025-09-15",
    time: "10:00 AM - 2:00 PM",
    venue: "Lab A",
    instructor: "Dr. Name",
    capacity: 30,
    registered: 0,
    level: "Beginner",
    duration: "4 hours",
    imageKey: "events.workshops.newWorkshop",
    detailImageKey: "eventDetails.workshops.newWorkshop",
    enabled: true
  })
  */
}

export const removeEvent = (category, eventId) => {
  console.log(`Remove event with ID ${eventId} from ${category}`)
}

export const toggleEventEnabled = (category, eventId, enabled) => {
  console.log(`Set event ${eventId} in ${category} to enabled: ${enabled}`)
}

// Get events by category with filtering
export const getEventsByCategory = (category, includeDisabled = false) => {
  const events = eventsData[category] || []
  return includeDisabled ? events : events.filter(event => event.enabled !== false)
}

// Get upcoming events across all categories
export const getUpcomingEvents = (limit = null) => {
  const allEvents = []
  Object.keys(eventsData).forEach(category => {
    const categoryEvents = getEventsByCategory(category)
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

// Get events by date range
export const getEventsByDateRange = (startDate, endDate) => {
  const allEvents = getUpcomingEvents()
  const start = new Date(startDate)
  const end = new Date(endDate)
  
  return allEvents.filter(event => {
    const eventDate = new Date(event.date)
    return eventDate >= start && eventDate <= end
  })
}

// Search events
export const searchEvents = (query) => {
  const allEvents = []
  Object.keys(eventsData).forEach(category => {
    const categoryEvents = getEventsByCategory(category)
    categoryEvents.forEach(event => {
      allEvents.push({ ...event, category })
    })
  })
  
  const searchTerm = query.toLowerCase()
  return allEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm) ||
    event.description.toLowerCase().includes(searchTerm) ||
    (event.tags && event.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
  )
}