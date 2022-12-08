import React from "react";
import styles from "./Header.module.css";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdLocationOn } from "react-icons/md";

const Header = () => {
  return (
    <header className="container">
      <h1>Shubham</h1>
      <h4>Front-End Developer</h4>
      <div className="contact row">
        <div className="phone col-sm-auto">
          <span>
            <BsFillTelephoneFill />
          </span>
          <span>
            <a href="tel:7004299656">+91-7004299656</a>
          </span>
        </div>
        <div className="email col-sm-auto">
          <span>
            <MdOutlineAlternateEmail />
          </span>
          <span>
            <a href="mailto:shubhamjsp51@gmail.com">shubhamjsp51@gmail.com</a>
          </span>
        </div>
        <div className="github col-sm-auto">
          <span>
            <BsGithub />
          </span>
          <span>
            <a href="https://github.com/ShubhamSharma20061998">
              GitHub Profile
            </a>
          </span>
        </div>
        <div className="location col-sm-auto">
          <span>
            <MdLocationOn />
          </span>
          <span>Bangalore,India.</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
