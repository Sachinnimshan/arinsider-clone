import React from "react";
import styles from "./footer.module.css";
import { footerLinks } from "../../routes/navigation";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTopContainer}>
        <div className={styles.siteLogoContainer}>
          <img src="/images/siteLogo.webp" className={styles.siteLogoFooter} />
          <span className={styles.copyRightText}>© 2017-2023 AR Insider</span>
        </div>

        {footerLinks.map((item) => (
          <div className={styles.footerLinkItem} key={item.title}>
            <span className={styles.footerLinkTitle}>{item.title}</span>
            {item?.subCategories?.map((link) => (
              <span key={item.title} className={styles.footerLink}>{link.title}</span>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.socialMediaContainer}></div>
    </div>
  );
}

export default Footer;
