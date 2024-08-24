import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Latest from './components/latest/Latest'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Latest/>
    </div>
  )
}

export default App