import Header from './assets/components/Navbar.jsx'
import './App.css'
import Hero from './assets/components/Hero.jsx'
import CategoryGrid from './assets/components/CategoryGrid.jsx'
import BestSellers from './assets/components/Bestsellers.jsx'
import Contact from './assets/components/Contact.jsx'
import Footer from './assets/components/Footer.jsx'
function App() {
  return (
    <>
      <Header />
      <Hero/>
      <CategoryGrid />
      <BestSellers />
      <Contact />
      <Footer />
    </>
  )
}

export default App