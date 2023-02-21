import React from "react";
import styles from "./articlecard.module.css";
import useResponsive from "@/hooks/useResponsive";
import Logo from "../logo";
import { SectionIconDark } from "../icons";

function ArticleCard({
  header,
  title,
  src,
  width,
  height,
  alignTitle = "flex-end",
  bgColor = "rgba(0, 0, 0, 0.6)",
  overLayHeight,
  overLayWidth = "100%",
  flexGrow = true,
  maxWidth,
  titleAlignemnt,
  titleFont = "25px",
}) {
  const isMobile = useResponsive();

  return (
    <div
      className={styles.articleCardContainer}
      style={{
        width: isMobile ? "100%" : width,
        flexGrow: flexGrow && 1,
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
          maxWidth: maxWidth,
        }}
      >
        {title && (
          <div
            className={styles.articleCardInfo}
            style={{
              backgroundColor: bgColor,
              height: overLayHeight,
              width: isMobile ? "100%" : overLayWidth,
              alignItems: titleAlignemnt,
            }}
          >
            <span
              className={styles.articleCardTitle}
              style={{
                fontSize: titleFont,
              }}
            >
              {title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleCard;
