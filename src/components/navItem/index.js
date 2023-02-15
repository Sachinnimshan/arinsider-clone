import React, { useState } from "react";
import styles from "./navItem.module.css";

function NavItem({ title, menuItems }) {
  const [dropDown, setDropDown] = useState(false);

  const handleShow = () => setDropDown(!dropDown);
  const handleClose = () => setDropDown(false);
  return (
    <div
      className={styles.navItem}
      onMouseEnter={handleShow} 
      onMouseLeave={handleClose}
    >
      {title}
      <div className={styles.dropDownContainer}>
      {dropDown && menuItems?.map((item) => (
        <span key={item.title} className={styles.dropDownItem}>{item.title}</span>
      ))}
      </div>
    </div>
  );
}

export default NavItem;
