import React, { useState, useEffect } from "react";
import * as images from "../../images";
import icons from "../../images/icons.svg";

import {
  CarouselContainer,
  CarouselButtonRight,
  CarouselButtonLeft,
  CarouselImg,
} from "./Carousel.styled.jsx";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesArray = Object.values(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, imagesArray.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer id="gallery">
      <CarouselButtonLeft onClick={prevSlide}>
        <svg width="48" height="48">
          <use href={`${icons}#icon-circle-left`} />
        </svg>
      </CarouselButtonLeft>
      <CarouselImg src={imagesArray[currentIndex]} alt="carousel" />
      <CarouselButtonRight onClick={nextSlide}>
        <svg width="48" height="48">
          <use href={`${icons}#icon-circle-right`} />
        </svg>
      </CarouselButtonRight>
    </CarouselContainer>
  );
};

export default Carousel;
