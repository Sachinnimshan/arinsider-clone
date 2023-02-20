import useResponsive from "@/hooks/useResponsive";
import React from "react";
import ArticleCard from "../common/articlecard";
import { SiteIconDark } from "../common/icons";
import Logo from "../common/logo";

function Sidebar() {
  const isMobile = useResponsive();
  const sections = [
    {
      title: "Weekly Newsletter",
      content: [],
    },
    {
      title: "Latest Articles",
      content: [],
    },
    {
      title: "Business & Intelligence",
      content: [],
    },

    {
      title: "Visibility & Sponsorship",
      content: [],
    },
  ];
  return (
    <div className="sidebarContainer">
      <Logo src={SiteIconDark} className="siteIconDark" />
      {sections?.map((item) => (
        <ArticleCard
          key={item.title}
          header={item.title}
          width="22vw"
          bgColor="rgba(0,0,0,0.8)"
          height={300}
        />
      ))}
    </div>
  );
}

export default Sidebar;
