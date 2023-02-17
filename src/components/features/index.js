import React, { useEffect, useState } from "react";
import ArticleCard from "../common/articlecard";
import styles from "./feature.module.css";

function FeatureInfo() {
  const [featureData, setFeatureData] = useState([]);

  useEffect(() => {
    fetch("/api/features")
      .then((res) => res.json())
      .then((data) => {
        setFeatureData(data);
      });
  }, []);
  return (
    <div className={styles.featureContainer}>
      {featureData &&
        featureData.data?.map((item) => (
          <ArticleCard
            src={item.image}
            title={item.title}
            width={500}
            height={300}
          />
        ))}
    </div>
  );
}

export default FeatureInfo;
