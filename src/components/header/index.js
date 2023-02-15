import { navigationRoutes } from "@/routes/navigation";
import React, { useEffect, useState } from "react";
import DropDown from "../dropdown";
import styles from "./header.module.css";
import { IoMenuSharp } from "react-icons/io5";

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
      <div className={styles.headerRightSide}>
        <IoMenuSharp className={styles.menuIcon} onClick={handleShow} />
        <div
          className={sidebar ? styles.sidebarContainer : styles.menuContainer}
        >
          {navigationRoutes.map((item) => (
            <DropDown
              key={item.title}
              title={item.title}
              menuItems={item.subCategories}
              expanded={sidebar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
