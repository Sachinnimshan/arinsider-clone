import React, { useEffect, useState } from "react";
import ArticleCard from "../common/articlecard";
import { SectionIcon } from "../common/icons";
import Logo from "../common/logo";

function TrendingInfo() {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    fetch("/api/trending")
      .then((res) => res.json())
      .then((data) => {
        setTrendingData(data);
      });
  }, []);
  return (
    <div className="sectionContainer">
      <div className="sectionHeader">
        <Logo src={SectionIcon} className="sectionIcon" />
        <span className="sectionTitle">Trending</span>
      </div>
      <div className="sectionCardContainer">
        {trendingData &&
          trendingData.data?.map((item) => (
            <ArticleCard
              key={item.title}
              src={item.image}
              title={item.title}
              width={365}
              height={400}
            />
          ))}
      </div>
    </div>
  );
}

export default TrendingInfo;
