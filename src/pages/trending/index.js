import FeatureInfo from "@/components/sections/Features";
import Layout from "@/components/layout";
import SlideShow from "@/components/slideshow";
import React from "react";

function Trending() {
  return (
    <Layout>
      <>
        <SlideShow />
        <FeatureInfo />
      </>
    </Layout>
  );
}

export default Trending;