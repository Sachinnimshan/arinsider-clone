import React from "react";
import styles from "./footer.module.css";
import { footerLinks } from "../../routes/navigation";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

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
              <span key={item.title} className={styles.footerLink}>
                {link.title}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.socialMediaContainer}>
        <AiFillLinkedin className={styles.socialIcon} />
        <AiOutlineTwitter className={styles.socialIcon} />
        <BsFacebook className={styles.socialIcon} />
        <FaYoutube className={styles.socialIcon} />
      </div>
    </div>
  );
}

export default Footer;
