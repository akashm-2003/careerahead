import React from 'react';
import { useState, useEffect } from "react";
import './LandingIntro.css';
import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import SectionWrapper from '../../utils/SectionWrapper';

const LandingIntro = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Research", "Summarize", "Comprehend"];
    const period = 1000;

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
    <div className='flex items-center justify-center flex-col'>
      <motion.p
        variants={textVariant()}
        animate='show'
        initial='hidden'
        className=" flex text-md text-white mt-2 mb-4"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sunt
        pariatur optio accusantium dolor. Distinctio labore tenetur id illum
        veniam.
      </motion.p>
      <span
        className="txt-rotate"
        dataPeriod="1000"
        data-rotate='[ "Research", "Summarize", "Comprehend" ]'
      >
        <span className="landing-intro-wrap text-[#fff] font-bold">{text}</span>
      </span>
    </div>
  );
}

export default SectionWrapper(LandingIntro, 'landing-intro');