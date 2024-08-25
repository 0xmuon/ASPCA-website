import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Latest from './components/latest/Latest'
import Diff1 from './components/Diff/Diff1'
import Diff2 from './components/Diff/Diff2'
import Contact from './components/contact/Contact'
import About from './components/About/About'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Latest/>
      <div className="container">
        <Diff1 />
        <Diff2 />
      </div>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App