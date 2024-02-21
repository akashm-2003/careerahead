import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";
import "./LandingAbout.css";
// import SectionWrapper from '../../utils/SectionWrapper';

const LandingAbout = () => {
  const [counterU, setCounterU] = useState(0);

  useEffect(() => {
    let intervalId;
    const incrementCounter = () => {
      setCounterU((prevCounterU) => prevCounterU + 1);
    };

    intervalId = setInterval(incrementCounter, 1);

    const stopInterval = setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(stopInterval);
    };
  }, []);

  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      // initial="hidden"
      // whileDrag="show"
      className="w-full flex flex-col justify-center items-center lg:h-full box-content"
    >
      <h1 className="flex font-extrabold m-5 text-black  text-3xl">
        Discover why millions of students choose Masters Way to get started with
        their incredible journey -{" "}
      </h1>
      {/* <motion.h1
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        className="flex font-extrabold m-5 text-white text-3xl bg-gradient-to-l from-[#00cea87a] to-[#c061ff91] mb-20"
      >
        From Hello World to the Master
      </motion.h1> */}
      <div className="flex font-bold flex-row w-full justify-between items-center m-5 pl-5 pr-5">
        <div className="flex text-xl text-black gradient-border-text-desc">
          Exposure to {counterU}+ universities
        </div>
        <div className="flex text-xl  text-black gradient-border-text-desc">
          Research of 1000+ Great Professors
        </div>
      </div>
      <div className="flex font-bold flex-row w-full justify-between items-center m-5 pl-5 pr-5">
        <div className="flex text-xl text-black gradient-border-text-desc">
          Summarize research papers
        </div>
        <div className="flex text-xl text-black gradient-border-text-desc">
          Easy to comprehend research
        </div>
      </div>
    </motion.div>
  );
};

export default LandingAbout;
