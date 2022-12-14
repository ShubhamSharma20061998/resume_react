import React from "react";
import styles from "./Community.module.css";

const Community_1 = () => {
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
            <h1 className="modal-title fs-5">VESOMA</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <ul>
              <li>Completed Web Developement training in Wix.</li>
              <li>
                Performed daily operations to ensure all solutions for client.
              </li>
              <li>
                A static and responsive website for complete facility and
                programs overview.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community_1;
