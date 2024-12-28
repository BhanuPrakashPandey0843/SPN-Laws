import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById('targetSection');
      if (target) {
        const targetPosition = target.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (targetPosition < screenPosition) {
          target.classList.add('slide-in');
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 px-6 py-12 sm:py-24 lg:px-8 pt-44 lg:pt-48 "
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
        <div id="targetSection" className="text-center lg:text-left lg:mr-10 mt-0 content-left2">
          <h1 className="text-5xl font-extrabold text-[#CEA252] drop-shadow-lg">Contact Us</h1>
          <p className="mt-3 text-lg text-gray-600">We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
          <div className="mt-4 flex justify-center lg:justify-start space-x-4">
            <a href="/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-600 animate-bounce" />
            </a>
            <a href="/" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600 animate-bounce" />
            </a>
            <a href="/" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400 animate-bounce" />
            </a>
            <a href="/" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-600 animate-bounce" />
            </a>
            <a href="/" className="whatsapp social">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500 animate-bounce" />
            </a>
          </div>
        </div>
        <form className="mt-16 lg:mt-0 max-w-xl w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
              <input required type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <input required type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
              <input required type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <textarea required name="message" id="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Your Message" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
          </div>
          <div className="mt-10 ">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#CEA252] text-white rounded-md py-2 px-4 hover:bg-yellow-500 h-fit transition duration-300 ease-in-out"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;