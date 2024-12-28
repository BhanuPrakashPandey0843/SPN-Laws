import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Section3 = () => {
  return (
    <div className='bg-[#EEF2F6] py-20'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center relative'>

        {/* Image Section */}
        <div className='relative mx-auto md:mx-4 lg:mx-14  md:mb-0 mt-10'>
          <div className='relative  md:w-80 mx-auto'>
            <img src='/Images/SectionsPic/secPic4.png' alt='Pic4' className='w-full shadow-lg rounded-lg'/>
            <img 
              src='/Images/SectionsPic/secPic5.png' 
              alt='Pic5' 
              className='absolute w-40 md:w-32 lg:w-40 top-[-30px] md:top-[-60px] lg:top-[-80px] left-[50%] transform -translate-x-1/2 shadow-lg rounded-lg'
            />
            <div className='flex items-center bg-white shadow-lg rounded-lg p-2 absolute top-[-40px] md:top-[-80px] lg:top-[-100px] left-[80%] transform -translate-x-1/2 w-36 md:w-52 '>
              <img src='/Images/SectionsPic/secPic6.png' alt='Pic6' className='w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full'/>
              <div className='px-2 text-center'>
                <div className='text-black text-xs md:text-sm lg:text-base font-bold'>2.2k</div>
                <div className='text-[7px] md:text-xs lg:text-sm text-gray-400'>Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className='flex flex-col items-center md:items-start mx-2 md:mx-4 lg:mx-16'>
          <div className='lg:px-28 lg:pt-10 lg:space-y-3 text-center md:text-left'>
            <h1 className='text-base md:text-3xl lg:text-4xl text-[#2F4B79] font-semibold'>
              Our Elite Attorneys:<br />Your Strongest Legal Support
            </h1>
            <p className='text-sm  lg:w-full text-[#2F4B79]'>
              At SPN Law, we pride ourselves on having a team of the best attorneys dedicated to providing you with the highest level of legal support. Our experienced and skilled lawyers are committed to understanding your unique needs and delivering tailored solutions to ensure the best possible outcomes. Whether you need assistance with family law, criminal defense, corporate matters, or personal injury cases, our attorneys are here to guide you every step of the way with expertise, compassion, and unwavering dedication.
            </p>
          </div>
          <div className='lg:ms-28 mt-10'>
            <button className='bg-[#CEA252] hover:bg-[#b38b3f] flex items-center gap-1 md:gap-2 text-[10px] md:text-base h-10 text-white rounded-full px-4 py-2 transition-all duration-300'>
              Learn More
              <MdArrowOutward className='m-auto'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
