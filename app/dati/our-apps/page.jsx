import React from "react";

export default function Apps() {
  return (
    <div>
      <div className="mb-2 mt-2">
        <h2>Our Apps</h2>
      </div>
      <p className="small text-muted">
        Explore our suite of innovative software solutions designed to simplify
        your work, enhance productivity, and drive digital transformation. Each
        application is built with efficiency, reliability, and user experience
        in mind to meet the unique needs of modern businesses.
      </p>

      <div className="mt-4">
        <div className="card p-4 mb-4">
          <div className="row g-4">
            <div className="col-md-2 col-4 d-flex">
              <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                <img src="/hospital.png" alt="" style={{ width: "40%" }} />
                <span className="text-muted mt-2" style={{ fontSize: "10px" }}>
                  Hospital Management System
                </span>
              </div>
            </div>

            <div className="col-md-2 col-4 d-flex">
              <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                <img
                  src="/office-building.png"
                  alt=""
                  style={{ width: "40%" }}
                />
                <span className="text-muted mt-2" style={{ fontSize: "10px" }}>
                  Office Management System
                </span>
              </div>
            </div>

            <div className="col-md-2 col-4 d-flex">
              <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                <img src="/office-worker.png" alt="" style={{ width: "40%" }} />
                <span className="text-muted mt-2" style={{ fontSize: "10px" }}>
                  Human Resource
                </span>
              </div>
            </div>

            <div className="col-md-2 col-4 d-flex">
              <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                <img src="/pos-terminal.png" alt="" style={{ width: "40%" }} />
                <span className="text-muted mt-2" style={{ fontSize: "10px" }}>
                  POS
                </span>
              </div>
            </div>

            <div className="col-md-2 col-4 d-flex">
              <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                <img src="/school.png" alt="" style={{ width: "40%" }} />
                <span className="text-muted mt-2" style={{ fontSize: "10px" }}>
                  School Management System
                </span>
              </div>
            </div>

            <div className="col-md-2 col-4 d-flex">
              <div className="card p-4 d-flex flex-column align-items-center text-center h-100">
                <img src="/shopping.png" alt="" style={{ width: "40%" }} />
                <span className="text-muted mt-2" style={{ fontSize: "10px" }}>
                  E-Commerce
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
