import React from 'react'
import './ResearchPaperCard.css'
import Skeleton from 'react-loading-skeleton'
const ResearchPaperCardSkeleton = () => {
    const width = window.innerWidth
    const count =width > 1024 ? 2 : 3
    return (
        <div class="h-auto  researchPaperCardContainer">

            <div class="group lg:w-[200px] lg:h-[280px] w-[160px] [perspective:1000px] h-[220px] researchPaperCardInnerContainer">
                <div class="relative rounded-xl border-2 border-white h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    <div class="rounded-lg inset-0 flex flex-col h-[70px] lg:h-[90px] items-center justify-center  " style={{ backgroundColor: `#666967`, backgroundSize: "cover" }}>
                        <div className='h-[60px] w-[60px] rounded-full top-6 lg:top-11 relative'>
                            <Skeleton circle={true} height='55px' width='55px' />
                            {/*     <img src={logo} alt="" className='h-full w-full object-cover rounded-full' /> */}
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center mt-5 lg:mt-8'>
                        <h1 className=' text-lg lg:text-2xl'><Skeleton width='5em'/></h1>
                        <h5 className='text-sm lg:text-base'><Skeleton width='7em'/></h5>

                        <h4 className='text-center text-[12px] lg:text-sm px-4 mt-1'><Skeleton width='11em' count={count}  /></h4>

                        <h5 className=' mt-1 mb-1 lg:text-xs' style={{ fontSize: "10px" }}><Skeleton width='7em'/></h5>
                    </div>

                    {/* backface of the card */}
                    <div class="absolute inset-0 rounded-xlx px-3 py-2 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">

                        <div class="flex min-h-full flex-col items-center justify-around">

                            <p className='text-[0.62em] lg:text-xs  overflow-hidden h-[85%] w-full '></p>

                            {/* link mapping to be done here */}

                            
                        </div>
                    </div>
                    {/* backface of the card */}

                </div>

            </div>
        </div>
    )
}

export default ResearchPaperCardSkeleton