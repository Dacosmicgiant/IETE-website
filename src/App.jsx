import { COLORS } from './constants/colors'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className={`min-h-screen ${COLORS.primary.bg}`}>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App