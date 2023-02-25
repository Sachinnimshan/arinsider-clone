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
  overlayAlignment = "flex-end",
  overLayColor = "rgba(0, 0, 0, 0.6)",
  overLayHeight,
  overLayWidth = "100%",
  flexGrow = true,
  maxWidth,
  titleAlignemnt,
  titleFont = "25px",
  onClick,
}) {
  const isMobile = useResponsive();

  return (
    <div
      className={styles.articleCardContainer}
      style={{
        width: isMobile ? "100%" : width,
        flexGrow: flexGrow && 1,
      }}
      onClick={onClick}
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
          alignItems: overlayAlignment,
          maxWidth: maxWidth,
        }}
      >
        {title && (
          <div
            className={styles.articleCardInfo}
            style={{
              backgroundColor: overLayColor,
              height: overLayHeight,
              width: isMobile ? "100%" : overLayWidth,
              alignItems: titleAlignemnt,
            }}
          >
            <span
              className="articleCardTitle"
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
