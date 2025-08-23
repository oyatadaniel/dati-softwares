import React from "react";

export default function MobileAppDevelopment() {
  return (
    <div>
      <div className="container mt-2">
        <nav aria-label="breadcrumb fixed-top">
          <ol
            className="breadcrumb"
            style={{ fontSize: "10px", color: "#969799" }}
          >
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Services</a>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#01c49b" }}
            >
              Mobile App
            </li>
          </ol>
        </nav>
        <div className="py-3">
          <div className="row mb-4 ">
            <div className="col">
              <h2 className="fw-bold">Mobile App Development</h2>
              <p className="text-muted">
                We transform ideas into powerful mobile experiences with
                high-performance, user-friendly apps for iOS and Android.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className=" h-100 wedo ">
                <div className="">
                  <h6 className="fw-bold mb-2"> iOS & Android Development</h6>
                  <p>
                    Native or cross-platform apps tailored to your business
                    goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className=" h-100 wedo ">
                <div className="">
                  <h6 className="fw-bold mb-2"> Cross-Platform Solutions</h6>
                  <p>Cost-effective development with React Native & Flutter.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className=" h-100 wedo ">
                <div className="">
                  <h6 className="fw-bold mb-2"> UI/UX Design</h6>
                  <p>Clean, modern, and user-centered interfaces.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className=" h-100 wedo ">
                <div className="">
                  <h6 className="fw-bold mb-2"> API & Backend Integration</h6>
                  <p>
                    Secure, scalable connections between your app and backend
                    systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className=" h-100 wedo ">
                <div className="">
                  <h6 className="fw-bold mb-2"> E-commerce & Business Apps</h6>
                  <p>From booking systems to full online stores.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className=" h-100 wedo ">
                <div className="">
                  <h6 className="fw-bold mb-2"> Maintenance & Support</h6>
                  <p>
                    Continuous updates, performance tuning, and new features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="row  mt-5">
            <div className="col">
              <h3 className="fw-bold"> Why Choose Us?</h3>
              <p>
                • User-focused design that keeps engagement high <br />
                • Scalable architecture that grows with your business <br />
                • Agile development process for faster time-to-market <br />•
                Transparent communication and long-term support
              </p>
              <a href="/dati/contact" className="btn mt-3 btn-custome">
                Let’s Build Your App&nbsp;{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
