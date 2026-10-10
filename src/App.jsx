import NavigationBar from './components/NavigationBar.jsx'
import Hero from './components/Hero.jsx'
import Accolades from './components/Accolades.jsx'
import PracticeAreas from './components/PracticeAreas.jsx'
import AboutUs from './components/AboutUs.jsx'
import People from './components/People.jsx'
import InsightsEvents from './components/InsightsEvents.jsx'
import Careers from './components/Careers.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="w-full min-w-0 bg-white flex flex-col justify-start items-stretch overflow-x-clip">
      <NavigationBar />
      <Hero />
      <Accolades />
      <PracticeAreas />
      <AboutUs />
      <People />
      <InsightsEvents />
      <Careers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
