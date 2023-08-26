import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../../utils/motion";
import "./LandingPage.css";
import LandingIntro from "../../components/LandingIntro/LandingIntro";
import LandingAbout from "../../components/LandingAbout/LandingAbout";

const LandingPage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <>
      <div
        className="w-full landing-intro-height lg:h-full landing-page-gradient-intro flex items-center justify-center flex-col"
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
      </div>
      <div className="flex flex-col lg:flex-row lg:h-full">
        <motion.div
          className="w-full flex flex-col bg-[#171717] rounded-md lg:flex-row lg:w-1/2 m-1"
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
          className="w-full flex flex-col bg-[#171717] rounded-md lg:flex-row lg:w-1/2 m-1"
        >
          <LandingAbout />
        </motion.section>
      </div>
    </>
  );
};

export default LandingPage;
