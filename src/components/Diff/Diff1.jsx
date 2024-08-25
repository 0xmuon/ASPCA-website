import React from 'react'
import './Diff.css'
import diff_2 from '../../assets/index-body-img2.jpg'
import diff_3 from '../../assets/index-body-img3.jpg'
import diff_4 from '../../assets/index-body-img4.png'
const Diff1 = () => {
  return (
    <div className='diff'>
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
      
      </div>
  )
}

export default Diff1