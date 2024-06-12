import React from "react";

const InternCard = ({ image,title,link }) => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white  group w-full h-[250px] overflow-hidden rounded md:h-[300px] select-none hover:scale-105 md:hover:scale-110 hover:ease-in duration-300 internship-card"
    >
      <img
        src={image}
        alt=""
        className="absolute object-cover h-full rounded blur-[1px]"
      />
      <div className="absolute h-[300px] flex flex-col bg-[#3f3d3dca]   ease-in-out transistion duration-1000 w-full ">
        <div className="grid grid-cols-1 place-items-center ">
          <h3 className="text-[#ffffff] text-lg md:text-xl opacity-100 pt-16 ">
            {title}
          </h3>
          <div className="">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="text-white bg-gradient-to-br from-orange-400 to-pink-400 w-[70px] my-5 mx-2 rounded shadow p-1">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternCard;
