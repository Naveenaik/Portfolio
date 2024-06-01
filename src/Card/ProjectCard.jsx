import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white relative group w-full h-[190px] overflow-hidden rounded md:h-[210px] select-none hover:scale-105 md:hover:scale-110 hover:ease-in duration-300 project-card"
    >
      <img
        src={image}
        alt=""
        className="absolute object-cover rounded blur-[1px]"
      />
      <div className="absolute bottom-0 flex flex-col bg-[#141414]  group-hover:opacity-100 ease-in-out duration-1000 w-full ">
        <div className="flex">
          <h3 className="text-[#b5c83dc5] text-xl opacity-100 w-full px-2 py-3 h-[50px]">
            {title}
          </h3>
          <div className="">
          <button className="text-white bg-green-600 w-[70px] my-5 mx-2 rounded shadow p-1">view</button>
          </div>
        </div>
        <p className="text-white px-2 text-justify hidden group-hover:block ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
