import useResponsive from "@/hooks/useResponsive";
import React from "react";
import ArticleCard from "../common/articlecard";
import { SiteIconDark } from "../common/icons";
import Logo from "../common/logo";
import SlideShow from "../slideshow";
import YoutubeCard from "../iframe";

function Sidebar() {
  const sections = [
    {
      title: "Weekly Newsletter",
      image: "/images/newsletter.webp",
      displayText: "Subscribe & Get a Free White Paper",
    },
    {
      title: "Business & Intelligence",
      image: "/images/businessint.png",
      displayText: "Get Spatial Smart",
    },
    {
      title: "Visibility & Sponsorship",
      image: "/images/sponsorship.webp",
      displayText: "Get Seen & Heard",
    },
  ];
  return (
    <div className="sidebarContainer">
      <Logo src={SiteIconDark} className="siteIconDark" />
      <YoutubeCard embedId="DCywA443f0A" />
      <SlideShow
        maxWidth="22vw"
        height={300}
        overLayWidth="100%"
        titleAlignemnt="start"
        titleFont="25px"
      />
      {sections?.map((item) => (
        <ArticleCard
          key={item.title}
          header={item.title}
          src={item.image}
          width="22vw"
          bgColor="rgba(0,0,0,0.6)"
          height={300}
          overLayHeight="100%"
          overLayWidth="100%"
          title={item.displayText}
          flexGrow={false}
        />
      ))}
    </div>
  );
}

export default Sidebar;
