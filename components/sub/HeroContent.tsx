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
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, there! I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Riddhesh Chaudhary{" "}
            </span>
            
          </span>
        </motion.div>

        <div className="flex flex-wrap gap-4">
  <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
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
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I am a passionate and forward-thinking student pursuing bachelor&apos;s degrees in Data science and statistics from IIT Madras and also a B.Tech degree in Artificial Intelligence and Data Science from KJSIT. As I navigate this unique educational journey, I&apos;m fueled by the belief that technology is the driving force behind the future, offering boundless opportunities to transform our world.
        </motion.p>
        <div className="flex flex-wrap gap-4 ml-4">
  <motion.a
          variants={slideInFromLeft(1)}
          href="https://www.cv.riddhesh.rf.gd"
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
        >
          CV
        </motion.a>
  <motion.a
          variants={slideInFromLeft(1)}
          href="https://www.photography.riddhesh.rf.gd"
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
        >
          Photography Portfolio
        </motion.a>
  <motion.a
          variants={slideInFromLeft(1)}
          href="https://www.riddhesh.rf.gd"
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
        >
          Main Portfolio
        </motion.a>
</div>
      </div>

      <motion.div

  variants={slideInFromRight(0.8)}

  className="w-full h-full flex justify-center items-center ml-12" 

>
        <Image
          src="/pfp.jpg"
          alt="work icons"
          height={500}
          width={500}
          className="rounded-full border-4 border-purple-500"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
