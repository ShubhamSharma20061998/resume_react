import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <main className={`container ${styles.footer_container}`}>
        This resume is made using React, CSS, BootStrap and is fully responsive.
      </main>
    </footer>
  );
};

export default Footer;
