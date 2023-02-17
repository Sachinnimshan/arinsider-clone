import React from "react";
import styles from "./articlecard.module.css";
import Image from "next/image";

function ArticleCard({ title, src, width, height }) {
  return (
    <div className={styles.articleCard}>
      <span className={styles.articleCardTitle}>{title}</span>
      <Image
        src={src}
        className={styles.articleCardImage}
        width={width}
        height={height}
      />
    </div>
  );
}

export default ArticleCard;
