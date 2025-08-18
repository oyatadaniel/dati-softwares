import React from "react";

export default function Projects() {
  return (
    <div
      className="about-section py-5 d-flex align-items-center mt-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/first.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
      }}
    >
      <div className="container text-white">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2>Our Services</h2>
            <div className="row">
              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 text-center">
                    <div className="card-body">
                      <img
                        src="/web.png"
                        alt="Innovation"
                        style={{ width: "60px", marginBottom: "15px" }}
                      />
                      <h5 className="card-title" style={{ fontSize: "14px" }}>
                        Web Design & Development
                      </h5>
                      <p
                        className="card-text small text-muted"
                        style={{ fontSize: "12px" }}
                      >
                        Building responsive, user-friendly, and visually
                        appealing websites that work seamlessly across devices
                        and meet both functional and business needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 text-center">
                    <div className="card-body">
                      <img
                        src="/mobile.png"
                        alt="Quality"
                        style={{ width: "60px", marginBottom: "15px" }}
                      />
                      <h5 className="card-title" style={{ fontSize: "14px" }}>
                        Mobile Apps Development
                      </h5>
                      <p
                        className="card-text small text-muted"
                        style={{ fontSize: "12px" }}
                      >
                        Designing and building responsive, user-friendly
                        applications for Android and iOS devices that enhance
                        accessibility and deliver seamless digital experiences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 text-center">
                    <div className="card-body">
                      <img
                        src="/code.png"
                        alt="Teamwork"
                        style={{ width: "60px", marginBottom: "15px" }}
                      />
                      <h5 className="" style={{ fontSize: "14px" }}>
                        Information System Development
                      </h5>
                      <p
                        className="card-text text-muted "
                        style={{ fontSize: "12px" }}
                      >
                        Designing, building, and implementing software systems
                        that manage, process, and organize data to support
                        efficient decision-making and business operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
