import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ccms.png"
          title="Class Connect"
          description="An invaluable resource housing college notes, facilitating seamless sharing and collaboration. Utilizing React.js, this platform streamlines access."
        />
        <ProjectCard
          src="/pphome.png"
          title="Photography Portfolio"
          description="Capturing moments with artistry and emotion, my portfolio tells stories through light, color, and perspective."
        />
        <ProjectCard
          src="/pplight.png"
          title="Light Portfolio"
          description="Dynamic portfolio exhibit, blending HTML, CSS, and JavaScript, showcasing skills, projects, and expertise creatively."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
        <ProjectCard
          src="/cvcoin.png"
          title="Coin Counter"
          description="Coin counter leveraging OpenCV, accurately identifies and tallies coins, streamlining currency handling processes"
        />
        <ProjectCard
          src="/rps.jpg"
          title="Rock Paper Scissor"
          description="OpenCV-powered rock-paper-scissors game for immersive, interactive fun, enhancing gaming experiences with computer vision"
        />
        <ProjectCard
          src="/cal.png"
          title="Calculator"
          description="Java-powered calculator offering precise calculations and user-friendly interface, enhancing efficiency in mathematical tasks."
        />
      </div>
    </div>
  );
};

export default Projects;
