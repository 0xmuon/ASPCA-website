import React from 'react'
import './Navbar.css'
import logo from '../../assets/ASPCA-Logo.webp'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
          <li>About Us</li>
          <li>Adopt</li>
          <li>NYC</li>
          <li>News</li>
          <li><button className='btn'>DONATE</button></li>
        </ul>
    </nav>
  )
}

export default Navbar