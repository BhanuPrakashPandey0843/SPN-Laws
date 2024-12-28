import React from 'react';
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <motion.section 
      style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp9723331.jpg)' }} 
      className="bg-cover bg-center bg-no-repeat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl" style={{ color: '#b8860b' }}>
            <motion.span
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Contact SPN Laws for
            </motion.span>
            <motion.span
              className="block font-extrabold"
              style={{ color: '#b8860b' }}
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Expert Legal Services
            </motion.span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-md hover:bg-rose-700 hover:text-white hover:shadow-lg focus:outline-none focus:ring active:bg-rose-500 active:text-white active:shadow-md sm:w-auto transition duration-300 ease-in-out transform hover:rotate-3 hover:scale-105"
              style={{ backgroundColor: '#b8860b' }}
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="text-animate">Home</span>
            </a>
            <a
              href="/"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-md hover:text-rose-700 hover:shadow-lg focus:outline-none focus:ring active:text-rose-500 active:shadow-md sm:w-auto transition duration-300 ease-in-out transform hover:-rotate-3 hover:scale-105"
              style={{ color: '#b8860b' }}
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <span className="text-animate">About us</span>
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .text-animate {
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
          }

          .text-animate:hover {
            transform: translateY(-5px); /* Slide up slightly on hover */
            opacity: 0.8; /* Slightly fade on hover */
          }
        `}
      </style>
    </motion.section>
  );
};

export default HomeSection;
