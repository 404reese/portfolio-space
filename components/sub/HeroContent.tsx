"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        

      <motion.div
  variants={slideInFromLeft(0.5)}
  className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] w-auto h-auto"
>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
    Riddhesh
    Chaudhary 
  </span>
  
</motion.div>



<div className="flex flex-row">
  <motion.div
    variants={slideInFromTop}
    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mr-4"
  >
    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
    <h1 className="Welcome-text text-[13px]">
      Frontend Developer
    </h1>
  </motion.div>
  <motion.div
    variants={slideInFromTop}
    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
  >
    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
    <h1 className="Welcome-text text-[13px]">
      Data Scientist
    </h1>
  </motion.div>
</div>

<motion.p
  variants={slideInFromLeft(0.8)}
  className="text-lg text-gray-400 my-5 max-w-[600px] text-justify"
  style={{ textAlign: "justify" }}
>
I am a passionate and forward-thinking student pursuing bachelor&apos;s degrees in Data science and statistics from IIT Madras and also a B.Tech degree in Artificial Intelligence and Data Science from KJSIT. As I navigate this unique educational journey, I&apos;m fueled by the belief that technology is the driving force behind the future, offering boundless opportunities to transform our world.
</motion.p>

<div className="flex flex-row gap-4"> {/* Adjust the class and gap as needed */}
  <motion.a
    variants={slideInFromLeft(1)}
    className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
    href="http://cv.riddhesh.rf.gd" // Adjust the URL as needed
  >
    CV
  </motion.a>
  <motion.a
    variants={slideInFromLeft(1)}
    className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
    href="http://photography.riddhesh.rf.gd" // Adjust the URL as needed
  >
    Photography Portfolio
  </motion.a>
  <motion.a
    variants={slideInFromLeft(1)}
    className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
    href="#" // Adjust the URL as needed
  >
    Light Theme
  </motion.a>
</div>



      </div>

      <motion.div
  variants={slideInFromRight(0.8)}
  className="w-full max-h-[800px] flex justify-center items-center"
>
<Image
  src="/pfp.jpg"
  alt="work icons"
  height={550}
  width={550}
  className="rounded-full"
  style={{
    border: '5px solid #8a2be2', // Adjust border thickness and color as needed
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Adjust shadow properties as needed
  }}
/>




</motion.div>

    </motion.div>
  );
};

export default HeroContent;
