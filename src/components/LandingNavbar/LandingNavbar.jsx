import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";


const LandingNavbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 1, x: "-100%" },
    };
  return (
    <motion.button
      onClick={() => setOpenMenu(!openMenu)}
      drag
      dragConstraints={{
        top: -5,
        left: -5,
        right: 5,
        bottom: 5,
      }}
          dragElastic
          className="absolute right-5 top-5 z-10"
    >
      {openMenu ? (
        <>
          <AiOutlineCloseCircle size={25} color="red" className=" rounded-full absolute right-0"/>
          <div className="bg-[#171717] rounded-md p-2 m-2 flex flex-col items-start">
            <p className="flex hover:text-white">Login</p>
            <p className="flex hover:text-white">Sign Up</p>
          </div>
        </>
      ) : (
        <>
          <AiOutlineMenu size={25} color="blue" className=" rounded-full" />
        </>
      )}
    </motion.button>
  );
};

export default LandingNavbar;
