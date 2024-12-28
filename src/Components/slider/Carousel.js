import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';

function CarouselComponent() {
  useEffect(() => {
    const carouselElement = document.querySelector('.carousel');
    const carousel = new Carousel(carouselElement, {});

    const nextSlide = () => {
      carousel.next();
    };

    const intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
      carousel.dispose();
    };
  }, []);

  return (
    <div className="container my-3" >
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ borderRadius: '30px', overflow: 'hidden', boxShadow:'0 3px 9px rgba(0,0,0,0.16), 0 3px 9px rgba(0,0,0,0.23)'}}>

          <div className="carousel-item active" style={{ position: 'relative', transition: 'transform 0.5s ease' }}>{/1/}
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="d-block w-100 carousel-img" alt="Wild Landscape" style={{ borderRadius: '30px' }} />
          </div>
          <div className="carousel-item" style={{ position: 'relative', transition: 'transform 0.5s ease' }}>{/2/}
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100 carousel-img" alt="Camera" style={{ borderRadius: '30px' }} />
          </div>
          <div className="carousel-item" style={{ position: 'relative', transition: 'transform 0.5s ease' }}>{/3/}
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100 carousel-img" alt="Exotic Fruits" style={{ borderRadius: '30px' }} />
          </div>
          <div className="carousel-item active" style={{ position: 'relative', transition: 'transform 0.5s ease' }}>{/4/}
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="d-block w-100 carousel-img" alt="Wild Landscape" style={{ borderRadius: '30px' }} />
          </div>
          <div className="carousel-item" style={{ position: 'relative', transition: 'transform 0.5s ease' }}>{/5/}
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100 carousel-img" alt="Camera" style={{ borderRadius: '30px' }} />
          </div>
          <div className="carousel-item" style={{ position: 'relative', transition: 'transform 0.5s ease' }}>{/6/}
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100 carousel-img" alt="Exotic Fruits" style={{ borderRadius: '30px' }} />
          </div>
          <div className="carousel-item active" style={{ position: 'relative', transition: 'transform 0.5s ease' }}>{/7/}
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="d-block w-100 carousel-img" alt="Wild Landscape" style={{ borderRadius: '30px' }} />
          </div>
          <div className="carousel-item" style={{ position: 'relative', transition: 'transform 0.5s ease' }}>{/8/}
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100 carousel-img" alt="Camera" style={{ borderRadius: '30px' }} />
          </div>
          <div className="carousel-item" style={{ position: 'relative', transition: 'transform 0.5s ease' }}>{/9/}
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100 carousel-img" alt="Exotic Fruits" style={{ borderRadius: '30px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;