import React from "react";
import styles from "./footer.module.css";
import { footerLinks } from "../../routes/navigation";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import SiteLogo from "../common/logo";

function Footer() {
  const socialIcons = [
    {
      title: "Linkedin",
      icon: <AiFillLinkedin />,
    },
    {
      title: "Twitter",
      icon: <AiOutlineTwitter />,
    },
    {
      title: "Facebook",
      icon: <BsFacebook />,
    },
    {
      title: "Youtube",
      icon: <FaYoutube />,
    },
  ];
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTopContainer}>
        <div className={styles.siteLogoContainer}>
          <SiteLogo className={styles.siteLogoFooter} />
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
        {socialIcons?.map((icon) => (
          <span className={styles.socialIcon} key={icon.title}>
            {icon.icon}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Footer;
