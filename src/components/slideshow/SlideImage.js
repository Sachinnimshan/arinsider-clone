import React from "react";
import styles from "./slideshow.module.css";

function SlideImage({ src, title, date }) {
  return (
    <div className={styles.slideImageContainer}>
      <img src={src} className={styles.slideImage} />
      <div className={styles.slideImageInfo}>
      <span className={styles.imageTitle}>{title}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default SlideImage;
