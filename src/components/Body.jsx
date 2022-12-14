import React from "react";
import styles from "./Body.module.css";
import { AiFillCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import HospitalManagement from "./modals/HospitalManagement";
import { useState } from "react";
import StructuralEngineering from "./modals/StructuralEngineering";
import Vesoma from "./modals/Vesoma";
import AdditionalTraining from "./additional-Traning/AdditionalTraining";
import { GiProgression, GiBackwardTime, GiBookCover } from "react-icons/gi";
import Community_1 from "./modals/Community_1";

const Body = () => {
  const [hospital_popup, setHospital] = useState(false);
  const [structural_popup, setStructural] = useState(false);
  const [community, setCommunity] = useState(false);
  const [vesoma, setVesoma] = useState(false);
  return (
    <main className="container">
      <div className="row">
        <div className={`${styles.left_wing} col-md-8`}>
          <div className="summary">
            <h3>SUMMARY</h3>
            <div className={`${styles.underline}`}></div>
            <p>
              Entry-level front-end developer with experience in building web
              pages and components. Seeking for new opportunities and challenges
              that will expand my skill set.
            </p>
          </div>
          <div className={`${styles.education}`}>
            <h3>EDUCATION</h3>
            <div className={`${styles.underline}`}></div>
            <h5>FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT</h5>
            <h6>B.Tech [Computer Science and Engineering]</h6>
            <span>
              <AiFillCalendar className={styles.icons} />
              2017-2021
            </span>
            <span className={styles.location}>
              <MdLocationOn className={styles.icons} />
              Kolkata,India
            </span>
            <div>
              <span>Overall CGPA | </span>
              <span>8.14/10</span>
            </div>
          </div>
          <div className={styles.experience}>
            <h3>EXPERIENCE</h3>
            <div className={`${styles.underline}`}></div>
            <div className={`${styles.test_yantra}`}>
              <h5>Front-End Development Intern</h5>
              <span>
                <AiFillCalendar className={styles.icons} />
                Jan2021 - Aug2021
              </span>
              <span className={styles.location}>
                <MdLocationOn className={styles.icons} />
                Bangalore,India - Office
              </span>
              <ul>
                <li>
                  Completed training in Web Development with React, along with
                  hands on projects.
                </li>
                <li>
                  Successfully performing maintenance and debugging on the
                  front-end, which is based on HTML, CSS and React.
                </li>
              </ul>
              <h6
                className={styles.project_heading}
                data-bs-toggle="modal"
                data-bs-target="#hospital_popup"
                onClick={() => setHospital(!hospital_popup)}
              >
                1.Hospital Management
              </h6>
              <>{hospital_popup ? <HospitalManagement /> : null}</>
              {/* modal for hospital management */}
            </div>
            <div className={`${styles.adwit}`}>
              <h5>Front-End Developer</h5>
              <span>
                <AiFillCalendar className={styles.icons} />
                Aug2021 - Ongoing
              </span>
              <span className={styles.location}>
                <MdLocationOn className={styles.icons} />
                Bangalore,India - Office
              </span>
              <ul>
                <li>Completed Training on Wix.</li>
                <li>Completed Training on Shopify.</li>
                <li>
                  Successfully performing maintenance and debugging on the
                  front-end, which is based on HTML, CSS and JavaScript.
                </li>
                <li>Designing and developing responsive webpages.</li>
              </ul>
              <div className={styles.community_site}>
                <h6
                  className={styles.project_heading}
                  data-bs-toggle="modal"
                  data-bs-target="#Community_popup"
                  onClick={() => setCommunity(!community)}
                >
                  1.Community Site
                </h6>
                <>{community ? <Community_1 /> : null}</>
              </div>
              <div className="Barcus">
                <h6
                  className={styles.project_heading}
                  data-bs-toggle="modal"
                  data-bs-target="#Structural_popup"
                  onClick={() => {
                    setStructural(!structural_popup);
                  }}
                >
                  2.Structural Engineering
                </h6>
                <>{structural_popup ? <StructuralEngineering /> : null}</>
              </div>
              <div className="vesoma">
                <h6
                  className={styles.project_heading}
                  data-bs-toggle="modal"
                  data-bs-target="#Vesoma_popup"
                  onClick={() => setVesoma(!vesoma)}
                >
                  3.Vesoma
                </h6>
                <>{vesoma ? <Vesoma /> : null}</>
              </div>
            </div>
          </div>
          <div className="additional_training">
            <h3>ADDITIONAL TRAINING</h3>
            <div className={`${styles.underline}`}></div>
            <>
              <AdditionalTraining />
            </>
          </div>
        </div>
        <div className={`col ${styles.right_wing}`}>
          <div className={styles.industry_skills}>
            <h3>INDUSTRY SKILLS</h3>
            <div className={`${styles.underline}`}></div>
            <div className="skills">
              <div className={`row ${styles.recent}`}>
                <span className="col">HTML</span>
                <span className="col">CSS</span>
                <span className="col">JAVASCRIPT</span>
                <span className="col">REACT</span>
                <span className="col">JQUERY</span>
                <span className="col">WIX</span>
              </div>
              <div className={`row ${styles.pervious}`}>
                <span className="col">TailwindCSS</span>
                <span className="col">Ant-Design</span>
              </div>
            </div>
          </div>
          <div className={styles.strengths}>
            <h3>STRENGHTS</h3>
            <div className={`${styles.underline}`}></div>
            <div className="strength_list">
              <div className={`row ${styles.learn_skills}`}>
                <div className="col">
                  <span>
                    <GiBookCover className={styles.icons} />
                  </span>
                  <span>
                    <b>Eager to learn new skills</b>
                    <br />
                    As a person who is starting out, I am constantly seeking for
                    new ways to grow and expand my skill set.
                  </span>
                </div>
              </div>
              <div className={`row ${styles.failure}`}>
                <div className="col">
                  <span>
                    <GiProgression className={styles.icons} />
                  </span>
                  <span>
                    <b>Not afraid of failure</b>
                    <br />
                    Strong believer in the mantra that we learn from our
                    mistakes.
                  </span>
                </div>
              </div>
              <div className={`row ${styles.Time_management}`}>
                <div className="col">
                  <span>
                    <GiBackwardTime className={styles.icons} />
                  </span>
                  <span>
                    <b>Time management</b>
                    <br /> I always set aside time to plan my week and
                    distribute the workload by days so that I can simultaneously
                    meet deadlines and maintain my well-being.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
