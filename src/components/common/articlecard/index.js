import React from "react";
import styles from "./articlecard.module.css";
import useResponsive from "@/hooks/useResponsive";

function ArticleCard({ title, src, width, height }) {
  const isMobile = useResponsive();

  return (
    <div
      className={styles.articleCard}
      style={{
        backgroundImage: `url(${src})`,
        height: height,
        width: isMobile ? "100%" : width
      }}
    >
      <div className={styles.articleCardInfo}>
        <span className={styles.articleCardTitle}>{title}</span>
      </div>
    </div>
  );
}

export default ArticleCard;
