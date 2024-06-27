import './Carousel.scss';
import React, { useState } from 'react';

const Carousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = pictures.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
          <img
            key={currentSlide}
            src={pictures[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="slide"
          />
      </div>
      {totalSlides > 1 && (
        <div className="controls">
          <img onClick={prevSlide} className="prev" alt='arrow-left' src='../SRC/assets/arrow-left-carousel.png'/>
          <img onClick={nextSlide} className="next"  alt='arrow-right' src='../SRC/assets/arrow-right-carousel.png'/>
        </div>
      )}
      {totalSlides > 1 && (
        <div className="pagination">
          <span className="current-slide">{currentSlide + 1}</span> / {totalSlides}
        </div>
      )}
    </div>
  );
};

export default Carousel;