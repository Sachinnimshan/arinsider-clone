import React from "react";
import Layout from "../layout";
import FeatureInfo from "../sections/Features";
import TrendingInfo from "../sections/Trending";
import SlideShow from "../slideshow";
import styles from "./home.module.css";

function HomePage() {
  return (
    <Layout>
        <div className={styles.subContainer}>
          <SlideShow />
          <FeatureInfo />
          <TrendingInfo />
        </div>
    </Layout>
  );
}

export default HomePage;
