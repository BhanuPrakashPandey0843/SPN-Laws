import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="m-auto items-center w-full">
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
     
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Fourth slide" />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
