import { useState } from 'react'
import { COLORS } from '../../constants/colors'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: ["iete.pce@mes.ac.in", "support@iete.pce.edu"],
      description: "Send us an email for any queries"
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 9920321421", "+91 22 65748009"],
      description: "Call us during office hours"
    },
    {
      icon: "📍",
      title: "Address",
      details: ["IETE-PCE Office", "Pillai College of Engineering", "Sector 16, New Panvel", "Navi Mumbai, Maharashtra 410206"],
      description: "Visit our campus office"
    },
    {
      icon: "🕒",
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      description: "Our availability for assistance"
    }
  ]

  const socialLinks = [
    {
      name: "Facebook",
      url: "#",
      icon: "🔵",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "💼",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Instagram",
      url: "#",
      icon: "📸",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "Twitter",
      url: "#",
      icon: "🐦",
      color: "from-cyan-400 to-blue-500"
    }
  ]

  const faqData = [
    {
      question: "How can I become a member of IETE-PCE?",
      answer: "You can become a member by filling out the application form, submitting required documents, and paying the membership fee. Check our membership section for detailed information."
    },
    {
      question: "What events does IETE-PCE organize?",
      answer: "We organize technical workshops, seminars, competitions, industry expert sessions, and networking events throughout the year. Check our Events section for upcoming activities."
    },
    {
      question: "Are the events free for members?",
      answer: "Most events are free for IETE-PCE members. Some specialized workshops may have nominal charges to cover materials and refreshments."
    },
    {
      question: "Can alumni participate in IETE-PCE activities?",
      answer: "Yes! Alumni can become Associate Members and participate in all our activities. We encourage alumni to share their industry experience with current students."
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-purple-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-medium mb-6">
            📬 Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch with IETE-PCE for any queries, suggestions, or collaboration opportunities
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center text-white hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold mb-3">{info.title}</h3>
              <div className="space-y-1 mb-3">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-400 text-sm">{detail}</p>
                ))}
              </div>
              <p className="text-xs text-gray-500">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              ✨ Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="events">Event Information</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Campus Info & Social */}
          <div className="space-y-8">
            {/* Campus Location */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Visit Our Campus</h3>
              
              {/* Map Placeholder */}
              <div className="bg-gray-700/50 rounded-2xl h-48 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-3">🗺️</div>
                  <p className="text-lg font-medium">Interactive Campus Map</p>
                  <p className="text-sm">Pillai College of Engineering</p>
                </div>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">📍</span>
                  <div>
                    <p className="font-medium">IETE-PCE Office</p>
                    <p className="text-sm text-gray-400">Room 201, Second Floor</p>
                    <p className="text-sm text-gray-400">Electronics Department Building</p>
                    <p className="text-sm text-gray-400">Pillai College of Engineering</p>
                    <p className="text-sm text-gray-400">Sector 16, New Panvel</p>
                    <p className="text-sm text-gray-400">Navi Mumbai, Maharashtra 410206</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`bg-gradient-to-r ${social.color} p-4 rounded-xl text-white text-center hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about IETE-PCE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-white">
                <h4 className="text-lg font-bold mb-3">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Don't see your question answered?</p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
              Ask a Question
            </button>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            For urgent matters or time-sensitive queries, contact us directly
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">Student Support</h4>
              <p className="mb-2 text-gray-300">President, IETE-PCE</p>
              <p className="text-lg">📞 +91 9876543210</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">Faculty Advisor</h4>
              <p className="mb-2 text-gray-300">Dr. Faculty Name</p>
              <p className="text-lg">📞 +91 9876543211</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection