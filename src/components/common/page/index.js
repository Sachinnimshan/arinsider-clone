import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

function PageView() {
  const [articleData, setArticleData] = useState([]);
  const { query } = useRouter();
  const { slug, type } = query;

  const fetchData = async () => {
    const response = await fetch(`/api/${type}`);
    const data = await response.json();
    setArticleData(data);
  };
  const article = articleData?.data?.find((item) => item.title === slug);
  useEffect(() => {
    if (type && slug) {
      fetchData();
    }
  }, [type, slug]);

  return (
    <Layout
      headerBg={article?.image}
      title={article?.title}
      author={article?.author}
    >
      <div className="articleDetailsContainer">
        <p className="articleDescription">{article?.description}</p>
        <div className="articleNavigation">
          <div className="articleNavItem">
            <span className="articleNavKeys">Previous</span>
            <span className="articleNavTitle">Previous post</span>
          </div>
          <div className="articleNavItem">
            <span className="articleNavKeys">Next</span>
            <span className="articleNavTitle">Next post</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PageView;
