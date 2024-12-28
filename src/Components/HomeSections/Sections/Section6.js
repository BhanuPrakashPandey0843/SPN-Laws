import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';

const Section6 = () => {
  const formData = [
    {
      name: "name",
      type: "text",
      id: "name",
      placeholder: "Full Name"
    },
    {
      name: "email",
      type: "email",
      id: "email",
      placeholder: "Email Address"
    },
    {
      name: "subject",
      type: "text",
      id: "subject",
      placeholder: "Your Subject"
    },
    {
      name: "phone",
      type: "text",
      id: "phone",
      placeholder: "Phone Number"
    }
  ];

  return (
    <div className='w-full container mx-auto flex flex-col md:flex-row gap-5 md:gap-8 py-8 px-4 md:px-8'>
      <motion.div
        className='flex-1 text-[#2F4B79] space-y-6'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold'>Request A Free Call Back</h1>
        <p className='text-sm md:text-base lg:text-lg'>
          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by...
        </p>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-md shadow-md'>
          {formData.map((data, index) => (
            <div key={index}>
              <input
                placeholder={data.placeholder}
                type={data.type}
                className='text-base p-2 w-full border rounded-md focus:border-[#2F4B79] focus:outline-none'
                id={data.id}
                name={data.name}
              />
            </div>
          ))}
          <div className='w-full mt-0'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8688153240723!2d73.73800777538649!3d20.014019821856145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb37de3b2d35%3A0x137fda4780b837c2!2sSPN%20Law%20%26%20SPN%20Academy!5e0!3m2!1ste!2sin!4v1718913085910!5m2!1ste!2sin" 
            height="240" 
            className='md:w-[559px] md:h-[240px] w-64 '
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            target="_blank"
            rel="noopener noreferrer"
          ></iframe>
        </div>
          <div className="md:col-span-2">
            <motion.button
              type="submit"
              className='flex items-center justify-center text-base lg:text-lg h-fit bg-[#CEA252] text-white py-2 px-6 rounded-full hover:bg-[#806533] transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send <MdArrowOutward className='ml-2' />
            </motion.button>
          </div>
        </form>
        
      </motion.div>
      <motion.div
        className='flex-1'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src='/Images/SectionsPic/secPic10.gif' alt='Image 10' className='w-full rounded-md shadow-md' />
      </motion.div>
    </div>
  );
};

export default Section6;
