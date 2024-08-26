import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Latest from './components/latest/Latest'
import Diff1 from './components/Diff/Diff1'
import Diff2 from './components/Diff/Diff2'
import Contact from './components/contact/Contact'
import About from './components/About/About'
import Footer from './components/footer/Footer'
import Heading from './components/Heading/Heading'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Heading subHeading='Whats Happening!' Heading='The Latest'/>
      <Latest/>
      <div className="container">
        <Heading subHeading='Contribute For Difference' Heading='Donate Now!'/>
        <Diff1 />
        <Diff2 />
      </div>
      <Heading subHeading='We Are Their Voice' Heading='About ASPCA'/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App