"use client";

export default function InformationSystemsDevelopment() {
  return (
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
            Information Systems
          </li>
        </ol>
      </nav>
      <div className="py-3">
        {/* Heading */}
        <div className="row mb-4 ">
          <div className="col">
            <h2 className="fw-bold"> Information Systems Development</h2>
            <p className="text-muted">
              We design and build robust, scalable, and secure information
              systems that streamline your business processes, enhance
              efficiency, and support growth.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="wedo h-100 ">
              <div className="">
                <h6 className="fw-bold mb-2"> Custom Business Solutions</h6>
                <p>Tailored systems for HR, Finance, Sales, and Operations.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="wedo h-100 ">
              <div className="">
                <h6 className="fw-bold mb-2"> ERP & CRM Systems</h6>
                <p>
                  Streamlined enterprise resource planning and customer
                  management.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="wedo h-100 ">
              <div className="">
                <h6 className="fw-bold mb-2"> Database Design</h6>
                <p>Efficient, secure, and scalable database solutions.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="wedo h-100 ">
              <div className="">
                <h6 className="fw-bold mb-2"> System Integration</h6>
                <p>Connecting multiple platforms into one seamless system.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="wedo h-100 ">
              <div className="">
                <h6 className="fw-bold mb-2"> Cloud-Based Solutions</h6>
                <p>
                  Accessible, scalable, and secure cloud-hosted information
                  systems.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="wedo h-100 ">
              <div className="">
                <h6 className="fw-bold mb-2"> Analytics & Reporting</h6>
                <p>
                  Gain insights with dashboards, reports, and business
                  intelligence tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row  mt-5">
          <div className="col">
            <h3 className="fw-bold"> Why Work With Us?</h3>
            <p>
              • End-to-end system development from planning to deployment <br />
              • Agile, scalable, and future-proof solutions <br />
              • Expertise across industries (healthcare, finance, education,
              retail) <br />• Strong focus on data security and compliance
            </p>
            <a href="/dati/contact" className="btn mt-3 btn-custome">
              Build Your System With Us&nbsp;
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
  );
}
