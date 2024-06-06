"use client";
import React from "react";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <div 
    id="#about-me"
    className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Contact
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Me{" "}
          </span>
          
        </motion.div>
      </div>
      <div className="flex-1 flex items-center">
      <motion.div
  variants={slideInFromLeft(0.5)}
  className="flex flex-col  pl-40 text-white max-w-[800px] w-auto h-auto items-center" style={{ borderRadius: '10px' }} // Add pl-6 instead of p-6
>
  <Image src="/gifpew.gif" alt="GIF description" width={600} height={600} />
</motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center">
    <div className="flex flex-col gap-6 mt-6 pr-16 text-left">
      <p className="text-gray-200">
      I&apos;m surfing the dual waves of Data Science & Statistics at IIT Madras and AI & DS at KJ Somaiya. Yes, I cleared my JEEs, hence I also minor in pulling all-nighters. Inveterate Web Developer yet an aspiring Machine Learning maestro on the scout for intriguing projects. You could say I&apos;m like a Doraemon in the tech universe, juggling from Web Dev, C, Java, DBMS to AOA. And oh, did I tell you I nailed a top 5 spot at school not once, but twice?  
<br></br><br></br>
College life saw me joining every possible committee, probably because I&apos;m insatiable when it comes to knowledge (or maybe it was for the free food!). From being a language maestro at the Professional Communication Skills Committee to the creative Picasso as the Head of Design Team for our college magazine, I&apos;ve done it all. and Yep, I&apos;m that person who&apos;s always tinkering, always pushing buttons just to see what happens next.
<br></br><br></br>
Now, here&apos;s where you come in: I&apos;m on the lookout for internships that promise as many learning curves as there are on a roller-coaster ride! Whether it&apos;s diving into cutting-edge ML projects or using AI to save the world (well, maybe just a small corner of it), I&apos;m ready to roll up my sleeves and get stuck in.
<br></br><br></br>
And hey, it&apos;s not all about the tech stuff. I&apos;m all about connecting with my fellow techies, swapping stories, and soaking up wisdom like a sponge at a water park. So, if you&apos;re as pumped about tech as I am, let&apos;s join forces. Together, we&apos;ll conquer code, shape the future, and maybe even have a bit of fun along the way. Reach out, and let&apos;s make some magic happen! ✨

      </p>

    
    
    </div>
  </div>
</div>
      

        

  );
};

export default Contact;
