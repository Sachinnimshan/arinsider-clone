import React, { useState, useEffect } from "react";
import SlideImage from "./SlideImage";
import styles from "./slideshow.module.css";

function SlideShow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const autoScroll = true;
  let slideTimer;
  let scrollTime = 3000;

  const slideData = [
    {
      title: "Title 1",
      path: "./images/slideimg2.webp",
    },
    {
      title: "Title 2",
      path: "./images/slideimg3.webp",
    },
    {
      title: "Title 3",
      path: "/images/slideimg6.webp",
    },
  ];

  const handleNext = () => {
    setCurrentSlide(
      currentSlide === slideData?.length - 1 ? 0 : currentSlide + 1
    );
  };

  const handlePrevious = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideData?.length - 1 : currentSlide + 1
    );
  };

  const invokeAutoScroll = () => {
    slideTimer = setInterval(handleNext, scrollTime);
  };


  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      invokeAutoScroll();
    }
    return () => {
      clearInterval(slideTimer);
    };
  }, [currentSlide]);



  return (
    <div className={styles.slideShowContainer}>
      {slideData?.map((img, index) => {
        return (
          <div
            className={index === currentSlide ? "slide active" : "slide"}
            key={index}
            onDrag={handleNext}
          >
            {index === currentSlide && (
              <SlideImage src={img.path} title={img.title} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SlideShow;
