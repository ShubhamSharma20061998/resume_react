import React from "react";
import styles from "./Header.module.css";
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdLocationOn } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <h1>SHUBHAM</h1>
      <h4>Front-End Developer</h4>
      <div className={`${styles.contact} row`}>
        <div className="phone col-sm-auto">
          <span>
            <BsFillTelephoneFill className={styles.icons} />
          </span>
          <span>
            <a href="tel:7004299656">
              +91-7004299656
              <span>
                <FiExternalLink />
              </span>
            </a>
          </span>
        </div>
        <div className="email col-sm-auto">
          <span>
            <MdOutlineAlternateEmail className={styles.icons} />
          </span>
          <span>
            <a href="mailto:shubhamjsp51@gmail.com">
              shubhamjsp51@gmail.com
              <span>
                <FiExternalLink />
              </span>
            </a>
          </span>
        </div>
        <div className="github col-sm-auto">
          <span>
            <BsGithub className={styles.icons} />
          </span>
          <span>
            <a href="https://github.com/ShubhamSharma20061998">
              GitHub Profile
              <span>
                <FiExternalLink />
              </span>
            </a>
          </span>
        </div>
        <div className="location col-sm-auto">
          <span>
            <MdLocationOn className={styles.icons} />
          </span>
          <span>Bangalore,India.</span>
        </div>
        <div className="linkedIn col-sm-auto">
          <span>
            <BsLinkedin className={styles.icons} />
          </span>
          <span>
            <a href="#">
              LinkedIn
              <span>
                <FiExternalLink />
              </span>
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
