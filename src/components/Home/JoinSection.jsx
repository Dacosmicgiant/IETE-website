import { COLORS } from '../../constants/colors'

const JoinSection = () => {
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

  const whyJoinReasons = [
    {
      icon: "🎓",
      title: "Technical Excellence",
      description: "Access to cutting-edge workshops, seminars, and technical resources",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: "🤝",
      title: "Professional Network",
      description: "Connect with industry experts, alumni, and fellow professionals",
      color: "from-pink-500 to-red-600"
    },
    {
      icon: "📈",
      title: "Career Growth",
      description: "Enhance your skills and advance your career with industry insights",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: "🔬",
      title: "Research Opportunities",
      description: "Participate in cutting-edge research and innovation projects",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: "🏆",
      title: "Certification & Recognition",
      description: "Gain valuable certifications and professional recognition",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: "👨‍💼",
      title: "Leadership Development",
      description: "Develop leadership skills through committee positions and events",
      color: "from-indigo-500 to-purple-600"
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

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
            🚀 Join IETE-PCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Become a Member</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Become part of India's leading professional society for Electronics and Telecommunication Engineers
          </p>
        </div>

        {/* Why Join Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why Join IETE-PCE?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Unlock your potential and accelerate your career with exclusive benefits and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoinReasons.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Membership Plans</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the membership plan that best fits your needs and career goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTypes.map((plan) => (
              <div key={plan.id} className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8 text-white">
                  <h4 className="text-2xl font-bold mb-2">{plan.type}</h4>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400 mb-4">{plan.duration}</div>
                  <div className="text-sm text-gray-500 mb-6">{plan.target}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl hover:shadow-cyan-500/25' 
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Application Process</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple 5-step process to become a member of IETE-PCE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl shadow-xl">
                    {step.icon}
                  </div>
                  {index < applicationProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-600 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Step {step.step}</h4>
                <h5 className="text-md font-semibold text-cyan-400 mb-2">{step.title}</h5>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Membership Requirements</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ensure you meet these requirements before applying for membership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-white">
                <h4 className="text-xl font-bold mb-6">{req.category}</h4>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Take the first step towards advancing your career in Electronics and Telecommunication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
              Apply Now →
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Download Brochure
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <h4 className="text-xl font-bold mb-4">Need Help?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white/5 rounded-2xl p-4">
                <h5 className="font-semibold mb-2">📧 Email Support</h5>
                <p className="text-gray-300">membership@iete.pce.edu</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <h5 className="font-semibold mb-2">📞 Phone Support</h5>
                <p className="text-gray-300">+91 9920321421</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <h5 className="font-semibold mb-2">🏢 Visit Office</h5>
                <p className="text-gray-300">IETE-PCE Office, Room 201, PCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinSection