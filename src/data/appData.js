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
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1759567457/iete_committeeEditwww_al5whz.jpg',
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
  } ,

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
        url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1760026026/IMG_20251005_112951_vjvqgm.jpg',
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
      url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1761308458/WhatsApp_Image_2025-10-24_at_17.48.45_yyobas.jpg',
      alt: 'IETE-PCE Committee Team Photo',
      aspectRatio: '16:9',
      fallback: '📸',
      title: "IETE-PCE Core Team 2025",
      description: "Our dedicated team working towards excellence in electronics and telecommunications.",
      year: "2025"
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
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1761308458/WhatsApp_Image_2025-10-24_at_17.48.44_aoxep5.jpg',
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
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1761319199/WhatsApp_Image_2025-10-24_at_20.47.41_mhm1lw.jpg',
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
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1761308964/WhatsApp_Image_2025-10-24_at_17.55.25_fltfcr.jpg',
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
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1761319198/WhatsApp_Image_2025-10-24_at_20.42.47_soofhg.jpg',
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
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1760025134/aayushgupta_tp6vhm.jpg',
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
        year: "TY",
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
        title: "Inauguration of IETE and SSC", // Required
        date: "2024-09-23", // Required
        time: "10:00 AM - 4:00 PM", // Required
        description: "Inauguration ceramony of IETE and SSC,",
        venue: "Auditorium",
        instructor: "Mrs. Leena Bokil",
        duration: "3 hours",
        tags: ["IoT", "Arduino", "Sensors", "Hands-on"],
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095083/Innogration_ddmusa.jpg',
          alt: 'Inauguration of IETE',
          aspectRatio: '3:4',
          fallback: '🛠️'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1753095083/Innogration_ddmusa.jpg',
          alt: 'Inauguration of IETE',
          aspectRatio: '1:1',
          fallback: '🛠️'
        },
        gallery: [
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759564759/IMG_6136_mufvnf.jpg',
    alt: 'IETE and SSC inauguration - ceremonial lighting of lamp',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759564754/IMG_6088_carml2.jpg',
    alt: 'IETE and SSC inauguration - chief guests on stage during ceremony',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759564753/IMG_6151_wepygp.jpg',
    alt: 'IETE and SSC inauguration - dignitaries addressing the audience',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759564753/IMG_6104_okeqbb.jpg',
    alt: 'IETE and SSC inauguration - formal inauguration proceedings',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759564753/IMG_6187_y8uvyi.jpg',
    alt: 'IETE and SSC inauguration - guest speakers and officials',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759564752/IMG_6158_q8jcsj.jpg',
    alt: 'IETE and SSC inauguration - audience gathering at ceremony',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759564752/IMG_6284_hgmdrm.jpg',
    alt: 'IETE and SSC inauguration - ceremonial unveiling event',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759564751/IMG_6123_pns5y5.jpg',
    alt: 'IETE and SSC inauguration - official ceremony moment',
    aspectRatio: '16:9'
  }
      ],
        enabled: true
      },
      {
        id: 2,
        title: "PCB Design Workshop",
        date: "2025-02-05",
        time: "9:00 AM - 5:00 PM",
        instructor: "Prof. Shubham Thakur",
        level: "Basic",
        fee: "₹200",
        description: "Master PCB design using industry-standard tools. Create professional circuit boards from scratch.",
        venue: "J201",
        capacity: 25,
        registered: 22,
        duration: "5 hours",
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
  "gallery": [
    {
      "url": "https://res.cloudinary.com/dggl6xbcg/image/upload/v1764224742/pcb_1_gfhryy.jpg",
      "alt": "PCB Design Workshop",
      "aspectRatio": "16:9"
    },
    {
      "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1759565093/IMG-20250205-WA0016_emf2wl.jpg",
      "alt": "PCB Design Workshop",
      "aspectRatio": "16:9"
    },
    {
      "url": "https://res.cloudinary.com/dggl6xbcg/image/upload/v1764224850/pcb_3_l3y01z.jpg",
      "alt": "PCB Design Workshop",
      "aspectRatio": "16:9"
    }
  ],
        enabled: true
      },
      {
        id: 3,
        title: "Workshop and Competition on LabVIEW",
        date: "2025-03-27",
        time: "10:00 AM - 5:00 PM",
        description: "Hands-on workshop and competition using LabVIEW for measurement and automation.",
        venue: "J-201",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759656267/LabView_Workshop_azp5jp.png',
          alt: 'LabVIEW Workshop and Competition',
          aspectRatio: '3:4',
          fallback: '🛠️'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759656267/LabView_Workshop_azp5jp.png',
          alt: 'LabVIEW Workshop and Competition',
          aspectRatio: '3:4',
          fallback: '🛠️'
        },
        gallery: [
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759658273/IMG-20250327-WA0064_hhvymy.jpg',
    alt: 'LabVIEW workshop - students learning graphical programming',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759658268/IMG-20250327-WA0049_d42ijt.jpg',
    alt: 'LabVIEW training session - hands-on programming experience',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759658215/IMG-20250327-WA0012_vdfrik.jpg',
    alt: 'LabVIEW workshop - participants working on lab computers',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759658210/IMG-20250327-WA0010_zxeysa.jpg',
    alt: 'LabVIEW session - students engaged in practical exercises',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759658202/IMG-20250327-WA0043_oy8mfb.jpg',
    alt: 'LabVIEW training - instructor demonstrating software features',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759658198/IMG-20250327-WA0058_scbve1.jpg',
    alt: 'LabVIEW workshop - collaborative learning environment',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759658194/IMG-20250327-WA0066_prgbvc.jpg',
    alt: 'LabVIEW session - students developing virtual instruments',
    aspectRatio: '16:9'
  }
],
        enabled: true
      },
    ],
    competitions: [
      {
        id: 4,
        title: "CIRCUIT CRAFT 3.0",
        date: "2025-10-16",
        time: "2:00 PM - 5:00 PM",
        description: "Design innovative electronic circuits to solve real-world problems. Cash prizes for winners.",
        venue: "J-104",
        prizes: "₹3,000 Total Prizes",
        registrationFee: "₹210 per team",
        teamSize: "1-3 members",
        duration: "3 hours",
        tags: ["Hardware", "Electronics", "Competition"],
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1761306971/WhatsApp_Image_2025-10-24_at_17.21.04_1_gapxwz.jpg',
          alt: 'CIRCUIT CRAFT 3.0',
          aspectRatio: '1:1',
          fallback: '🤖'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1761306971/WhatsApp_Image_2025-10-24_at_17.21.04_1_gapxwz.jpg',
          alt: 'CIRCUIT CRAFT 3.0',
          aspectRatio: '1:1',
          fallback: '🤖'
        },
        "gallery": [
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565284/IMG_2263_lva9qz.jpg',
    alt: 'Circuit craft project - electronic components and breadboard setup',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565281/IMG_20250124_161118_sc76pv.jpg',
    alt: 'Circuit craft workshop - students working on electronics project',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565278/IMG_20250124_22462374_u2mixd.jpg',
    alt: 'Circuit craft demonstration - completed electronic circuit',
    aspectRatio: '9:16'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565277/IMG20250124143257_sw2arq.jpg',
    alt: 'Circuit craft activity - hands-on electronics assembly',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565276/IMG-20250124-WA0005_hegdks.jpg',
    alt: 'Circuit craft session - participants learning circuit design',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565275/IMG-20250124-WA0020_ziulun.jpg',
    alt: 'Circuit craft project - working prototype with LED components',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565272/IMG20250124174323_tukfrh.jpg',
    alt: 'Circuit craft workshop - group collaboration on electronics',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565272/IMG20250124150800_e5kz13.jpg',
    alt: 'Circuit craft event - testing and troubleshooting circuits',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565271/IMG20250124164321_rwxsj2.jpg',
    alt: 'Circuit craft activity - final project showcase',
    aspectRatio: '16:9'
  }
  ],
        enabled: true
      },
      {
        id: 1,
        title: "Circuit Craft 2.0",
        date: "2025-01-24",
        time: "2:00 PM - 5:00 PM",
        description: "Design innovative electronic circuits to solve real-world problems. Cash prizes for winners.",
        venue: "T302",
        prizes: "₹3000 Total Prize Pool",
        registrationFee: "₹210 per team",
        teamSize: "2-4 members",
       
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
        gallery: [
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565284/IMG_2263_lva9qz.jpg',
    alt: 'Circuit craft project - electronic components and breadboard setup',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565281/IMG_20250124_161118_sc76pv.jpg',
    alt: 'Circuit craft workshop - students working on electronics project',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565278/IMG_20250124_22462374_u2mixd.jpg',
    alt: 'Circuit craft demonstration - completed electronic circuit',
    aspectRatio: '9:16'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565277/IMG20250124143257_sw2arq.jpg',
    alt: 'Circuit craft activity - hands-on electronics assembly',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565276/IMG-20250124-WA0005_hegdks.jpg',
    alt: 'Circuit craft session - participants learning circuit design',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565275/IMG-20250124-WA0020_ziulun.jpg',
    alt: 'Circuit craft project - working prototype with LED components',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565272/IMG20250124174323_tukfrh.jpg',
    alt: 'Circuit craft workshop - group collaboration on electronics',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565272/IMG20250124150800_e5kz13.jpg',
    alt: 'Circuit craft event - testing and troubleshooting circuits',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759565271/IMG20250124164321_rwxsj2.jpg',
    alt: 'Circuit craft activity - final project showcase',
    aspectRatio: '16:9'
  }
],
        enabled: true
      },
      {
        id: 2,
        title: "Technical Quiz",
        date: "2024-09-20",
        time: "1:30 onwards",
        description: "Test your electronics knowledge in this fun quiz competition.",
        venue: "Conclave 2",
        prizes: "₹3,000 Total Prizes",
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
        gallery: [
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567311/IMG_20240920_181822_f4vj6r.jpg',
    alt: 'Technical Quiz - participants competing in quiz competition',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567308/IMG_20240920_125310_vocvgo.jpg',
    alt: 'Technical Quiz - teams engaged in challenging questions',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567303/IMG20240920161405_jai2ha.jpg',
    alt: 'Technical Quiz - students answering technical questions',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567302/IMG20240920130550_jnrx0x.jpg',
    alt: 'Technical Quiz - quiz master conducting competition',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567299/IMG20240920131517_ns7zej.jpg',
    alt: 'Technical Quiz - intense competition moments',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567298/IMG20240920161217_rsjrnl.jpg',
    alt: 'Technical Quiz - audience watching quiz rounds',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567298/IMG_5907_dviguq.jpg',
    alt: 'Technical Quiz - prize distribution ceremony',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567297/IMG_5895_uui5ek.jpg',
    alt: 'Technical Quiz - group photo with participants',
    aspectRatio: '16:9'
  }
],
        enabled: true
      },
      {
        id: 3,
        title: "HACKROBO",
        date: "2025-09-19",
        time: "9:00AM onwards",
        description: "2-day long national level hardware hackathon focusing on robotics and embedded systems innovation.",
        venue: "Main Campus",
        prizes: "Rs. 50,000",
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
        gallery: [
          {
            url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1763050570/WhatsApp_Image_2025-11-13_at_21.34.38_4_nj9zvl.jpg',
            alt: 'HACKROBO - hardware hackathon event',
            aspectRatio: '16:9'
          },
          {
            url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1763050570/WhatsApp_Image_2025-11-13_at_21.34.38_3_zewrek.jpg',
            alt: 'HACKROBO - participants working on projects',
            aspectRatio: '16:9'
          },
          {
            url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1763050570/WhatsApp_Image_2025-11-13_at_21.34.37_1_klfpcp.jpg',
            alt: 'HACKROBO - national level hackathon',
            aspectRatio: '16:9'
          }
        ],
        enabled: true
      }
    ],
    seminars: [
      {
        id: 1,
        title: "Satellite Club Talk",
        date: "2025-03-06",
        time: "2:00PM onwards",
        description: "A technical talk hosted by the Satellite Club to explore advancements and opportunities in space technology and satellite communication.",
        venue: "Conclave 1",
        speaker: "Dr. Umesh Shinde",
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
        gallery: [
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759648540/IMG-20250610-WA0050_s5yxl6.jpg',
    alt: 'Satellite Club Talk - expert speaker presenting on satellite technology',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759648540/IMG-20250610-WA0064_rgaesd.jpg',
    alt: 'Satellite Club Talk - audience engaged in technical presentation',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759648539/IMG-20250610-WA0058_cd1nsi.jpg',
    alt: 'Satellite Club Talk - interactive session on space technology',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759648537/IMG-20250610-WA0074_htekww.jpg',
    alt: 'Satellite Club Talk - students learning about satellite systems',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759648536/IMG-20250610-WA0070_zr9gcc.jpg',
    alt: 'Satellite Club Talk - Q&A session with satellite expert',
    aspectRatio: '16:9'
  }
],
        enabled: true
      },
      {
  "id": 2,
  "title": "Spoken Integrity Talk",
  "date": "2025-08-22",
  "time": "3:00 PM - 4:30 PM",
  "description": "A talk on spoken integrity and ethical communication in engineering.",
  "venue": "Conclave 1",
  "speaker": "Prof. Priyesh Raghavan",
  "image": {
    "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1759656278/Talk_22_aug_25_fcmhqw.png",
    "alt": "Spoken Integrity Talk",
    "aspectRatio": "3:4",
    "fallback": "🎤"
  },
  "detailImage": {
    "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1759656278/Talk_22_aug_25_fcmhqw.png",
    "alt": "Spoken Integrity Talk",
    "aspectRatio": "3:4",
    "fallback": "🎤"
  },
  "gallery": [
    {
      "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1764309522/9b1bbdcc-d715-4ade-93e3-4031173376de.png",
      "alt": "Spoken Integrity Talk",
      "aspectRatio": "16:9"
    },
    {
      "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1764309537/cf10be3a-f7ac-4390-b18d-aedfbda05495.png",
      "alt": "Spoken Integrity Talk",
      "aspectRatio": "16:9"
    },
    {
      "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1764309510/9a362b91-7a48-4b5c-b856-482250ad4eef.png",
      "alt": "Spoken Integrity Talk",
      "aspectRatio": "16:9"
    },
    {
      "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1764309529/e3598d6b-f96b-468f-8043-cd008c56b357.png",
      "alt": "Spoken Integrity Talk",
      "aspectRatio": "16:9"
    },
    {
      "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1764309494/WhatsApp_Image_2025-11-28_at_11.25.42_7ae1d504_y9nvsi.jpg",
      "alt": "Spoken Integrity Talk",
      "aspectRatio": "16:9"
    },
    {
      "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1764309490/WhatsApp_Image_2025-11-28_at_11.25.10_32c47f89_hyyzdw.jpg",
      "alt": "Spoken Integrity Talk",
      "aspectRatio": "16:9"
    },
    {
      "url": "https://res.cloudinary.com/djn79ge3m/image/upload/v1764309485/WhatsApp_Image_2025-11-28_at_11.23.44_95428877_neojvg.jpg",
      "alt": "Spoken Integrity Talk",
      "aspectRatio": "16:9"
    }
  ],
  "enabled": true
},
      {
        id: 3,
        title: "Startup Challenges and Breakthrough Talk",
        date: "2025-01-30",
        time: "2:00 PM onwards",
        description: "Discussion on startup challenges and breakthroughs for budding entrepreneurs.",
        venue: "Auditorium",
        speaker: "Industry Entrepreneur",
        image: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759651209/WhatsApp_Image_2025-10-05_at_13.27.54_kzw3ji.jpg',
          alt: 'Startup Challenges and Breakthrough Talk',
          aspectRatio: '3:4',
          fallback: '🎤'
        },
        detailImage: {
          url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759651209/WhatsApp_Image_2025-10-05_at_13.27.54_kzw3ji.jpg',
          alt: 'Startup Challenges and Breakthrough Talk',
          aspectRatio: '3:4',
          fallback: '🎤'
        },
        gallery: [
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759655877/1000085223_1203f8a76b9ebad467d65676137a763c-03_02_2025_19_26_28_c410lc.jpg',
    alt: 'Startup Challenges and Breakthrough - keynote speaker presentation',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759655873/1000085234_56a77fb419f347a8289ccf5d5c378ed2-03_02_2025_18_51_23_jquoj8.jpg',
    alt: 'Startup Challenges and Breakthrough - entrepreneur sharing insights',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759655870/1000085232_2ff2ad58b6f0fd6725b67938c4d2df37-03_02_2025_18_51_23_dw6xlj.jpg',
    alt: 'Startup Challenges and Breakthrough - interactive discussion session',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759655866/1000085229_36969452993d780546b75518fbe2bf17-03_02_2025_19_26_28_xfkrpf.jpg',
    alt: 'Startup Challenges and Breakthrough - audience engagement and Q&A',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759655863/1000085225_65b439b53a923dd1e56e134fab890b86-03_02_2025_18_51_24_wq18xy.jpg',
    alt: 'Startup Challenges and Breakthrough - networking and collaboration',
    aspectRatio: '16:9'
  }
],
        enabled: true
      },
    ],
    IV: [
      {
        id: 1,
        title: "Industrial visit to DIGISAT",
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
        gallery: [
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567960/IMG-20250310-WA0211_wr6hby.jpg',
    alt: 'Industrial visit to DIGISAT - students exploring facility',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567955/IMG-20250310-WA0219_ntvbxs.jpg',
    alt: 'Industrial visit to DIGISAT - group presentation and demonstration',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567953/IMG-20250310-WA0247_cgb8ht.jpg',
    alt: 'Industrial visit to DIGISAT - technical equipment showcase',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567953/IMG-20250310-WA0209_fhdhax.jpg',
    alt: 'Industrial visit to DIGISAT - students observing industrial processes',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567952/IMG-20250310-WA0256_rhrmn9.jpg',
    alt: 'Industrial visit to DIGISAT - facility tour and learning session',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567951/IMG-20250310-WA0265_xrd44d.jpg',
    alt: 'Industrial visit to DIGISAT - interactive industry experience',
    aspectRatio: '16:9'
  },
  {
    url: 'https://res.cloudinary.com/djn79ge3m/image/upload/v1759567950/WhatsApp_Image_2025-03-08_at_08.00.26_hwchyk.jpg',
    alt: 'Industrial visit to DIGISAT - group photo at facility',
    aspectRatio: '16:9'
  }
],
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