import React from 'react'
import './ResearchPaperCardHome.css'
import logo from '../../assests/logo.png'
const ResearchPaperCardHome = () => { 
    return (
        <div className="researchPaperContainerUsedHome">
            <div className="researchPaperContentUsedHome">
                <div className="researchCardImageHome">
                    <img src={logo} alt="" className="collegeImage h-16 md:h-20 " />
                </div>
                <div className="researchCardDetailsHome">
                    <div className="researchCardNameHome text-base lg:text-lg">
                        <h1 className="researchCardNameTextHome">Machine Learning Model</h1>
                    </div>
                    <div className="researchCardDetailsHome">
                        <h1 className="researchCardDetailsTextHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, harum.</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResearchPaperCardHome