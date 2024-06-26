import React from "react";
import InternCard from "../Card/InternCard";
import BaratIntern from "../assets/0.jpg";
import TT from "../assets/Certificate.jpg";

const Internship = () => {
  return (
    <div id="internships" className="bg-black  text-gray-400  max-w-[1200px] mx-auto pt-10  px-5 md:px-4">
      <h2 className="text-[#ffffffcb] text-2xl md:text 4xl font-bold mt-10">
        Internships
      </h2>
      <br />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
      <InternCard image={BaratIntern} title={"App Development "} />
      <InternCard image={TT} title={"Fullstack  Development"} />
      <InternCard image={TT} title={"C Programming"} />
      </div>
    </div>
  );
};

export default Internship;
