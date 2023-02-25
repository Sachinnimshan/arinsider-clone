import React from "react";
import Layout from "../layout";
import SectionView from "../section";
import SlideShow from "../slideshow";
import styles from "./home.module.css";

function HomePage() {
  return (
    <Layout>
      <div className={styles.subContainer}>
        <SlideShow />
        <SectionView type="features" title="Features" width="15vw" />
        <SectionView type="trending" title="Trending" width="16vw" />
      </div>
    </Layout>
  );
}

export default HomePage;
