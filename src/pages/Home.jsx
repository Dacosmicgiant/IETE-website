import { useState } from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import EventsSection from '../components/Home/EventsSection'
import CommitteeSection from '../components/Home/CommitteeSection'
import FacultySection from '../components/Home/FacultySection'


const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({ firstName: '', lastName: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* Include all other sections */}
      <AboutSection />
      {/* <EventsSection /> */}
      
      <FacultySection />
      <CommitteeSection />
    </div>
  )
}

export default Home