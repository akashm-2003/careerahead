import React from 'react'
import './ProfessorCard.css';
import Skeleton from 'react-loading-skeleton';
import { FaInfoCircle } from 'react-icons/fa';
import Gmail from '../../assests/gmail.png';
import LinkedIn from '../../assests/linkedin.png';
const ResearcherCardSkeleton = () => {
    return (
        <div className="professorCard lg:max-w-[25em] lg:w-[50vw] w-[21em]">
            <div className="professorCardContent">
                <div className="professorCardImage  h-16 md:h-16 mx-2" >
                    <Skeleton circle={true} height='5em' width='5em' />
                </div>
                <div className="professorCardDetails">
                    <div className="professorCardName w-full text-xl">
                        <h1 className="ProfessorCardNameText"><Skeleton width='70%' /></h1>
                    </div>
                    <div className="professorCardUniversity w-full text-base lg:text-lg">
                        <h1 className="ProfessorCardUniversityText"><Skeleton width='90%' /></h1>
                    </div>
                    <div className="professorCardDomain w-full text-base lg:text-lg">
                        <h1 className="ProfessorCardDomainText"><Skeleton width='80%' /></h1>
                    </div>
                    <div className="professorCardAbout w-full text-sm lg:text-base">
                        <h1 className="ProfessorCardAboutText"><Skeleton width='100%' height='0.75em' count={2} /> </h1>
                    </div>
                </div>
                <div className="professorIcons">
                    <div className="professorEmail socialIconsDiv">
                        <Skeleton circle={true} height='1.75em' width='1.75em' />
                        {/* <img src={Gmail} alt="gmail" className="social-icons" /> */}
                    </div>
                    <div className="professorLinkedIn socialIconsDiv">
                        <Skeleton circle={true} height='1.75em' width='1.75em' />

                        {/* <img src={LinkedIn} alt="Linkedin" className="social-icons" /> */}
                    </div>
                    <div className="professorInfo socialIconsDiv">
                        <Skeleton circle={true} height='1.75em' width='1.75em' />

                        {/* <FaInfoCircle  className="domain-icon icon  hover:text-white" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearcherCardSkeleton