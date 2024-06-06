import React from "react";

import heroimage from "../assets/profile.png";

import pdf from "../assets/Resume.pdf"

import { TypeAnimation } from "react-type-animation";
const Hero = () => {

  
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-8 h-[75vh] md:h-[75vh] w-auto mx-auto py-auto bg-black max-w-[1200px] ">
      <div className="bg-[#7a787822] col-span-1 my-auto mx-auto w-[250px] h-auto lg:w-[300px] rounded-full ">
        <img className="rounded-full " src={heroimage} alt="Naveena Naik" />
      </div>

      <div className="col-span-2 px-5 my-auto ">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color ">I'm a</span>
          <br />
          <TypeAnimation
            sequence={["Student", 1000, "Quick Learner", 1000, "Developer.", 500]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Naveena
        </p>
        <div className="my-8">
          <a
            href={pdf}
            className="px-6 py-3 w-full rounded-xl mr-4 
       bg-gradient-to-br from-orange-500 to-pink-500
        text-white"
          download>
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 
       border hover:bg-gradient-to-br from-orange-500 to-pink-500
        text-white hover:border-none "
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
