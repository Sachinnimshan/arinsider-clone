import FeatureInfo from "@/components/features";
import Layout from "@/components/layout";
import SlideShow from "@/components/slideshow";
import React from "react";

function Features() {
  return (
    <Layout>
      <>
        <SlideShow />
        <FeatureInfo />
      </>
    </Layout>
  );
}

export default Features;