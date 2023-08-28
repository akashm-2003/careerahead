import React from 'react'
import './CollegeCard.css' 
import logo from '../../assests/logo.png'
import { FaUniversity } from 'react-icons/fa'
const CollegeCard = ({image,location,name}) => {
  return (
    <div className='collegeMainContainer'>
      <div className="collegeContainer">
        <div className="collegeImageContainer ">
          {image?<img src={image} alt="" className="collegeImage h-20 w-20 md:w-24 md:h-24 " />:
          <FaUniversity className="collegeImage h-20 md:h-24" size='fit'/>}
        </div>
        <div className="collegeDetailsContainer h-16 md:h-20 min-w-[8em] max-w-[12em]  px-1 flex justify-center items-center">
          <div className="collegeName">
            <h1 className="collegeNameText text-center">{name}</h1>
          </div>
          <div className="collegeLocation">
            <h1 className="collegeLocationText">{location}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollegeCard