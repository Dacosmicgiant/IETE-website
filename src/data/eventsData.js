// src/data/eventsData.js

export const eventsData = {
  workshops: [
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
    }
  ],
  competitions: [
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
    }
  ],
  seminars: [
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
    }
  ],
  training: [
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
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
      image: "/api/placeholder/400/250"
    }
  ]
}

export const eventTypes = {
  workshops: {
    name: "Workshops",
    description: "Hands-on learning experiences with practical applications",
    icon: "🛠️",
    color: "cyan"
  },
  competitions: {
    name: "Competitions",
    description: "Technical challenges and contests with exciting prizes",
    icon: "🏆",
    color: "blue"
  },
  seminars: {
    name: "Seminars",
    description: "Expert talks and knowledge sharing sessions",
    icon: "🎤",
    color: "purple"
  },
  training: {
    name: "Training",
    description: "Professional skill development and certification programs",
    icon: "📚",
    color: "emerald"
  }
}