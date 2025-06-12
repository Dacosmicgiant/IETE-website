import { Link } from 'react-router-dom'
import { COLORS } from '../constants/colors'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="bg-white text-blue-900 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <div className="text-4xl font-bold">I</div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IETE-PCE
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              The Institution of Electronics and Telecommunication Engineers
            </p>
            <p className="text-lg mb-10 max-w-4xl mx-auto opacity-90">
              Advancing Science and Technology in Electronics, Telecommunication & IT since 1953. 
              Shaping the future of technology at Pillai College of Engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Join IETE-PCE
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About IETE-PCE</h2>
              <p className="text-lg text-gray-600 mb-6">
                IETE-PCE is the student chapter of the Institution of Electronics and Telecommunication Engineers 
                at Pillai College of Engineering. We are dedicated to advancing knowledge and fostering innovation 
                in electronics, telecommunications, and information technology.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to provide a platform for students to enhance their technical skills, 
                participate in cutting-edge research, and connect with industry professionals.
              </p>
              <Link
                to="/about"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Read More
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-900 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                To be the leading student organization in advancing Electronics, Telecommunication, 
                and IT education, fostering innovation, and creating technology leaders for the future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">
                To provide practical learning opportunities, promote research and development, 
                organize technical events, and bridge the gap between academic knowledge and industry requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest workshops, seminars, and technical competitions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-blue-900 p-4">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">25</div>
                  <div className="text-sm">JUN 2025</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">IoT Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Hands-on workshop on Internet of Things applications and implementation
                </p>
                <div className="text-red-600 font-semibold">Register Now</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-red-600 p-4">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">30</div>
                  <div className="text-sm">JUN 2025</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Symposium</h3>
                <p className="text-gray-600 mb-4">
                  Annual technical symposium featuring industry experts and research presentations
                </p>
                <div className="text-red-600 font-semibold">Register Now</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-blue-900 p-4">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">05</div>
                  <div className="text-sm">JUL 2025</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Project Competition</h3>
                <p className="text-gray-600 mb-4">
                  Showcase your innovative projects and compete with fellow students
                </p>
                <div className="text-red-600 font-semibold">Register Now</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/events"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Committee Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Committee</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated team leading IETE-PCE forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                PR
              </div>
              <h3 className="text-lg font-bold text-gray-900">President</h3>
              <p className="text-gray-600">Leading IETE-PCE</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                VP
              </div>
              <h3 className="text-lg font-bold text-gray-900">Vice President</h3>
              <p className="text-gray-600">Supporting Leadership</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                SC
              </div>
              <h3 className="text-lg font-bold text-gray-900">Secretary</h3>
              <p className="text-gray-600">Managing Operations</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                TR
              </div>
              <h3 className="text-lg font-bold text-gray-900">Treasurer</h3>
              <p className="text-gray-600">Financial Management</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/committee"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Meet Full Committee
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Home