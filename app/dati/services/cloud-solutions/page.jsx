"use client";

export default function CloudSolutions() {
  return (
    <div className="container mt-2 ">
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
            Cloud Solutions
          </li>
        </ol>
      </nav>
      <div className="py-3">
        <div className="row mb-4">
          <div className="col">
            <h2 className="fw-bold">Cloud Solutions</h2>
            <p className="text-muted">
              We help businesses harness the power of the cloud with secure,
              scalable, and cost-effective solutions that drive innovation and
              efficiency.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className=" h-100 wedo">
              <div className="">
                <h6 className="fw-bold mb-2"> Cloud Migration</h6>
                <p>
                  Seamlessly move your applications, data, and infrastructure to
                  the cloud.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className=" h-100 wedo">
              <div className="">
                <h6 className="fw-bold mb-2"> Cloud Infrastructure</h6>
                <p>
                  Set up and manage scalable cloud servers, storage, and
                  networks.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className=" h-100 wedo">
              <div className="">
                <h6 className="fw-bold mb-2"> SaaS Development</h6>
                <p>
                  Build and deploy powerful software-as-a-service applications.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className=" h-100 wedo">
              <div className="">
                <h6 className="fw-bold mb-2"> Cloud Security</h6>
                <p>
                  Protect your data with advanced security, compliance, and
                  backup solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className=" h-100 wedo">
              <div className="">
                <h6 className="fw-bold mb-2"> DevOps & Automation</h6>
                <p>
                  Streamline development and deployment with cloud-based CI/CD
                  pipelines.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className=" h-100 wedo">
              <div className="">
                <h6 className="fw-bold mb-2"> Cloud Analytics</h6>
                <p>
                  Leverage cloud-powered big data tools to gain actionable
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row mt-5">
          <div className="col">
            <h4 className="fw-bold"> Why Choose Our Cloud Solutions?</h4>
            <p>
              • Expertise in AWS, Azure, and Google Cloud <br />
              • Scalable solutions that grow with your business <br />
              • Cost optimization for maximum ROI <br />• High availability and
              disaster recovery options
            </p>
            <a href="/dati/contact" className="btn mt-3 btn-custome">
              Start Your Cloud Journey&nbsp;
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
