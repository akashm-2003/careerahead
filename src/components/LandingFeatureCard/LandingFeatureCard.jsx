import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { slideIn, fadeIn } from "../../utils/motion";
import "./LandingFeatureCard.css";

const LandingFeatureCard = ({ title, icon, index }) => {
  return (
    <Tilt className="w-[20em] box-content m-2">
      <motion.div
        className="flex flex-col justify-center items-center green-pink-gradient p-1 rounded-[20px] glassy-card "
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        //   variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary flex justify-center items-center flex-col glassy-card"
        >
          <img src={icon} alt="img" className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center shadow-teal-50">
            {title}
          </h3>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            distinctio cum saepe quia veniam fuga dignissimos, veritatis quaerat
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default LandingFeatureCard;
