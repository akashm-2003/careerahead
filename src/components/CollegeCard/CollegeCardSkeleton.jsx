import Skeleton from 'react-loading-skeleton'
import './CollegeCard.css'
import React from 'react'

const CollegeCardSkeleton = () => {
  const width=window.innerWidth
  const circleRadius=width>1024?'5.75em':'4.75em'
  return (
    <div className='collegeMainContainer'>
      <div className="collegeContainer">
        <div className="collegeImageContainer ">
          <Skeleton className='collegeImage ' circle height={circleRadius} width={circleRadius}  />
          {/* <img alt="" className="collegeImage h-20 md:h-24 " /> */}
        </div>  
        <div className="collegeDetailsContainer h-16 md:h-20 w-32 flex justify-center items-center">
          <div className="collegeName">
            <Skeleton width='50px' />
            <h1 className="collegeNameText"></h1>
          </div>
          <div className="collegeLocation">
            <h1 className="collegeLocationText"><Skeleton width='75px'/></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollegeCardSkeleton