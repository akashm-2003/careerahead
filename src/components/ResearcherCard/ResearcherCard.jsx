import React from "react";
import { FaCheckCircle, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import "./ResearcherCard.css";
import AltImg from '../../assests/profile1.png';
import Gmail from '../../assests/gmail.png';
import LinkedIn from '../../assests/linkedin.png';

const TopResearcher = ({ name, university, imgId, domains, classes }) => {
  return (
    <div className={` m-2 lg:w-1/3 md:w-1/2 sm:w-full professor-card-width ${classes}`}>
      <div className="rounded-lg shadow-md flex justify-between p-3 h-32 bg-[#252525] bg-contain">
        <div className="flex items-center">
          <img
            src={imgId || AltImg}
            alt="Profile"
            className="rounded-full border-box border-r-6"
          />
        </div>
        <div className="">
          <div className="flex items-start">
            <h1 className="mr-2 font-bold text-lg text-white">
              {name || "Name of Researcher"}
            </h1>
            <FaCheckCircle className=" mt-1.5 tick-icon circle-tick-icon" />
          </div>
          <div className="flex items-start">
            <h1 className="mr-2 text-sm text-[#a1a0a0]">
              {university || "University"}
            </h1>
            <FaUniversity className=" mt-1 university-icon uni-icon" />
          </div>
          <div className="flex items-start">
            <h1 className="mr-2 text-md text-[#a1a0a0]">
              {domains || "Domains of research"}
            </h1>
            <GiCompass className=" mt-1.5 domain-icon dom-icon " />
          </div>
          <div className="flex items-start">
            <h1 className="mr-2 text-md text-[#a1a0a0]">About</h1>
            {/* <FiExternalLink className=" mt-1.5 domain-icon icon hover:text-white text-gray-700" /> */}
          </div>
        </div>
        <div className="flex items-center flex-col justify-between">
          <img src={Gmail} alt="gmail" className="social-icons" />
          <img src={LinkedIn} alt="Linkedin" className="social-icons" />
          <FaInfoCircle className="domain-icon icon  hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default TopResearcher;