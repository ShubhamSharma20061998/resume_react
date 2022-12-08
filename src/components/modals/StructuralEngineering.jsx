import React from "react";
import styles from "./StructuralEngineering.module.css";

const StructuralEngineering = () => {
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="Structural_popup"
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
                STRUCTURAL ENGINEERING
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
                <li>Completed Web Developement training in Wix.</li>
                <li>
                  Performed daily operations to ensure all solutions for client.
                </li>
                <li>
                  A static and responsive website for complete company overview.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StructuralEngineering;
