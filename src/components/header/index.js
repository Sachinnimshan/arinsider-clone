import { navigationRoutes } from "@/routes/navigation";
import React, { useEffect, useState, useRef } from "react";
import DropDown from "../common/dropdown";
import styles from "./header.module.css";
import { IoMenuSharp } from "react-icons/io5";
import { SiteIconLight } from "../common/icons";
import Logo from "../common/logo";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const handleShow = () => setSidebar(!sidebar);
  const handleClose = () => setSidebar(false);
  const sidebarRef = useRef(null);

  const handleOutSideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      handleClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [sidebarRef]);

  return (
    <div className={styles.headerContainer}>
      <Logo src={SiteIconLight} className={styles.siteLogo} />

      <div className={styles.headerRightSide}>
        <IoMenuSharp className={styles.menuIcon} onClick={handleShow} />
        <div
          className={sidebar ? styles.sidebarContainer : styles.menuContainer}
          ref={sidebarRef}
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
