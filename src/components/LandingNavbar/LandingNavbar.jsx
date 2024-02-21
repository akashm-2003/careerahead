import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { menuVariants } from "../../utils/motion";

const LandingNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
      className="absolute right-5 top-5 z-20"
    >
      {openMenu ? (
        <>
          <motion.div
            initial={false}
            animate={openMenu ? "open" : "closed"}
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <AiOutlineCloseCircle
              size={25}
              color="red"
              className=" rounded-full absolute right-0"
            />
          </motion.div>
          <div className="bg-[#ffffff] rounded-md p-2 m-5 flex flex-col items-start">
            <p className="flex hover:text-black p-1">Login</p>
            <p className="flex hover:text-black p-1">Sign Up</p>
          </div>
        </>
      ) : (
        <>
          <motion.div
            initial={false}
            animate={openMenu ? "open" : "closed"}
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <AiOutlineMenu size={25} color="blue" className=" rounded-full" />
          </motion.div>
        </>
      )}
    </motion.button>
  );
};

export default LandingNavbar;

