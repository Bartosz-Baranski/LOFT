import React, { useState, useEffect } from "react";
import css from "./Carousel.module.css";
import * as images from "../../images";

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
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <img
        className={css.carousel_img}
        src={imagesArray[currentIndex]}
        alt="carousel"
      />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
