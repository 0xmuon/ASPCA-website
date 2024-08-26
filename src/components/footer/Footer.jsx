import React from 'react'
import './Footer.css'

import rating from '../../assets/four-star-rating-badge-full-color-800.png'
import subaru from '../../assets/subaru.webp'
import aphi from '../../assets/aphi.webp'
const Footer = () => {
  return (
    <div className='footer'>
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
      <a href='https://www.charitynavigator.org/ein/13-1623829'>
      <img src={rating} alt="" className='footer-logo' />
      </a>
      <hr></hr>
      <h3 className='partners'>Our Partners</h3>
      <a href='https://www.aspcapetinsurance.com/'>
      <img src={aphi} alt="" className='footer-logo'/></a>
      <a href='https://www.subaru.com/about/our-company.html'>
      <img src={subaru} alt="" className='footer-logo'/></a>
      <p>Underwritten by Independence American Insurance Company</p>
    </div>
  )
}

export default Footer