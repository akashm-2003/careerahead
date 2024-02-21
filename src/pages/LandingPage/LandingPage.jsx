import React from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import LandingFeatureCard from "../../components/LandingFeatureCard/LandingFeatureCard";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../../utils/motion";
import SectionWrapper from "../../utils/SectionWrapper";
import SplineGlobe from "../../components/Globe/Globe";
import LandingAbout from "../../components/LandingAbout/LandingAbout";

const LandingPage = () => {
  return (
    <>
      <div>
        <LandingNavbar />
        <VideoBackground />
      </div>
      <div className="flex lg:flex-row sm:flex-col media items-center justify-between mt-10 mb-5">
        <LandingFeatureCard title="Search Universities" index={1} />
        <LandingFeatureCard title="Browse Professors" index={2} />
        <LandingFeatureCard title="Research Papers" index={3} />
      </div>
      <div className="flex lg:flex-row sm:flex-col media items-center justify-between w-screen mt-5 mb-10">
        <div
          className="overflow-hidden flex"
          style={{ height: "400px", minWidth: "50%" }}
        >
          <SplineGlobe
            sceneUrl="https://prod.spline.design/VrCiHslCl-fXoSrw/scene.splinecode"
            // canvasHeight="100%"
          />
        </div>
        <LandingAbout />
      </div>
    </>
  );
};

export default LandingPage;
