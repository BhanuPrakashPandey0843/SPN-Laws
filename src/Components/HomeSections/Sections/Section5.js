import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Aayush Mishra",
    title: "Founder Pixel Perfect Films",
    imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    review: "SPN Laws provided exceptional service when I needed legal assistance for my business. Their team was highly professional, knowledgeable, and attentive to my needs. They guided me through every step of setting up my company, ensuring all legal aspects were covered. What impressed me the most was their responsiveness and dedication to solving any issues promptly. I highly recommend SPN Laws to anyone in need of reliable legal support.",
    rating: 4.5
  },
  {
    name: "Bhanu Prakash Pandey",
    title: "MERN Developer",
    imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp",
    review: "I approached SPN Laws for help with a family law matter, and I was pleased with the outcome. The attorney assigned to my case was compassionate and provided clear, concise advice. The only reason I am giving four stars instead of five is due to a slight delay in communication at one point, but overall, they handled my case with great care and expertise. I would definitely use their services again.",
    rating: 5
  },
  {
    name: "Sumeet Yadav",
    title: "Front-end Developer",
    imgSrc: "images/sumeet.jpg",
    review: "SPN Laws exceeded my expectations in handling my real estate transaction. Their attention to detail and thorough understanding of real estate law made the process smooth and stress-free. They took the time to explain all the documents and ensured that I was comfortable with every decision. The staff was friendly, and their rates were reasonable considering the high quality of service they provided.",
    rating: 4
  }
];

const Section5 = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth > 760 ? 2 : 1,
  };

  return (
    <div className='py-16 px-4 lg:px-20 bg-gray-200 m-auto w-full max-w-7xl overflow-hidden'>
      <h1 className='text-center text-3xl lg:text-5xl font-semibold text-[#2f4b79]'>Testimonials Feedback</h1>
      <p className="text-center mb-8">Meet the Faces Behind Our Success Stories</p>
      <Slider {...sliderSettings}>
        {testimonials.map((review, index) => (
          <div key={index} className='flex-col flex  py-5 px-4 md:px-6 lg:px-8 bg-white rounded-md mx-2'>
            <div className='flex justify-center'>
              <img src={review.imgSrc} alt='profile' className='w-24 lg:w-28' style={{ clipPath: 'circle(38% at 50% 50%)' }} />
            </div>
            <div className='flex flex-col space-y-4 justify-between'>
              <div className='text-[#2f4b79] text-xl font-semibold text-center'>{review.name}</div>
              <div className="text-center font-semibold">{review.title}</div>
              <p className="text-center">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section5;
