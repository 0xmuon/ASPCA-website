import React from 'react'
import './Diff.css'
import diff_2 from '../../assets/index-body-img2.jpg'
import diff_3 from '../../assets/index-body-img3.jpg'
import diff_4 from '../../assets/index-body-img4.png'
import diff_5 from '../../assets/index-body-img5.jpg'
import diff_6 from '../../assets/index-body-img6.jpg'
import diff_7 from '../../assets/index-body-img7.jpg'
const Diff = () => {
  return (
    <div className='diff'>
      <h1>FEATURED HIGHLIGHTS</h1>
      
          <div className='diffeach'>
            <a href='donate.html'>
                <img  src={diff_2} alt="" />
                <div className="caption">
                  <p>Have you seen us on TV? For 63 cents a day, you'll rescue mistreated animals. Donate Today</p>
                </div>
            </a>
            </div>
          <div className='diffeach'>
            <a href='donate.html'>
              <img src={diff_3} alt="" />
              <div className="caption"><p>Have you seen us on TV? For 63 cents a day, you'll rescue mistreated animals. Donate Today</p></div>
            </a>
          </div>
          <div className='diffeach'>
            <a href='donate.html'>
              <img src={diff_4} alt="" />
              <div className="caption"><p>Have you seen us on TV? For 63 cents a day, you'll rescue mistreated animals. Donate Today</p></div>
            </a>
          </div>
      
      <div className='row'>
          <div className='diffeach'>
            <a href='donate.html'>
              <img src={diff_5} alt="" />
              <div className="caption"><p>Have you seen us on TV? For 63 cents a day, you'll rescue mistreated animals. Donate Today</p></div>
            </a>
          </div>
          <div className='diffeach'>
            <a href='donate.html'>
              <img src={diff_6} alt="" />
              <div className="caption"><p>Have you seen us on TV? For 63 cents a day, you'll rescue mistreated animals. Donate Today</p></div>
            </a>
          </div>
          <div className='diffeach'>
            <a href='donate.html'>
              <img src={diff_7} alt="" />
              <div className="caption"><p>Have you seen us on TV? For 63 cents a day, you'll rescue mistreated animals. Donate Today</p></div>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Diff