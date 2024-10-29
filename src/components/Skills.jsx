import React, { useEffect } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css'

import { SiCplusplus } from "react-icons/si";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

import { FaPython } from "react-icons/fa";  

import { SiDart } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiSelenium } from "react-icons/si";


const Skills = () => {


    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

  return (
    <div id='skills' className='bg-black text-gray-400  max-w-[1200px] mx-auto pt-10  px-5 md:px-4'>
        <h2 className='text-[#ffffffcb] text-2xl md:text 4xl font-bold mb-10'>
           Tech Stack
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3  gap-10 md:gap-16' >
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div className=''>
                  <SiCplusplus className='text-blue-400 h-[40px] w-auto mx-auto'/>
              </div>
              <div className='text-justify p-2'>
                 Basic of C++ Programming and OOPs cocepts.
              </div> 
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]'>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <FaHtml5 className='text-[#f27c49] h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  HTML tags
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]'>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <IoLogoCss3 className='text-blue-400 h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                 Different types css properties.
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]'>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <IoLogoJavascript className='text-[#f2e449]  h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                Javascript For Beginners Complete Course <br /><br />
              </div>
              {/* <a href="https://www.udemy.com/certificate/UC-15c93772-94c0-4b6f-95af-646a56ff9607/" className=' p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3] '><button >Certificate</button></a> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <FaJava className='text-blue-400 h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Basic of Java programme and OOPs  concepts.
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]'>Certificate</button>   */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <FaReact className='text-[#72a5d4]  h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Front end frame work
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]'>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <DiNodejs className='text-[#68f54f] h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Different node modules
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]'>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <SiMongodb className='text-[#a6d86f]  h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Non sequential database
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]'>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <FaPython className='text-[#f2de49]  h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Basic of python programme and OOPs concept.
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]'>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <SiFlutter className='text-blue-400 h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Basic widget 
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]'>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <SiDart className='text-[#49c2f2]  h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Dart
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]' disabled>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <SiMysql className='text-[#49c2f2]  h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Relation database
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]' disabled>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <SiDjango className='text-[#257f22]  h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Django
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]' disabled>Certificate</button> */}
          </div>
          <div className=' border card pt-5 grid grid-cols-1' data-aos="fade-up">
              <div>
                  <SiSelenium className='text-[#55c92b]  h-[40px] w-auto mx-auto' />
              </div>
              <div className='text-justify p-2'>
                  Selenium for automation testing
              </div>
              {/* <button className='p-2 bg-[#3eb66c95] m-3 rounded text-[#ffffffc7] hover:bg-[#3e74b6f3]' disabled>Certificate</button> */}
          </div>

        </div>
        
    </div>
  )
}

export default Skills