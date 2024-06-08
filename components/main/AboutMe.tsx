"use client";
import React from "react";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div 
    id="#about-me"
    className="flex flex-col relative items-center justify-center min-h-screen w-full h-full">
      <div className="w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          About
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Me{" "}
          </span>
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center">

<motion.div

  initial={{ opacity: 0, y: 100 }}

  animate={{ opacity: 1, y: 0 }}

  transition={{ duration: 0.5, delay: 0.5 }}

  className="flex flex-col px-20 text-white max-w-[800px] w-auto h-auto items-center pt-4"

  style={{ borderRadius: '10px' }}

>

  <Image src="/gifpew.gif" alt="GIF description" width={600} height={600} />

</motion.div>

</div>

      <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col gap-6 mt-6 px-16 text-center">
          <p className="text-gray-200">
            I&apos;m passionate student pursuing bachelor&apos;s degrees in Data Science and Statistics from IIT Madras, alongside a B.Tech degree in Artificial Intelligence and Data Science from KJSIT. With a firm belief in technology&apos;s transformative power, I&apos;m driven to explore its diverse facets.
            <br></br><br></br>
            My journey includes hands-on web development, crafting user-friendly digital experiences like my portfolio at www.riddhesh.rf.gd. Yet, my true passion lies in delving into Machine Learning, aiming to make impactful contributions through data-driven insights.
            <br></br><br></br>
            Seeking projects aligned with my interests, I&apos;m eager to collaborate on cutting-edge ML endeavors or AI initiatives for social good. Beyond academics, I value networking and learning from the tech community. If you share my enthusiasm for technology&apos;s potential, let&apos;s connect and shape the future together.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Encryption;
