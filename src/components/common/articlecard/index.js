import React from "react";
import styles from "./articlecard.module.css";
import useResponsive from "@/hooks/useResponsive";

function ArticleCard({ title, src, width, height }) {
  const isMobile = useResponsive();

  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        height: height,
        width: isMobile ? "100%": width,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div className={styles.articleCardInfo}>
        <p className={styles.articleCardTitle}>{title}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
