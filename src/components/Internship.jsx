import React from "react";
import InternCard from "../Card/InternCard";
import BaratIntern from "../assets/0.jpg";
import TT from "../assets/Certificate.jpg";
import Ten from "../assets/10seconds.jpg"

const Internship = () => {
  return (
    <div id="internships" className="section bg-black  text-gray-400  max-w-[1200px] mx-auto px-5 md:px-4">
      <h2 className="text-[#ffffffcb] text-2xl md:text 4xl font-bold mt-10">
        Internships
      </h2>
      <br />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
      <InternCard image={BaratIntern} title={"App Development "} link={"https://drive.google.com/file/d/11iPjtKdH8o_o9ius15Gpow7tKwabsNEP/view?usp=sharing"} />
      <InternCard image={TT} title={"Fullstack  Development"} link={"https://drive.google.com/file/d/1U39d0Qj1Aq-SSHKKxVOrRxqAbnr0anjG/view?usp=sharing"} />
      <InternCard image={Ten} title={"C Programming"} link={"https://drive.google.com/file/d/1uVZX2_EOeqxOeakCUBn3AfTuu32mnsWt/view?usp=sharing"}/>
      </div>
    </div>
  );
};

export default Internship;
