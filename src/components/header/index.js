import { navigationRoutes } from "@/routes/navigation";
import React, { useState } from "react";
import NavItem from "../navItem";
import styles from "./header.module.css";
NavItem;

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const handleShow = () => setSidebar(!sidebar);
  const handleClose = () => setSidebar(false);
  return (
    <div className={styles.headerContainer}>
      <img
        className={styles.siteLogo}
        src="/images/siteLogo.webp"
        alt="Ar Insider"
      />
      <div className={styles.navigationContainer}>
        {navigationRoutes.map((item) => (
          <NavItem key={item.title} title={item.title} menuItems={item.subCategories} />
        ))}
      </div>
    </div>
  );
}

export default Header;
