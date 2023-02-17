import React from "react";
import styles from "./articlecard.module.css";
import Image from "next/image";

function ArticleCard({ title, src, width, height }) {
  return (
    <div className={styles.articleCard}>
      <Image
        src={src}
        className={styles.articleCardImage}
        width={width}
        height={height}
      />
      <div className={styles.articleCardInfo}>
        <p className={styles.articleCardTitle}>{title}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
