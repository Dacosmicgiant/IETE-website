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

  // Faculty Members
  faculty: [
    {
      id: 1,
      name: "Dr. Avinash Vaidya",
      position: "Head of Department",
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
      image: {
        url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1754114244/shubham_pymghn.jpg',
        alt: 'Prof. Shubham Thakur - Co-Coordinator',
        aspectRatio: '3:4',
        fallback: '👤'
      },
      enabled: true
    }
  ],

  // Committee Members
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
        name: "Saniya Mahadik",
        position: "President",
        year: "BTech",
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
          alt: 'Nikita Ekunde - Publicity Head',
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
          alt: 'Vansh Katkar - Satellite Club Head',
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
        enabled: true
      }
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
            name: "Pratiksha Chaudhari & Narayan Yadav",
            position: "Coordinator Nominated Members",
            year: "BTech"
          }
        ],
        enabled: true
      }
    ]
  },

  // Events
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
        title: "Inauguration of IETE and SSC",
        date: "2025-07-15",
        time: "10:00 AM - 4:00 PM",
        venue: "Lab Complex A",
        instructor: "Dr. Rajesh Kumar",
        duration: "6 hours",
        level: "Beginner",
        capacity: 30,
        fee: "₹500",
        prerequisites: "Basic programming knowledge",
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
        venue: "Electronics Lab",
        instructor: "Prof. Priya Sharma",
        duration: "8 hours",
        level: "Advanced",
        capacity: 25,
        fee: "₹800",
        prerequisites: "Circuit design basics",
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
      }
    ],
    competitions: [
      {
        id: 1,
        title: "Circuit Craft",
        date: "2025-01-24",
        time: "2:00 AM - 5:00 PM",
        venue: "Main Auditorium",
        capacity: null,
        fee: "₹210 per team",
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
        venue: "Classroom 101",
        capacity: null,
        fee: null,
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
        venue: "Main Campus",
        duration: "2 days",
        capacity: null,
        fee: null,
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
        venue: "Main Auditorium",
        instructor: "Ms Leena Bokil",
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
      }
    ],
    IV: [
      {
        id: 1,
        title: "Industrial visit to DIGISAT",
        date: "2025-03-8",
        time: "12:00 AM - 5:00 PM",
        venue: "DIGISAT Facility",
        duration: "5 hours",
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
      }
    ]
  },

  // Configuration Settings
  config: {
    faculty: {
      gridLayout: "3-column",
      sectionTitle: "Our Faculty",
      sectionDescription: "Meet our experienced faculty members who guide and support the IETE-PCE chapter."
    },
    committee: {
      gridLayout: "2-column",
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