import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-black text-gray-400 h-[80px] max-w-[1300px] mx-auto flex justify-between items-center sticky top-0 z-10  ${
        scrolling ? "shadow-custom" : "shadow-none"
      }`}
    >
      <h1 className="text-3xl font-bold primary-color ml-5 animate-pulse">
        Naviam
      </h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about" className="hover:text-red-500">
            About
          </a>
        </li>
        <li className="p-5">
          <a href="#projects" className="hover:text-red-500">
            Projects
          </a>
        </li>
        <li className="p-5">
          <a href="#internships" className="hover:text-red-500">
            Internships
          </a>
        </li>
        <li className="p-5">
          <a href="#skills" className="hover:text-red-500">
            Skills
          </a>
        </li>
        <li className="p-5">
          <a href="#contact" className="hover:text-red-500">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="p-5 text-3xl font-bold primary-color ml-4">Naviam</h1>
        <ul className="p-8 text-xl grid grid-cols-1 gap-5">
          <li className="p-2">
            <a href="#about" className="hover:text-red-500">
              About
            </a>
          </li>
          <li className="p-2">
            <a href="#projects" className="hover:text-red-500">
              Projects
            </a>
          </li>
          <li className="p-2">
            <a href="#internships" className="hover:text-red-500">
              Internships
            </a>
          </li>
          <li className="p-2">
            <a href="#skills" className="hover:text-red-500">
              Skills
            </a>
          </li>
          <li className="p-2">
            <a href="#contact" className="hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
