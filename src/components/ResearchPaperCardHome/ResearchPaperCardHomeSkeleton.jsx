import React from 'react'
import './ResearchPaperCardHome.css'
import Skeleton from 'react-loading-skeleton'
const ResearchPaperCardHomeSkeleton = () => {
    const width=window.innerWidth
    const circleRadius=width>1024?'5em':'4em'
  return (
    <div className="researchPaperContainerUsedHome">
    <div className="researchPaperContentUsedHome">
        <div className="researchCardImageHome">
            {/* <img src={logo} alt="" className="collegeImage h-16 md:h-20 " /> */}
            <Skeleton className='collegeImage h-[64px] w-10 md:h-20 md:w-20 ' circle height={circleRadius} width={circleRadius}/>
        </div>
        <div className="researchCardDetailsHome">
            <div className="researchCardNameHome text-base lg:text-lg">
                <h1 className="researchCardNameTextHome "><Skeleton width='70%'/></h1>
            </div>
            <div className="researchCardDetailsHome">
                <h1 className="researchCardDetailsTextHome"><Skeleton count={3}  height='12px' width='85%'  /></h1>
            </div>

        </div>
    </div>
</div>
  )
}

export default ResearchPaperCardHomeSkeleton