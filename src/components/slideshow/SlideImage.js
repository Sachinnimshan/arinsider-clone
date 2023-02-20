import useResponsive from "@/hooks/useResponsive";
import React from "react";
import styles from "./slideshow.module.css";

function SlideImage({ src, title, date, width, height }) {
  return (
    <div
      className={styles.slideImageContainer}
      style={{
        backgroundImage: `url(${src})`,
        height: height,
        maxWidth: width,
      }}
    >
      <div className={styles.slideImageInfo}>
        <span className={styles.imageTitle}>{title}</span>
        <span className={styles.imageDate}>{date}</span>
      </div>
    </div>
  );
}

export default SlideImage;
