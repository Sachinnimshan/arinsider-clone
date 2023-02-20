import React, { useState, useEffect } from "react";
import SlideImage from "./SlideImage";
import styles from "./slideshow.module.css";
import useResponsive from "@/hooks/useResponsive";

function SlideShow({ images, height, width }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useResponsive();
  const autoScroll = true;
  let slideTimer;
  let scrollTime = 3000;

  const slideData = [
    {
      title: "Will the Metaverse Get Thrown in Buzzword Jail?",
      path: "./images/slideimg1.webp",
      date: Date.now(),
    },
    {
      title: "Spatial beats: meta, Squid Game and XR Funding",
      path: "./images/slideimg3.webp",
      date: Date.now(),
    },
    {
      title: "Will the Metaverse Get Thrown in Buzzword Jail?",
      path: "./images/slideimg4.webp",
      date: Date.now(),
    },
    {
      title: "Spatial beats: meta, Squid Game and XR Funding",
      path: "./images/slideimg5.webp",
      date: Date.now(),
    },
    {
      title: "Google lense reach 10 billion searches",
      path: "/images/slideimg6.webp",
      date: Date.now(),
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
          <div key={index}>
            {index === currentSlide && (
              <SlideImage
                src={img.path}
                title={img.title}
                height={400}
                width={isMobile ? "100%" : 750}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SlideShow;
