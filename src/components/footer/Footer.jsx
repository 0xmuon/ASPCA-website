import React from 'react'
import './Footer.css'
import logo from '../../assets/ASPCA-logo.webp'
import rating from '../../assets/four-star-rating-badge-full-color-800.png'
import subaru from '../../assets/subaru.webp'
import aphi from '../../assets/aphi.webp'
const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt="" className='footer-logo' />
      <p>© 2024 American Society for the Prevention of Cruelty to Animals. All rights reserved.</p>
      <p>The ASPCA is a 501(c)(3) non-for-profit organization.</p>
      <ul>
        <li>
          <h6><a href="https://www.aspca.org/about-us/privacy-policy">Privacy Policy </a></h6>
        </li>
        <li>
          <h6><a href="https://www.aspca.org/about-us/legal-information">Legal Information</a></h6>
        </li>
      </ul>
      <img src={rating} alt="" className='footer-logo' />
      
      <hr></hr>
      <h3 className='partners'>Our Partners</h3>
      <img src={aphi} alt="" className='footer-logo'/>
      <img src={subaru} alt="" className='footer-logo'/>
      <p>Underwritten by Independence American Insurance Company</p>
    </div>
  )
}

export default Footer