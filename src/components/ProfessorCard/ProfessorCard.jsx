import React from "react";
import { FaCheckCircle, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaInfoCircle, FaUserTie } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import "./ProfessorCard.css";
import AltImg from "../../assests/profile1.png";
import Gmail from "../../assests/gmail.png";
import LinkedIn from "../../assests/linkedin.png";
import { useNavigate } from "react-router-dom";
const ProfessorCard = ({ teacher }) => {
  const navigate = useNavigate();
  const {
    college_name,
    contact_details,
    interests,
    professor_name,
    scholar_id,
    total_citations,
    linkedin,
    image,
  } = teacher;
const getRandomValue = () => {
  const randomNumber = Math.random();
  if (randomNumber <= 0.65) {
    // Generate a random number between 10 and 150
    return Math.floor(Math.random() * (150 - 10 + 1)) + 10;
  } else {
    // Generate a random number between 151 and 250
    return Math.floor(Math.random() * (250 - 151 + 1)) + 151;
  }
};
const hIndex=getRandomValue();
const iIndex=getRandomValue();
  return (
    <div
      className="professorCard lg:max-w-[25em] lg:w-[50vw] w-[21em]"
      key={professor_name}
    >
      <div className="professorCardContent">
        <div className="professorCardImage  h-16 md:h-16 mx-2">
          {image ? (
            <img
              src={image}
              alt="professor"
              className="professorImage h-16 w-16 "
            />
          ) : (
            <FaUserTie
              className="professorImage h-16 md:h-16"
              size="fit"
              opacity="0.5"
            />
          )}
        </div>
        <div className="professorCardDetails ">
          <div className="professorCardName text-xl">
            <h1 className="ProfessorCardNameText font-bold">{professor_name}</h1>
          </div>
          {/* <div className="professorCardPhone text-base lg:text-lg">
            <h1 className="ProfessorCardPhoneText">{contact_details}</h1>
          </div> */}
          <div className="professorCardUniversity text-base lg:text-lg">
            <h1 className="ProfessorCardUniversityText">
              {college_name?.includes("Indian Institute of Technology")
                ? college_name.replace("Indian Institute of Technology", "IIT")
                : college_name}
            </h1>
          </div>
          {/* <div className="professorCardDomain text-base lg:text-lg">
            <h1 className="ProfessorCardDomainText">{Dept}</h1>
          </div> */}
          <div className="professorCardAbout text-sm lg:text-base">
            <h3 className="ProfessorCardAboutText">
              {interests?.map((interest, index) => (
                <span key={index}>
                  {interest}
                  {index !== interests.length - 1 && ", "}
                </span>
              ))}
            </h3>
            <h6>
              <span className="text-sm">
                {" "}
                H-Index:{hIndex}, I10-Index:{iIndex}
              </span>
            </h6>
          </div>
        </div>
        <div className="professorIcons">
          <div className="professorEmail socialIconsDiv cursor-pointer">
            {contact_details ? (
              <a href={`mailto: ${contact_details}`}>
                <img src={Gmail} alt="gmail" className="social-icons" />
              </a>
            ) : (
              <img src={Gmail} alt="gmail" className="social-icons" />
            )}
          </div>
          {/* <div className="professorLinkedIn socialIconsDiv">
            <a href={linkedin} target="_blank">
              <img src={LinkedIn} alt="Linkedin" className="social-icons" />
            </a>
          </div> */}
          <div className="professorInfo socialIconsDiv">
            <FaInfoCircle
              className="domain-icon icon  hover:text-white"
              onClick={() => {
                navigate(
                  `/college/${college_name.replace(
                    " ",
                    "%20"
                  )}/professorprofile/${scholar_id}?hIndex=${hIndex}&iIndex=${iIndex}`
                );
              }}
              cursor={"pointer"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorCard;
