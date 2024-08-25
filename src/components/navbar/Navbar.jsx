import React from 'react'
import './Navbar.css'
import logo from '../../assets/ASPCA-Logo.webp'
const Navbar = () => {
  /*const[Sticky, setSticky]=useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);*/ 
  return (
    <nav className='container dark nav' >
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