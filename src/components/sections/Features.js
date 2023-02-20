import React, { useEffect, useState } from "react";
import ArticleCard from "../common/articlecard";
import { SectionIcon } from "../common/icons";
import Logo from "../common/logo";

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
    <div className="sectionContainer">
      <div className="sectionHeader">
        <Logo src={SectionIcon} className="sectionIcon" />
        <span className="sectionTitle">Features</span>
      </div>
      <div className="sectionCardContainer">
        {featureData &&
          featureData.data?.map((item) => (
            <ArticleCard
              key={item.title}
              src={item.image}
              title={item.title}
              width="15vw"
              height={350}
            />
          ))}
      </div>
    </div>
  );
}

export default FeatureInfo;
