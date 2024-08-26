import React from 'react'
import './Heading.css'
const Heading = ({subHeading,Heading}) => {
  return (
    <div className='heading'>
        <p>{subHeading}</p>
        <h2>{Heading}</h2>
    </div>
  )
}

export default Heading