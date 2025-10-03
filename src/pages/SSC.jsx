import React from 'react';
import { COLORS } from '../constants/colors';

const SSC = () => {
  const coreMembers = [
    {
      name: "Vansh Katkar",
      position: "Head of SSC and Joint Hardware Lead"
    },
    {
      name: "Sujal Chavan", 
      position: "Hardware Lead and Joint Non-Technical Lead"
    },
    {
      name: "Eshika Sawane",
      position: "Software Lead"
    },
    {
      name: "Samruddhi Kadam",
      position: "Joint Software Lead"
    },
    {
      name: "Devika Marathe",
      position: "Non-Technical Lead"
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

        {/* About Section */}
        <div className="mb-12 sm:mb-16">
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
            
            {/* Vansh's Photo */}
            <div className="flex-1 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/djn79ge3m/image/upload/v1752392789/Vansh_Katkar_kofpjq.jpg"
                  alt="Vansh Katkar - Head of SSC"
                  className="w-full h-auto max-w-md mx-auto transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded-lg">
                  <h3 className="font-bold text-lg">Vansh Katkar</h3>
                  <p className="text-sm opacity-90">Head of Student Satellite Club</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {coreMembers.map((member, index) => (
              <div key={index} className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover}`}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {/* Hardware Team */}
            <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover}`}>
              <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center`}>
                🛠️ Hardware Team
              </h3>
              <div className="space-y-2">
                {hardwareTeam.map((member, index) => (
                  <p key={index} className={`${COLORS.primary.textSecondary} text-sm`}>{member}</p>
                ))}
              </div>
            </div>

            {/* Software Team */}
            <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover}`}>
              <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center`}>
                💻 Software Team
              </h3>
              <div className="space-y-2">
                {softwareTeam.map((member, index) => (
                  <p key={index} className={`${COLORS.primary.textSecondary} text-sm`}>{member}</p>
                ))}
              </div>
            </div>

            {/* Non-Technical Team */}
            <div className={`${COLORS.effects.glass} ${COLORS.effects.roundedLg} p-6 ${COLORS.interactive.cardHover}`}>
              <h3 className={`${COLORS.primary.text} font-bold text-lg mb-4 flex items-center`}>
                📋 Non-Technical Team
              </h3>
              <div className="space-y-2">
                {nonTechnicalTeam.map((member, index) => (
                  <p key={index} className={`${COLORS.primary.textSecondary} text-sm`}>{member}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSC;
