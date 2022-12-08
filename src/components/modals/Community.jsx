import React from "react";
import styles from "./Community.module.css";

const Community = () => {
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="Community_popup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                COMMUNITY SITE
              </h1>
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
                  A platform made for the local bussiness located in the county
                  of California,USA.
                </li>
                <li>
                  Worked on designing and developing the front-end of the
                  website with HTML,Css,Bootstrap,Jquery and JavaScript.
                </li>
                <li>Gained skills on responsive Web-Designs.</li>
                <li>
                  Worked in a team and provided quality front-end solutions.
                </li>
                <li>
                  Being in team with backend got to know the working bridge of
                  front-end and back-end.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
