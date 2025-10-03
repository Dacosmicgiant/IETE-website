import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { COLORS } from './constants/colors'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
const Events = lazy(() => import('./pages/Events'))
const EventDetail = lazy(() => import('./pages/EventDetail'))
const EventCategory = lazy(() => import('./pages/EventCategory'))
const Committee = lazy(() => import('./pages/Committee'))
const SSC = lazy(() => import('./pages/SSC'))
// import SSC from './pages/SSC'

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <div className={`min-h-screen ${COLORS.primary.bg}`}>
        <ScrollToTop />
        <Header />
        <main>
          <Suspense fallback={<div className="py-24 text-center text-slate-400">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/ssc" element={<SSC />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:type" element={<EventCategory />} />
              <Route path="/events/:type/:id" element={<EventDetail />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App