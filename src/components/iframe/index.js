import React from "react";
import styles from "./youtube.module.css";

function YoutubeCard({ embedId }) {
  return (
    <iframe
      className={styles.youtubecard}
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video player"
      allowFullScreen
    ></iframe>
  );
}

export default YoutubeCard;
