import React, { useState, useEffect } from "react";
import styles from "./slideshow.module.css";

function SlideShow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageArray, setImageArray] = useState([]);

  const slideData = [
    {
      title: "Title 1",
      path: "./images/slideimg1.webp",
    },
    {
      title: "Title 2",
      path: "./images/slideimg2.webp",
    },
    {
      title: "Title 3",
      path: "./images/slideimg3.webp",
    },
    {
      title: "Title 4",
      path: "./images/slideimg4.webp",
    },
    {
      title: "Title 5",
      path: "./images/slideimg5.webp",
    },
    {
      title: "Title 6",
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

  useEffect(() => {}, []);
  return (
    <div className={styles.slideShowContainer}>
      {slideData?.map((img, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
            onDrag={handleNext}
          >
            {index === currentSlide && (
              <>
                <div className={styles.imageContent}>
                  <span className={styles.imageTitle}>{img.title}</span>
                  <span></span>
                </div>
                <img
                  src={img.path}
                  className={styles.slideShowImg}
                  alt={img.title}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SlideShow;
