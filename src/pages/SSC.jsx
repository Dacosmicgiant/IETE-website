import React from 'react';
import { Image } from '../components/ui/Image';
import { COLORS } from '../constants/colors';

const SSC = () => {
  const coreMembers = [
    {
      name: "Vansh Katkar",
      position: "Head of SSC and Joint Hardware Lead",
      image: { url: "https://via.placeholder.com/300x300?text=VK", alt: "Vansh Katkar" }
    },
    {
      name: "Sujal Chavan", 
      position: "Hardware Lead and Joint Non-Technical Lead",
      image: { url: "https://via.placeholder.com/300x300?text=SC", alt: "Sujal Chavan" }
    },
    {
      name: "Eshika Sawane",
      position: "Software Lead", 
      image: { url: "https://via.placeholder.com/300x300?text=ES", alt: "Eshika Sawane" }
    },
    {
      name: "Samruddhi Kadam",
      position: "Joint Software Lead",
      image: { url: "https://via.placeholder.com/300x300?text=SK", alt: "Samruddhi Kadam" }
    },
    {
      name: "Devika Marathe",
      position: "Non-Technical Lead",
      image: { url: "https://via.placeholder.com/300x300?text=DM", alt: "Devika Marathe" }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Student Satellite Club (SSC)
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Advancing space technology education and hands-on satellite development
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">About Student Satellite Club</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                The Student Satellite Club (SSC) at PCE is a dynamic organization dedicated to 
                advancing space technology education and hands-on satellite development. Our club 
                brings together passionate students from various engineering disciplines to work 
                on cutting-edge space technology projects.
              </p>
              <p className="mb-6">
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
        </div>
      </div>

      {/* Core Members Section */}
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Core Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {coreMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    imageData={{
                      url: member.image.url,
                      alt: member.image.alt,
                      aspectRatio: "1:1",
                      fallback: "👤"
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Team Members</h2>
          
          {/* Hardware Team */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Hardware Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {hardwareTeam.map((member, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-300">
                  <p className="font-medium text-gray-800">{member}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Software Team */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 text-center">Software Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {softwareTeam.map((member, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4 text-center hover:bg-green-100 transition-colors duration-300">
                  <p className="font-medium text-gray-800">{member}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Technical Team */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-600 mb-6 text-center">Non-Technical Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {nonTechnicalTeam.map((member, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-4 text-center hover:bg-purple-100 transition-colors duration-300">
                  <p className="font-medium text-gray-800">{member}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSC;
