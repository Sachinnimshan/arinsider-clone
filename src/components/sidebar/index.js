import useResponsive from "@/hooks/useResponsive";
import React from "react";
import ArticleCard from "../common/articlecard";
import { SiteIconDark } from "../common/icons";
import Logo from "../common/logo";
import YoutubeCard from "../iframe";

function Sidebar() {
  const isMobile = useResponsive();
  const sections = [
    {
      title: "Weekly Newsletter",
      image: "/images/newsletter.webp",
      displayText: "Subscribe & Get a Free White Paper",
    },
    {
      title: "Latest Articles",
      image: [],
      displayText: "",
    },
    {
      title: "Business & Intelligence",
      image: [],
      displayText: "",
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
      {sections?.map((item) => (
        <ArticleCard
          key={item.title}
          header={item.title}
          src={item.image}
          width="22vw"
          bgColor="rgba(0,0,0,0.6)"
          height={300}
          overLayHeight="100%"
          title={item.displayText}
        />
      ))}
    </div>
  );
}

export default Sidebar;
