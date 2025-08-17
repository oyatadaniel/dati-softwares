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
                        src="/icons/innovation.png"
                        alt="Innovation"
                        style={{ width: "60px", marginBottom: "15px" }}
                      />
                      <h5 className="card-title">Innovation</h5>
                      <p className="card-text small">
                        Driving modern solutions that transform businesses
                        through cutting-edge technology.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 text-center">
                    <div className="card-body">
                      <img
                        src="/icons/quality.png"
                        alt="Quality"
                        style={{ width: "60px", marginBottom: "15px" }}
                      />
                      <h5 className="card-title">Quality</h5>
                      <p className="card-text small">
                        Delivering high-quality solutions that ensure
                        reliability and excellence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 text-center">
                    <div className="card-body">
                      <img
                        src="/icons/team.png"
                        alt="Teamwork"
                        style={{ width: "60px", marginBottom: "15px" }}
                      />
                      <h5 className="card-title">Teamwork</h5>
                      <p className="card-text small">
                        Collaboration and partnership to bring ideas to life and
                        achieve success together.
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
