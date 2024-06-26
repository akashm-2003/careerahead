import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../../utils/motion";
import "./LandingPage.css";
import LandingIntro from "../../components/LandingIntro/LandingIntro";
import LandingAbout from "../../components/LandingAbout/LandingAbout";
import LandingFeatureCard from "../../components/LandingFeatureCard/LandingFeatureCard";
import image from '../../assests/landing-page-intro.jpeg'

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row relative">
        <LandingNavbar />
        <h1 className="absolute left-5 top-5 z-10 text-lg text-white">
          Masters Way
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:h-full ">
        <section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="w-full flex flex-col bg-[#171717] rounded-md lg:flex-row lg:w-1/2 m-1 landing-intro-height"
        >
          <LandingIntro />
        </section>
        <motion.div
          className="w-full flex flex-col bg-[#171717] rounded-md lg:flex-row lg:w-1/2 m-1 lg:h-screen"
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
        >
          <img src={image} alt="image" className="bg-cover h-full" />
        </motion.div>
      </div>
      {/* <div
        className="w-full landing-intro-height lg:h-full landing-page-gradient-intro flex items-center justify-center flex-col landing-intro-background"
        variants={zoomIn(0, 0.75)}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-row">
          <LandingNavbar />
          <h1 className="absolute left-5 top-5 text-lg text-white">
            Masters Way
          </h1>
        </div>
        <LandingIntro />
      </div> */}
      <div className="flex flex-col lg:flex-row lg:h-full ">
        <motion.div
          className="w-full flex flex-col bg-[#171717] rounded-md lg:flex-row lg:w-1/2 m-1 lg:h-full"
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
        >
          dfjl
        </motion.div>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="w-full flex flex-col bg-[#171717] rounded-md lg:flex-row lg:w-1/2 m-1 landing-intro-height"
        >
          <LandingAbout />
        </motion.section>
      </div>
      {/* <div className="w-full flex flex-col lg:flex-row lg:h-full landing-intro-height">
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="w-full landing-intro-height flex flex-col bg-[#171717] rounded-md lg:flex-row lg:w-1/2 m-1 lg:h-full"
        >
          <LandingAbout />
        </motion.section>
      </div> */}
      <div
        className="w-full lg:landing-intro-height lg:h-full bg-[#171717] flex items-center justify-center flex-col"
        variants={zoomIn(0, 0.75)}
        initial="hidden"
        animate="show"
      >
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="w-full lg:h-full flex flex-col lg:flex-row justify-center items-center"
        >
          <LandingFeatureCard title="Search Universities" index={1} />
          <LandingFeatureCard title="Browse Professors" index={2} />
          <LandingFeatureCard title="Research Papers" index={3} />
        </motion.section>
      </div>
      <div className="flex bg-[#171717]">Footer</div>
    </div>
  );
};

export default LandingPage;
