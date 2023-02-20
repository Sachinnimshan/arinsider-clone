import React from "react";
import styles from "./articlecard.module.css";
import useResponsive from "@/hooks/useResponsive";
import Logo from "../logo";
import { SectionIconDark } from "../icons";

function ArticleCard({
  title,
  src,
  width,
  height,
  header,
  alignTitle = "flex-end",
  bgColor = "rgba(0, 255, 0, 0.8)",
  overLayHeight,
}) {
  const isMobile = useResponsive();

  return (
    <div
      className={styles.articleCardContainer}
      style={{
        width: isMobile ? "100%" : width,
      }}
    >
      {header && (
        <div className={styles.articleCardHeader}>
          <Logo src={SectionIconDark} className="sectionIconDark" />
          <span className="sidebarSectionTitle">{header}</span>
        </div>
      )}
      <div
        className={styles.articleCard}
        style={{
          backgroundImage: `url(${src})`,
          height: height,
          alignItems: alignTitle,
        }}
      >
        <div
          className={styles.articleCardInfo}
          style={{ backgroundColor: bgColor, height: overLayHeight }}
        >
          <span className={styles.articleCardTitle}>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
