import React, { useState, useEffect } from "react";
import useResponsive from "@/hooks/useResponsive";
import ArticleCard from "../common/articlecard";

function SlideShow({
  height = 400,
  maxWidth = "100%",
  overLayHeight = "100%",
  overLayWidth = "50%",
  titleAlignemnt = "center",
  titleFont = "40px",
}) {
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
    <div>
      {slideData?.map((img, index) => {
        return (
          <div key={index}>
            {index === currentSlide && (
              <ArticleCard
                src={img.path}
                title={img.title}
                height={height}
                maxWidth={isMobile ? "100%" : maxWidth}
                overLayHeight={overLayHeight}
                overLayWidth={overLayWidth}
                titleAlignemnt={titleAlignemnt}
                titleFont={titleFont}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SlideShow;
