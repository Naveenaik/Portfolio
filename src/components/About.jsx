import React, { useEffect } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

  return (
    <div id="about" className="px-10bg-black text-gray-400  max-w-[1200px] w-auto mx-auto mt-[20px] px-5 md:px-4 h-[75vh] md:h-[70vh]">
        <h2 className="text-[#ffffffcb] text-2xl md:text 4xl font-bold mb-5">About</h2>
        <div data-aos="fade-up">
            <div>
                <h2 className='text-red-500 text-xl mb-3'>Objective</h2>
                <p className='text-justify leading-8'>My career objective is to work sincerely, seek knowledge for the task assigned, to achieve a good position in your esteemed organization by utilizing my skills.</p>
            </div>
            <div data-aos="fade-up">
                <h2 className='text-red-500 text-xl mt-5 mb-3'>Education</h2>
                <ul className='list-disc pl-5 text-justify '>
                    <li>
                        <b>A.J. Institute of Engineering and Technology, Mangaluru</b>
                        <br />
                        B.E (Information Science and Engineering)
                    </li>
                    <li className='mt-7'>
                        <b>Viveka Pre-University College, Kota, Udupi </b><span className='text-red-400'>(2021)</span>
                        <br />
                        92.16%
                    </li>
                    <li className='mt-7'>
                        <b>Government High School, Nukkuru </b><span className='text-red-400'>(2019)</span>
                        <br />
                        86.08%
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About