import React, { useRef, useState, useEffect } from 'react';
import santoshImage from './images/santosh.jpg'; 

const reviews = [
  {
    text: "SPN Law and Academy excels in providing top-tier legal education and expert services. Their dedication to excellence ensures graduates and clients alike receive unparalleled quality and expertise.",
    author: "Santosh Pandey",
    position: "Advocate",
    image: santoshImage
  },
  {
    text: "Perfect place to achieve your goals through excellent guidance of SPN Academay.",
    author: "Santosh Pandey",
    position: "Advocate",
    image: santoshImage
  },
  {
    text: "SPN Law and Academy excels in providing top-tier legal education and expert services. Their dedication to excellence ensures graduates and clients alike receive unparalleled quality and expertise.",
    author: "Santosh Pandey",
    position: "Advocate",
    image: santoshImage
  },
  {
    text: "SPN Law and Academy stands at the forefront of legal education and professional services, delivering excellent exceptional quality ,unmatched expertise and trustworthy service.", 
    author: "Bhanu Prakash Pandey ",
    position: "Student",
    image: santoshImage
  },
  {
    text: "SPN Law and Academy excels in providing top-tier legal education and expert services. Their dedication to excellence ensures graduates and clients alike receive unparalleled quality and expertise.",
    author: "Santosh Pandey",
    position: "Advocate",
    image: santoshImage
  },
  {
    text: "SPN Law and Academy excels in providing top-tier legal education and expert services. Their dedication to excellence ensures graduates and clients alike receive unparalleled quality and expertise.",
    author: "Santosh Pandey",
    position: "Advocate",
    image: santoshImage
  },

 
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); 

  const updateItemsPerView = () => {
    const width = window.innerWidth;
    if (width < 576) {
      setItemsPerView(1);
    } else if (width < 768) {
      setItemsPerView(2);
    } else {
      setItemsPerView(3);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateItemsPerView();
      const carouselInner = carouselRef.current.querySelector('.carousel-inner');
      const cardWidth = carouselInner.querySelector('.carousel-item').offsetWidth;
      const totalScrollWidth = carouselInner.scrollWidth;
      const maxScrollPosition = totalScrollWidth - cardWidth * itemsPerView;

      setScrollPosition((prev) => Math.min(prev, maxScrollPosition));
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, [carouselRef, itemsPerView]);

  const handleNext = () => {
    const carouselInner = carouselRef.current.querySelector('.carousel-inner');
    const cardWidth = carouselInner.querySelector('.carousel-item').offsetWidth;
    const totalScrollWidth = carouselInner.scrollWidth;
    const maxScrollPosition = totalScrollWidth - cardWidth * itemsPerView;

    if (scrollPosition < maxScrollPosition) {
      const newPosition = Math.min(scrollPosition + cardWidth, maxScrollPosition);
      setScrollPosition(newPosition);
      carouselInner.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const carouselInner = carouselRef.current.querySelector('.carousel-inner');
    const cardWidth = carouselInner.querySelector('.carousel-item').offsetWidth;

    if (scrollPosition > 0) {
      const newPosition = Math.max(scrollPosition - cardWidth, 0);
      setScrollPosition(newPosition);
      carouselInner.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="container-fluid bg-body-tertiary py-3"
      ref={carouselRef}
      style={{ overflow: 'hidden', position: 'relative' ,marginTop:'0px'}}
    >
      <div id="testimonialCarousel" className="carousel">
        <div className="carousel-inner" style={{ display: 'flex', padding: '1em 0', overflow: 'hidden' }}>
          {reviews.map((review, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
              style={{
                flex:' 0 0 calc(100% / ${itemsPerView})',
                margin: '0 0.5em',
                border: '0',
                display: 'block',
                minWidth: '250px',
                
              }}
            >
              <div className="card shadow-sm rounded-3">
                <div className="quotes display-2 text-body-tertiary">
                  <i className="bi bi-quote"></i>
                </div>
                <div className="card-body">
                  <p className="card-text">"{review.text}"</p>
                  <div className="d-flex align-items-center pt-2">
                    <img
                      src={review.image}
                      alt="testimonial"
                      style={{ width: '70px', maxHeight: '70px', borderRadius: '50%', marginRight: '1rem' }}
                    />
                    <div>
                      <h5 className="card-title fw-bold">{review.author}</h5>
                      <span className="text-secondary">{review.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrev}
          style={{
            width: '3rem',
            height: '3rem',
            backgroundColor: 'grey',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            border: 'none'
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
          style={{
            width: '3rem',
            height: '3rem',
            backgroundColor: 'grey',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
            border: 'none'
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;