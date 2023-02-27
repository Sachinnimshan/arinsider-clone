import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Router, { useRouter } from "next/router";

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
  const nextArticle = articleData?.data?.find(
    (item) => item.id === article?.id + 1
  );
  const prevArticle = articleData?.data?.find(
    (item) => item.id === article?.id - 1
  );

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
          {prevArticle && (
            <div className="articleNavItem">
              <span
                className="articleNavKeys"
                onClick={() => Router.push(`/${type}/${prevArticle?.title}`)}
              >
                Previous
              </span>
              <span className="articleNavTitle">{prevArticle?.title}</span>
            </div>
          )}
          {nextArticle && (
            <div
              className="articleNavItem"
              onClick={() => Router.push(`/${type}/${nextArticle?.title}`)}
            >
              <span className="articleNavKeys">Next</span>
              <span className="articleNavTitle">{nextArticle?.title}</span>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default PageView;
