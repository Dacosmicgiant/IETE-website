// src/data/imagesData.js

export const IMAGES = {
  // Logo and Branding
  logo: {
    url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1738169958/v1dlwdml8eme3h6eec8z.jpg',
    alt: 'IETE-PCE Logo',
    aspectRatio: '1:1',
    fallback: '🏢'
  },

  // Hero Section
  hero: {
    main: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
      alt: 'IETE-PCE Campus and Innovation',
      aspectRatio: '16:9',
      fallback: '🖼️'
    }
  },

  // About Section
  about: {
    main: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
      alt: 'IETE Institution Building',
      aspectRatio: '4:3',
      fallback: '🖼️'
    }
  },

  // Faculty Photos
  faculty: {
    hod: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Dr. Faculty Name - HOD',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    coordinator: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Dr. Faculty Name - Coordinator',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    coCoordinator: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Prof. Faculty Name - Co-Coordinator',
      aspectRatio: '3:4',
      fallback: '👤'
    }
  },

  // Committee Members
  committee: {
    // Group Photo
    groupPhoto: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
      alt: 'IETE-PCE Committee Team Photo',
      aspectRatio: '16:9',
      fallback: '📸'
    },
    
    // Individual Members
    saniyaMahadik: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Saniya Mahadik - President',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    shravaniMargaj: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Shravani Margaj - Vice President',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    riddhiSamarth: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Riddhi Samarth - Secretary',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    akankshaRakshe: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Akanksha Rakshe - Treasurer',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    nikitaEkunde: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Nikita Ekunde - Publicity Head',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    aditiPatil: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Aditi Patil - Content Head',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    chinmayDabholkar: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Chinmay Dabholkar - Graphics Head',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    aayushGupta: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Aayush Gupta - Technical Head',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    revaPatil: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Reva Patil - Coordinator Nominated Member',
      aspectRatio: '3:4',
      fallback: '👤'
    },
    // Combined photo for remaining members
    combinedNominated: {
      url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222211/3x4_qg9cyd.png',
      alt: 'Pratiksha Chaudhari & Narayan Yadav - Coordinator Nominated Members',
      aspectRatio: '3:4',
      fallback: '👥'
    }
  },

  // Events
  events: {
    // Workshop Events
    workshops: {
      iotDevelopment: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Introduction to IoT Development Workshop',
        aspectRatio: '16:9',
        fallback: '🛠️'
      },
      pcbDesign: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Advanced PCB Design Workshop',
        aspectRatio: '16:9',
        fallback: '🛠️'
      },
      machineLearning: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Machine Learning for Engineers Workshop',
        aspectRatio: '16:9',
        fallback: '🛠️'
      },
      fiveGFundamentals: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: '5G Network Fundamentals Workshop',
        aspectRatio: '16:9',
        fallback: '🛠️'
      }
    },

    // Competition Events
    competitions: {
      circuitDesign: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Circuit Design Challenge',
        aspectRatio: '16:9',
        fallback: '🏆'
      },
      robotics: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Robotics Championship',
        aspectRatio: '16:9',
        fallback: '🏆'
      },
      hackathon: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Innovation Hackathon',
        aspectRatio: '16:9',
        fallback: '🏆'
      },
      aiChallenge: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'AI Challenge Competition',
        aspectRatio: '16:9',
        fallback: '🏆'
      }
    },

    // Seminar Events
    seminars: {
      quantumComputing: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Future of Quantum Computing Seminar',
        aspectRatio: '16:9',
        fallback: '🎤'
      },
      sustainableElectronics: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Sustainable Electronics Design Seminar',
        aspectRatio: '16:9',
        fallback: '🎤'
      },
      industry4: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Industry 4.0 and IoT Seminar',
        aspectRatio: '16:9',
        fallback: '🎤'
      },
      cybersecurity: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Cybersecurity in Electronics Seminar',
        aspectRatio: '16:9',
        fallback: '🎤'
      }
    },

    // Training Events
    training: {
      communication: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Professional Communication Skills Training',
        aspectRatio: '16:9',
        fallback: '📚'
      },
      projectManagement: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Project Management for Engineers Training',
        aspectRatio: '16:9',
        fallback: '📚'
      },
      researchMethodology: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Research Methodology Workshop Training',
        aspectRatio: '16:9',
        fallback: '📚'
      },
      industryReadiness: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222428/16x9_buhwcj.png',
        alt: 'Industry Readiness Program Training',
        aspectRatio: '16:9',
        fallback: '📚'
      }
    }
  },

  // Event Detail Page Images (Square format for detail pages)
  eventDetails: {
    workshops: {
      iotDevelopment: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'IoT Development Workshop Details',
        aspectRatio: '1:1',
        fallback: '🛠️'
      },
      pcbDesign: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'PCB Design Workshop Details',
        aspectRatio: '1:1',
        fallback: '🛠️'
      },
      machineLearning: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Machine Learning Workshop Details',
        aspectRatio: '1:1',
        fallback: '🛠️'
      },
      fiveGFundamentals: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: '5G Fundamentals Workshop Details',
        aspectRatio: '1:1',
        fallback: '🛠️'
      }
    },
    competitions: {
      circuitDesign: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Circuit Design Challenge Details',
        aspectRatio: '1:1',
        fallback: '🏆'
      },
      robotics: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Robotics Championship Details',
        aspectRatio: '1:1',
        fallback: '🏆'
      },
      hackathon: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Innovation Hackathon Details',
        aspectRatio: '1:1',
        fallback: '🏆'
      },
      aiChallenge: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'AI Challenge Details',
        aspectRatio: '1:1',
        fallback: '🏆'
      }
    },
    seminars: {
      quantumComputing: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Quantum Computing Seminar Details',
        aspectRatio: '1:1',
        fallback: '🎤'
      },
      sustainableElectronics: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Sustainable Electronics Seminar Details',
        aspectRatio: '1:1',
        fallback: '🎤'
      },
      industry4: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Industry 4.0 Seminar Details',
        aspectRatio: '1:1',
        fallback: '🎤'
      },
      cybersecurity: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Cybersecurity Seminar Details',
        aspectRatio: '1:1',
        fallback: '🎤'
      }
    },
    training: {
      communication: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Communication Training Details',
        aspectRatio: '1:1',
        fallback: '📚'
      },
      projectManagement: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Project Management Training Details',
        aspectRatio: '1:1',
        fallback: '📚'
      },
      researchMethodology: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Research Methodology Training Details',
        aspectRatio: '1:1',
        fallback: '📚'
      },
      industryReadiness: {
        url: 'https://res.cloudinary.com/dggl6xbcg/image/upload/v1751222106/1x1_of94b1.png',
        alt: 'Industry Readiness Training Details',
        aspectRatio: '1:1',
        fallback: '📚'
      }
    }
  }
}

// Helper function to get image data by path
export const getImage = (path) => {
  const keys = path.split('.')
  let current = IMAGES
  
  for (const key of keys) {
    if (current[key]) {
      current = current[key]
    } else {
      return null
    }
  }
  
  return current
}

// Helper function to get aspect ratio class
export const getAspectRatioClass = (aspectRatio) => {
  switch (aspectRatio) {
    case '1:1':
      return 'aspect-square'
    case '3:4':
      return 'aspect-[3/4]'
    case '4:3':
      return 'aspect-[4/3]'
    case '16:9':
      return 'aspect-video'
    default:
      return 'aspect-square'
  }
}