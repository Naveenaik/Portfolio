import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    const scriptURL = "https://script.google.com/macros/s/AKfycbz8YBVPkVUXq6txUKDK2pRQC3Hpz1pOKlFKriGkW8txO15eoVmpwhlk16wjidmnO-Tr/exec";
    const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const msg = document.getElementById("msg");

    fetch(scriptURL, { method: "POST", body: form })
      .then((response) => {
        msg.innerHTML="Message sent successfully"
        setTimeout(()=>{
          msg.innerHTML=""
        },5000)
        e.target.reset()
        })
      .catch((error) => console.error("Error!", error.message));
  };



  return (
    <div
      id="contact"
      className="bg-black text-gray-400  max-w-[1200px] w-auto mx-auto mt-[20px] px-5 md:px-4"
    >
      <h2 className="text-[#ffffffcb] text-2xl md:text 4xl font-bold mt-10 ">
        Contact
      </h2>
      <div
        data-aos="fade-right"
        className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2"
      >
        <div>
          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <label htmlFor="name" className="">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="Name"
              required
              className="bg-[#1f1f1f] rounded w-[80%] h-[50px] outline-none px-2"
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="Email"
              required
              className="bg-[#1f1f1f] rounded w-[80%] h-[50px] outline-none px-2"
            />
            <br />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name="Message"
              id="message"
              cols="25"
              rows="5"
              className="bg-[#1f1f1f] rounded w-[80%] h-[100px] resize-none outline-none px-2 py-3"
            ></textarea>
            <br />
            <span id="msg" className="text-[#617d52]"></span>
            <br />
            <button
              type="submit"
              className="px-3 py-1  rounded-[2px] mr-4 mt-5 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
            >
              Submit
            </button>
          </form>
        </div>
        <div data-aos="fade-right">
          <h2 className="mb-5">Social Media</h2>
          <div className="grid gap-5 grid-cols-1 md:gap-14">
            <a href="https://www.linkedin.com/in/naveena-naik-85b04a242">
              <FaLinkedinIn className="h-[25px] w-auto hover:text-[#ff5f5f]" />
            </a>
            <a href="https://github.com/Naveenaik">
              <FaGithub className="h-[25px] w-auto hover:text-[#ff5f5f]" />
            </a>
            <a href="https://www.instagram.com/itz_me_naveenaik/">
              <FaInstagram className="h-[25px] w-auto hover:text-[#ff5f5f]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
