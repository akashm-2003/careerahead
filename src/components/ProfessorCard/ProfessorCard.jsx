import React from "react";
import { FaCheckCircle, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaInfoCircle,FaUserTie } from "react-icons/fa";
import "./ProfessorCard.css";
import AltImg from '../../assests/profile1.png';
import Gmail from '../../assests/gmail.png';
import LinkedIn from '../../assests/linkedin.png';

const ProfessorCard = ({College,Dept,Name,contact_number,email,image,linkedin,education}) => {
    return (
        <div className="professorCard lg:max-w-[25em] lg:w-[50vw] w-[21em] ">
            <div className="professorCardContent">
                <div className="professorCardImage  h-16 md:h-16 mx-2">
                    {image?<img src={image} alt="professor" className="professorImage h-16 w-16 " />:
                    <FaUserTie className="professorImage h-16 md:h-16" size='fit'/>}
                </div>
                <div className="professorCardDetails ">
                    <div className="professorCardName text-xl">
                        <h1 className="ProfessorCardNameText">{Name}</h1>
                    </div>
                    <div className="professorCardPhone text-base lg:text-lg">
                        <h1 className="ProfessorCardPhoneText">{contact_number}</h1>
                    </div>
                    <div className="professorCardUniversity text-base lg:text-lg">
                        <h1 className="ProfessorCardUniversityText">{College}</h1>
                    </div>
                    <div className="professorCardDomain text-base lg:text-lg">
                        <h1 className="ProfessorCardDomainText">{Dept}</h1>
                    </div>
                    {/* <div className="professorCardAbout text-sm lg:text-base">
                        <h1 className="ProfessorCardAboutText">{education.slice(0,20)}</h1>
                    </div> */}
                </div>
                <div className="professorIcons">
                    <div className="professorEmail socialIconsDiv">
                        {email?<a href ={`mailto: ${email}`}><img src={Gmail} alt="gmail" className="social-icons" /></a>:<img src={Gmail} alt="gmail" className="social-icons" />}
                    </div>
                    <div className="professorLinkedIn socialIconsDiv">
                    <a href={linkedin} target="_blank"><img src={LinkedIn} alt="Linkedin" className="social-icons" /></a>
                    </div>
                    <div className="professorInfo socialIconsDiv">
                        <FaInfoCircle className="domain-icon icon  hover:text-white" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProfessorCard;
