import React from "react";
import styles from "./youtube.module.css";

function YoutubeCard({ embedId}) {
  return (
    <div className={styles.youtubecard}>
      <iframe
        width="350"
        height="200"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubeCard;
