import React, { useEffect, useState } from "react";
import ArticleCard from "../common/articlecard";
import { SectionIcon } from "../common/icons";
import Logo from "../common/logo";
import { useRouter } from "next/router";

function SectionView({ type, title, width }) {
  const [data, setData] = useState([]);
  const router = useRouter();
  const fetchData = async () => {
    const response = await fetch(`/api/${type}`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="sectionContainer">
      <div className="sectionHeader">
        <Logo src={SectionIcon} className="sectionIcon" />
        <span className="sectionTitle">{title}</span>
      </div>
      <div className="sectionCardContainer">
        {data?.data?.map((item) => (
          <ArticleCard
            key={item.title}
            src={item.image}
            title={item.title}
            width={width}
            height={350}
            onClick={() => router.push(`/${type}/${item.title}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionView;
