import React from 'react'
import './CollegeCard.css' 
import logo from '../../assests/logo.png' 
const CollegeCard = () => {
  return (
    <div className='collegeMainContainer'>
      <div className="collegeContainer">
        <div className="collegeImageContainer ">
          <img src={logo} alt="" className="collegeImage h-20 md:h-24 " />
        </div>
        <div className="collegeDetailsContainer h-16 md:h-20 w-32 flex justify-center items-center">
          <div className="collegeName">
            <h1 className="collegeNameText ">MIT</h1>
          </div>
          <div className="collegeLocation">
            <h1 className="collegeLocationText">Location</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollegeCard