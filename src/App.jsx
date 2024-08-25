import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Latest from './components/latest/Latest'
import Diff from './components/Diff/Diff'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Latest/>
      <div className="container">
        <Diff/>
      </div>
      
      <Contact/>
    </div>
  )
}

export default App