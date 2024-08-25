import React from 'react'
import play from '../../assets/play.jpg'
import gg from '../../assets/gg.webp'
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={gg} alt="" className='about-img' />
            
        </div>
        <div className='about-right'>

            <h2>ABOUT ASPCA</h2>
            <h3>We Are Their Voice</h3>
            <p>The ASPCA® (American Society for the Prevention of Cruelty to Animals®) has been at the forefront of animal rescue and protection since our founding as the first animal welfare organization in North America in 1866. For more than 150 years, we have been the leading voice in animal welfare, bringing the critical protection of animals to the forefront of society.</p>
            <p>We’ve led the way in fighting cruelty, rescuing and securing adoptions for animals in need, and driving significant legislative change that protects their lives and welfare—ultimately transforming how Americans value and care for animals.</p>
            <p>The modern challenges facing animals are wide-ranging and complex, but we tackle these challenges head-on and in innovative ways, including providing vital veterinary care, responding to disasters, pioneering adoption and behavioral rehabilitation programs, conducting critical animal welfare research, training law enforcement and shelter professionals, and advocating for more effective laws. We also partner with and support shelters, veterinarians, and others who share our commitment to a safer, more compassionate world for animals.</p>
            <p>Rather than directly operating a network of shelters, our role as a well-established national organization—and as envisioned by our founder, Henry Bergh—is to collaborate with and offer training and support to hundreds of local agencies, including shelters, rescues, clinics, and others committed to addressing their communities' needs. This position enables us to advance animal welfare innovations and respond promptly to animal crises throughout the country.</p>
            <p>Every year, our hands-on work directly impacts hundreds of thousands of animals, with our lasting solutions benefiting millions more. Join us in creating a brighter future for animals. Together, we can make a meaningful difference in their lives.</p>
            <p>Explore an interactive map showcasing key aspects of our ASPCA programs and collaborations from the past five years dedicated to helping vulnerable animals survive and thrive across the country. You can also read our latest Annual Report for highlights of our 2022 efforts and impact.</p>

        </div>
    </div>
  )
}
export default About