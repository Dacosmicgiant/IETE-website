const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About IETE-PCE</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Advancing Science and Technology in Electronics, Telecommunication & Information Technology
            </p>
          </div>
        </div>
      </section>

      {/* About IETE Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About IETE</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading 
                recognised professional society devoted to the advancement of Science and Technology of 
                Electronics, Telecommunication & IT. Founded in 1953.
              </p>
              <p className="text-gray-600 mb-6">
                IETE is the National Apex Professional body of Electronics and Telecommunication, Computer 
                Science and IT Professionals. It serves more than 1,25,000 members through various 63 Centres, 
                spread all over India and abroad.
              </p>
              <p className="text-gray-600">
                The Institution provides leadership in Scientific and Technical areas of direct importance 
                to the national development and economy. Government of India has recognised IETE as a 
                Scientific and Industrial Research Organization (SIRO).
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Founded:</span>
                  <span className="font-semibold">1953</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Members:</span>
                  <span className="font-semibold">1,25,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Centres:</span>
                  <span className="font-semibold">63+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recognition:</span>
                  <span className="font-semibold">SIRO Status</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About IETE-PCE Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IETE-PCE Chapter</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The IETE-PCE chapter at Pillai College of Engineering serves as a bridge between 
              academic learning and professional excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-900 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                Promoting academic excellence through workshops, seminars, and technical competitions 
                that enhance students' understanding of core subjects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-red-600 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Connect</h3>
              <p className="text-gray-600">
                Bridging the gap between academia and industry through guest lectures, industrial 
                visits, and internship opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-900 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Innovation</h3>
              <p className="text-gray-600">
                Encouraging research activities and innovative projects that contribute to 
                technological advancement and scientific progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Objectives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Organize technical workshops and hands-on training sessions
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Conduct seminars on emerging technologies
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Promote project-based learning and innovation
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Facilitate participation in national competitions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Growth</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Provide industry exposure and networking opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Organize career guidance sessions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Facilitate professional certifications
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Build leadership and communication skills
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg opacity-90 mb-6">
                To be the leading student organization in advancing Electronics, Telecommunication, 
                and IT education, fostering innovation, and creating technology leaders for the future.
              </p>
              <p className="opacity-90">
                We envision a community of technically competent and ethically strong engineers 
                who contribute significantly to technological advancement and societal development.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg opacity-90 mb-6">
                To provide practical learning opportunities, promote research and development, 
                organize technical events, and bridge the gap between academic knowledge and 
                industry requirements.
              </p>
              <p className="opacity-90">
                We are committed to nurturing technical excellence, professional ethics, and 
                leadership qualities in our members through various educational and developmental activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About