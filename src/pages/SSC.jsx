import React from 'react';
import { COLORS } from '../constants/colors';

const SSC = () => {
  const coreMembers = [
    {
      name: "Vansh Katkar",
      position: "Head of SSC and Joint Hardware Lead",
      image: "https://res.cloudinary.com/djn79ge3m/image/upload/v1752392789/Vansh_Katkar_kofpjq.jpg"
    },
    {
      name: "Sujal Chavan", 
      position: "Hardware Lead and Joint Non-Technical Lead",
      image: null
    },
    {
      name: "Eshika Sawane",
      position: "Software Lead",
      image: null
    },
    {
      name: "Samruddhi Kadam",
      position: "Joint Software Lead",
      image: null
    },
    {
      name: "Devika Marathe",
      position: "Non-Technical Lead",
      image: null
    }
  ];

  const hardwareTeam = [
    "Siddesh Pawar",
    "Gopika Nair", 
    "Harshada Jadhav",
    "Vriddhi Kokane",
    "Kavali Hardhik"
  ];

  const softwareTeam = [
    "Rajdeep Maity",
    "Jashwitha Bhandary", 
    "Sragvi Chavan"
  ];

  const nonTechnicalTeam = [
    "Arya Bonawake",
    "Aditya Kumar Yadav",
    "Gaurav Palve"
  ];

  return (
    <div className={`min-h-screen ${COLORS.primary.bg} pt-10 px-4 sm:px-6 lg:px-8`}>
      <div className="w-full py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className={`${COLORS.typography.heading.xl} ${COLORS.primary.text} mb-4 sm:mb-6`}>
            Student Satellite Club (SSC)
          </h1>
          <p className={`${COLORS.primary.textMuted} text-lg max-w-3xl mx-auto`}>
            Advancing space technology education and hands-on satellite development
          </p>
        </div>

        {/* About Section with SSC Logo */}
        <div className="mb-12 sm:mb-16">
          <div className={`max-w-6xl mx-auto mb-12 shadow-2xl ${COLORS.effects.roundedLg} bg-blue-800 p-1.5`}>
            <div className={`w-full h-full p-8 sm:p-12 ${COLORS.primary.bgSecondary} ${COLORS.effects.rounded}`}>
              <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
                {/* Text Content */}
                <div className="flex-1 order-2 lg:order-1">
                  <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-8 sm:mb-12 text-center lg:text-left`}>
                    About Student Satellite Club
                  </h2>
                  <div className={`${COLORS.primary.textSecondary} text-base sm:text-lg leading-relaxed space-y-4`}>
                    <p>
                      The Student Satellite Club (SSC) at PCE is a dynamic organization dedicated to 
                      advancing space technology education and hands-on satellite development. Our club 
                      brings together passionate students from various engineering disciplines to work 
                      on cutting-edge space technology projects.
                    </p>
                    <p>
                      We focus on practical learning through hardware development, software programming, 
                      and mission planning. Our members gain valuable experience in satellite design, 
                      ground station operations, and space mission management while contributing to 
                      real-world space technology advancement.
                    </p>
                    <p>
                      Join us to be part of the next generation of space engineers and contribute to 
                      India's growing space technology ecosystem!
                    </p>
                  </div>
                </div>
                
                {/* SSC Logo Placeholder */}
                <div className="flex-1 order-1 lg:order-2 mb-8 lg:mb-0">
                  <div className="relative w-64 h-64 mx-auto bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🛰️</div>
                      <h3 className="font-bold text-lg text-gray-600">SSC Logo</h3>
                      <p className="text-sm text-gray-500">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Members Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-4 sm:mb-6`}>
              Core Members
            </h2>
            <p className={`${COLORS.primary.textMuted} text-lg max-w-3xl mx-auto`}>
              Meet our dedicated core team leading the Student Satellite Club
            </p>
          </div>

          <div className={`max-w-6xl mx-auto mb-12 shadow-2xl ${COLORS.effects.roundedLg} bg-blue-800 p-1.5`}>
            <div className={`w-full h-full p-8 sm:p-12 ${COLORS.primary.bgSecondary} ${COLORS.effects.rounded}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
                {coreMembers.map((member, index) => (
                  <div key={index} className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover} text-center`}>
                    {/* Member Photo */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <span className="text-2xl">👤</span>
                        </div>
                      )}
                    </div>
                    <h3 className={`${COLORS.primary.text} font-bold text-lg mb-2`}>
                      {member.name}
                    </h3>
                    <p className={`${COLORS.accent.primaryText} font-semibold text-sm`}>
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`${COLORS.typography.heading.lg} ${COLORS.primary.text} mb-4 sm:mb-6`}>
              Team Members
            </h2>
            <p className={`${COLORS.primary.textMuted} text-lg max-w-3xl mx-auto`}>
              Our dedicated team members across different specializations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
              {/* Hardware Team */}
              <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover} w-full max-w-sm`}>
                <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center justify-center`}>
                  🛠️ Hardware Team
                </h3>
                <div className="space-y-2">
                  {hardwareTeam.map((member, index) => (
                    <p key={index} className={`${COLORS.primary.textSecondary} text-sm text-center`}>{member}</p>
                  ))}
                </div>
              </div>

              {/* Software Team */}
              <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover} w-full max-w-sm`}>
                <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center justify-center`}>
                  💻 Software Team
                </h3>
                <div className="space-y-2">
                  {softwareTeam.map((member, index) => (
                    <p key={index} className={`${COLORS.primary.textSecondary} text-sm text-center`}>{member}</p>
                  ))}
                </div>
              </div>

              {/* Non-Technical Team */}
              <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover} w-full max-w-sm`}>
                <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center justify-center`}>
                  📋 Non-Technical Team
                </h3>
                <div className="space-y-2">
                  {nonTechnicalTeam.map((member, index) => (
                    <p key={index} className={`${COLORS.primary.textSecondary} text-sm text-center`}>{member}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSC;
