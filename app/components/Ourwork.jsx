import React from "react";

export default function Ourwork() {
  return (
    <div
      className="about-section py-5 d-flex align-items-center mt-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/second.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
      }}
    >
      <div className="container text-white">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2>Some Of Our Projects</h2>
            <div className="row">
              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 ">
                    <img
                      src="/td.jpg"
                      className="card-img-top"
                      alt="Innovation"
                    />
                    <div className="card-body">
                      <p
                        className="card-text small"
                        style={{ fontSize: "12px", color: "#01c49b" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-link-45deg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>{" "}
                        https://trademarkdev.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 text-center">
                    <img
                      src="/hms.jpg"
                      className="card-img-top"
                      alt="Quality"
                    />
                    <div className="card-body">
                      <p
                        className="card-text small"
                        style={{ fontSize: "12px", color: "#01c49b" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-link-45deg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>{" "}
                        https://www.trademarkhms.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 ">
                    <img
                      src="/ack.jpg"
                      className="card-img-top"
                      alt="Teamwork"
                    />
                    <div className="card-body">
                      <p
                        className="card-text small"
                        style={{ fontSize: "12px", color: "#01c49b" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-link-45deg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>{" "}
                        https://ackdioceseofmasenonorth.org
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
