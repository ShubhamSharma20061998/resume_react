import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import styles from "./AdditionalTraining.module.css";
const AdditionalTraining = () => {
  return (
    <>
      <div className={styles.vocational_training}>
        <h5>TATA STEEL LTD.</h5>
        <h6>SD-WAN PERFORMANCE AND EVALUATION</h6>
        <span>
          <AiFillCalendar />
          June 2019 - July 2019
        </span>
        <span>
          <MdLocationOn />
          Jamshedpur,India
        </span>
        <ul>
          <li>Completed training on SD-WAN PERFORMANCE AND EVALUATION.</li>
          <li>
            The objective of the training was to observe and monitor the traffic
            flow and the usuage of the internet by the employees.
          </li>
          <li>
            To perform the above we were introducted ro a new technology
            [SD-WAN] Software defined wide area networking.
          </li>
          <li>Understood the working of the Internet.</li>
        </ul>
      </div>
      <div className="machine_learning">
        <h5>ARDENT COMPUTECH PVT LTD</h5>
        <h6>MACHINE LEARNING WITH PYTHON</h6>
        <span>
          <AiFillCalendar />
          December 2019 - January 2020
        </span>
        <span>
          <MdLocationOn />
          Kolkata,India
        </span>
        <h6>PREDICTING HEART DISEASE</h6>
        <ul>
          <li>Completed training on MACHINE LEARNING WITH PYTHON.</li>
          <li>
            Made a project to predict the chances of having heart disease, by
            taking various inputs and criteria.
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdditionalTraining;
