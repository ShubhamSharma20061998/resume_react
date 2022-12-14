import React from "react";
import styles from "./HospitalManagement.module.css";

const HospitalManagement = () => {
  return (
    <div
      className={`modal fade ${styles.modal}`}
      id="hospital_popup"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-hidden="true"
    >
      {/* Vertically centered modal */}
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">HOSPITAL MANAGEMENT</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <ul>
              <li>
                Worked on designing and developing the front-end of the website
                with HTML,CSS and React.
              </li>
              <li>Making API calls and made to reflect on the UI.</li>
              <li>
                Came to know about the rending of the UI based on conditions.
              </li>
              <li>Working in a team came to know about being a teamplayer.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalManagement;
