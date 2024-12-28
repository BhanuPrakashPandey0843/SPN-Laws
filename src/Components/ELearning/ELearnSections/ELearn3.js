import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ELean3 = () => {
  const feedback = [
    {
      profile: "/Images/ELearning/pic1.jpg",
      name: "Alex",
      feedback: "",
      rating: "4.5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      profile: "/Images/ELearning/pic1.jpg",
      name: "Alex",
      feedback: "",
      rating: "4.5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      profile: "/Images/ELearning/pic1.jpg",
      name: "Alex",
      feedback: "",
      rating: "4.5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      profile: "/Images/ELearning/pic1.jpg",
      name: "Alex",
      feedback: "",
      rating: "4.5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth > 760 ? 2 : 1
  };

  return (
    <div className='m-2 py-16 lg:px-20 bg-gray-200 overflow-hidden'>
      <h1 className='text-center text-3xl lg:text-5xl font-semibold text-[#2f4b79] mb-8 '>Student Feedback</h1>
      <Slider {...sliderSettings}>
        {feedback.map((reviews, index) => (
          <div key={index} className='px-2 '>
            <div className='flex flex-col gap-3 py-5 bg-white rounded-lg shadow-md'>
              <div className='flex items-center gap-4 px-4'>
                <img src={reviews.profile} alt='profile' className='w-24 lg:w-28 rounded-full' />
                <div className='text-lg lg:text-xl font-semibold text-[#2f4b79]'>{reviews.name}</div>
              </div>
              <p className='px-4 text-gray-700'>{reviews.text}</p>
              <div className='flex justify-between items-center px-4'>
                <div className='flex items-center gap-2'>
                  <div className='text-gray-400 text-xs'>{reviews.rating}</div>
                  <div className='flex text-yellow-500 text-sm'>
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ELean3;
