import React, { useState } from "react";
import styles from "./navItem.module.css";
import { RiArrowDownSFill } from "react-icons/ri";

function DropDown({ title, menuItems, expanded = false }) {
  const [dropDown, setDropDown] = useState(false);

  const handleShow = () => !expanded && setDropDown(!dropDown);
  const handleClose = () => !expanded && setDropDown(false);
  return (
    <div
      className={styles.navItemContainer}
      onMouseEnter={handleShow}
      onMouseLeave={handleClose}
    >
      <div className={expanded ? styles.navItemBordered : styles.navItem}>
        <span className={styles.navItemText}>{title}</span>
        {!expanded && menuItems && (
          <RiArrowDownSFill className={styles.dropDownIcon} />
        )}
      </div>
      <div
        className={expanded ? styles.expandedMenu : styles.dropDownContainer}
      >
        {expanded || dropDown ? (
          menuItems?.map((item) => (
            <span
              key={item.title}
              className={expanded ? styles.dropDownItemBordered : styles.dropDownItem}
            >
              {item.title}
            </span>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default DropDown;
