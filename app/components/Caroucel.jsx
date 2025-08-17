import React from "react";

export default function Caroucel() {
  return (
    <div>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="/caro.jpg"
              className="d-block w-100 carousel-img"
              alt="Custom Software"
            />
            <div className="carousel-caption d-flex h-100 align-items-center justify-content-start text-start">
              <div className="animated-text">
                <h2 className="fw-bold">Custom Software Development</h2>
                <p>
                  We build scalable, reliable, and secure software tailored to
                  your business.
                </p>
                <a href="#services" className="btn btn-primary btn-lg mt-3">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="/caro.jpg"
              className="d-block w-100 carousel-img"
              alt="Web & Mobile Apps"
            />
            <div className="carousel-caption d-flex h-100 align-items-center justify-content-start text-start">
              <div className="animated-text">
                <h2 className="fw-bold">Web & Mobile Applications</h2>
                <p>
                  Engaging apps with beautiful UI/UX across platforms for modern
                  businesses.
                </p>
                <a href="#portfolio" className="btn btn-light btn-lg mt-3">
                  See Our Work
                </a>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="/caro.jpg"
              className="d-block w-100 carousel-img"
              alt="Cloud Solutions"
            />
            <div className="carousel-caption d-flex h-100 align-items-center justify-content-start text-start">
              <div className="animated-text">
                <h2 className="fw-bold">Cloud Solutions</h2>
                <p>
                  Scale your business with cost-effective, secure, and flexible
                  cloud platforms.
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg mt-3"
                >
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
