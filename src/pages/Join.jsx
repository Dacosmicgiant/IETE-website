const Join = () => {
  const membershipTypes = [
    {
      id: 1,
      type: "Student Member",
      price: "₹500",
      duration: "1 Year",
      target: "Current PCE Students",
      benefits: [
        "Access to all technical workshops",
        "Participation in competitions",
        "Industry networking events",
        "Technical resource library",
        "Certificate of membership",
        "Resume building opportunities"
      ],
      popular: true
    },
    {
      id: 2,
      type: "Associate Member",
      price: "₹1,200",
      duration: "1 Year",
      target: "Alumni & Working Professionals",
      benefits: [
        "All student member benefits",
        "Industry expert sessions",
        "Career guidance programs",
        "Professional networking",
        "Alumni connect platform",
        "Continuing education credits"
      ],
      popular: false
    },
    {
      id: 3,
      type: "Life Member",
      price: "₹5,000",
      duration: "Lifetime",
      target: "Committed Professionals",
      benefits: [
        "All membership benefits",
        "Lifetime access to resources",
        "Priority event registration",
        "Mentorship opportunities",
        "Research collaboration",
        "Legacy recognition"
      ],
      popular: false
    }
  ]

  const requirements = [
    {
      category: "Academic Requirements",
      items: [
        "Currently enrolled in PCE (for student membership)",
        "Minimum 60% aggregate in current semester",
        "Good academic standing",
        "No pending disciplinary actions"
      ]
    },
    {
      category: "Documentation",
      items: [
        "Completed application form",
        "Recent passport-size photograph",
        "Academic transcripts/marksheets",
        "Identity proof (Aadhar/PAN)",
        "Fee payment receipt"
      ]
    }
  ]

  const applicationProcess = [
    {
      step: 1,
      title: "Fill Application",
      description: "Complete the online application form with accurate details",
      icon: "📝"
    },
    {
      step: 2,
      title: "Submit Documents",
      description: "Upload required documents and photographs",
      icon: "📄"
    },
    {
      step: 3,
      title: "Pay Fees",
      description: "Complete fee payment through online/offline modes",
      icon: "💳"
    },
    {
      step: 4,
      title: "Review Process",
      description: "Application review by faculty and committee members",
      icon: "🔍"
    },
    {
      step: 5,
      title: "Confirmation",
      description: "Receive membership confirmation and welcome kit",
      icon: "✅"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join IETE-PCE</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Become part of India's leading professional society for Electronics and Telecommunication Engineers
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join IETE-PCE?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlock your potential and accelerate your career with exclusive benefits and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Excellence</h3>
              <p className="text-gray-600">Access to cutting-edge workshops, seminars, and technical resources</p>
            </div>
            
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Network</h3>
              <p className="text-gray-600">Connect with industry experts, alumni, and fellow professionals</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-600">Enhance your skills and advance your career with industry insights</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research Opportunities</h3>
              <p className="text-gray-600">Participate in cutting-edge research and innovation projects</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certification & Recognition</h3>
              <p className="text-gray-600">Gain valuable certifications and professional recognition</p>
            </div>
            
            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Development</h3>
              <p className="text-gray-600">Develop leadership skills through committee positions and events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the membership plan that best fits your needs and career goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTypes.map((plan) => (
              <div key={plan.id} className={`bg-white rounded-lg shadow-lg overflow-hidden ${plan.popular ? 'ring-4 ring-red-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-red-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.type}</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">{plan.price}</div>
                  <div className="text-gray-500 mb-4">{plan.duration}</div>
                  <div className="text-sm text-gray-600 mb-6">{plan.target}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 5-step process to become a member of IETE-PCE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative">
                  <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {step.icon}
                  </div>
                  {index < applicationProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step {step.step}</h3>
                <h4 className="text-md font-semibold text-red-600 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Requirements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ensure you meet these requirements before applying for membership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{req.category}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-900 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards advancing your career in Electronics and Telecommunication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Brochure
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-700">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">📧 Email Support</h4>
                <p className="opacity-90">membership@iete.pce.edu</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📞 Phone Support</h4>
                <p className="opacity-90">+91 9920321421</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🏢 Visit Office</h4>
                <p className="opacity-90">IETE-PCE Office, Room 201, PCE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Join