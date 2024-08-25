import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.jpg'
import mail from '../../assets/mail.jpg'
import call from '../../assets/call.jpg'
import loc from '../../assets/loc.jpg'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a Message <img src={msg}/></h3>
        <p>Feel free to reach out through contact form.</p>
        <ul>
          <li>
          <img src={mail}/>
            contact@aspca.org
          </li>
          <li>
          <img src={call}/>
            +1 412947198321
          </li>
          <li>
          <img src={loc}/>
            Headquarters in New York City(NYC),USA
          </li>
          </ul>
      </div>
      <div className='contact-col'>
        <form action="">
          <label htmlFor="">Your Name*</label>
          <input type="text" name="name" placeholder="Enter Your Name" required/>
          <label htmlFor="">Email Address*</label>
          <input type="email" name="email" placeholder="Enter Your Email" required/>
          <label htmlFor="">Phone Number(optional)</label>
          <input type="tel" name="phone" placeholder="Enter Your Phone Number"/>
          <label htmlFor="">Message*</label>
          <textarea name="message" rows='6' placeholder='Enter your message here' required/>
          <button type='submit' className='btn dark-btn'>Submit Now</button>

        </form>
        <span>sending...</span>
        <p>Please note that we will respond to your message within 24 hours.</p>
        <p>By providing my mobile number, I agree to receive 2-4 text messages per month from the ASPCA, which may include requests for charitable donations. Text STOP to opt-out, HELP for more info.</p>
      </div>
      
    </div>
  )
}

export default Contact