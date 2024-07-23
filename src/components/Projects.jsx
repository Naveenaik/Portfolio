import React, { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css'

import ProjectCard from "../Card/ProjectCard";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/TC.png"
import p5 from "../assets/todo.png"
import p6 from "../assets/ecommerce.png"
import p7 from "../assets/DealsDray.png"
const Projects = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[]);

  return (
    <div id="projects" className="bg-black text-gray-400  max-w-[1200px] mx-auto px-5 md:px-4 md:my-0  my-16 ">
      <h2 className="text-[#ffffffcb] text-2xl md:text 4xl font-bold mt-10">
        Projects
      </h2>
      <br />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 ">
        <ProjectCard image={p2} btnText={"Demo"} title={"Team Tracker"} description={"Building the Team Tracker app for small businesses to monitor employees with real-time updates and secure authentication."} />
        <ProjectCard image={p3} btnText={"Demo"} title={"Calculator App"} description={"A Flutter calculator app with a user-friendly interface, standard arithmetic operations, responsive design, and optimized performance."} />
        <ProjectCard image={p1} btnText={"View"} gitlink={"https://github.com/Naveenaik/Library-System-Management"} title={"Library System Management"} description={"A responsive library system app with React, Express/Node.js, and MySQL, featuring book cataloging, user management, and inventory control."} />
        <ProjectCard image={p4} btnText={"Demo"} title={"Temperature Converter using Flutter"} description={"Using flutter widgets I have created temperature converter app"} />
        <ProjectCard image={p5} btnText={"View"} link={"https://mytodofrontend.vercel.app/"} title={"Task Manager"} description={"This app using the MERN stack with JWT-based authentication, featuring user registration, login, task management in MongoDB, and a responsive React interface."} />
        <ProjectCard image={p6} btnText={"View"} gitlink={"https://github.com/Naveenaik/ecommerce-software-testing"} link={"https://ecommerce-software-testing.vercel.app/"} title={"Ecommerce Website"} description={"A website is created to do the software testing using selenium automation tool"} />
        <ProjectCard image={p7} btnText={"View"} gitlink={""} link={""} title={"Employee Registration"} description={"A task assigned by the DealsDray as part of the machine test of the code"} />
      </div>
      
    </div>
  );
};

export default Projects;
