import React from "react";

export default function Caroucel() {
  return (
    <div>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active position-relative">
            <img
              src="/firstc.jpg"
              className="d-block w-100 carousel-img"
              alt="Custom Software"
            />

            {/* Dark Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            ></div>

            <div className="carousel-caption d-flex h-100 align-items-center justify-content-start text-start">
              <div className="animated-text">
                <h2 className="fw-bold">Custom Software Development</h2>
                <p>
                  We build scalable, reliable, and secure software tailored to
                  your business.
                </p>
                <a href="#services" className="btn btn-lg mt-3 btn-carousel">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative">
            <img
              src="/secondc.jpg"
              className="d-block w-100 carousel-img"
              alt="Web & Mobile Apps"
            />

            {/* Dark Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            ></div>

            <div className="carousel-caption d-flex h-100 align-items-center justify-content-start text-start">
              <div className="animated-text">
                <h2 className="fw-bold">Web & Mobile Applications</h2>
                <p>
                  Engaging apps with beautiful UI/UX across platforms for modern
                  businesses.
                </p>
                <a href="#portfolio" className="btn btn-lg mt-3 btn-carousel">
                  See Our Work
                </a>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative">
            <img
              src="/thirdc.jpg"
              className="d-block w-100 carousel-img"
              alt="Cloud Solutions"
            />

            {/* Dark Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            ></div>

            <div className="carousel-caption d-flex h-100 align-items-center justify-content-start text-start">
              <div className="animated-text">
                <h2 className="fw-bold">Cloud Solutions</h2>
                <p>
                  Scale your business with cost-effective, secure, and flexible
                  cloud platforms.
                </p>
                <a href="#contact" className="btn btn-lg mt-3 btn-carousel">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
