import React from 'react';
import ReactCardSlider from 'react-card-slider-component';

const LatestBlog = () => {
  const sliderClick = () => {
    // Define what happens when a slide is clicked
    console.log('Slide clicked!');
  };

  const slides = [
    { image: "/Images/ELearning/pic1.jpg", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
    { image: "/Images/ELearning/pic1.jpg", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
    { image: "/Images/ELearning/pic1.jpg", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
    { image: "/Images/ELearning/pic1.jpg", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
    { image: "/Images/ELearning/pic1.jpg", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
    { image: "/Images/ELearning/pic1.jpg", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
  ];

  return (
    <div>
      <div className='text-center text-2xl font-bold lg:text-3xl mb-10'>Latest Blogs</div>
      <div className='lg:ms-40 ps-4 lg:ps-60 pb-16'>
        <ReactCardSlider slides={slides} className="w-full h-96"/>
      </div>
    </div>
  );
};

export default LatestBlog;
