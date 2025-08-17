import React from "react";

export default function AboutUs() {
  return (
    <div className="mt-4">
      <div className="row align-items-center">
        <div className="col-md-6 about">
          <h2>Who we are</h2>
          <p className="text-muted">
            At DATI Softwares, we are driven by innovation, creativity, and a
            passion for excellence. Our mission is to deliver cutting-edge
            digital solutions that empower businesses and individuals to achieve
            their goals in today’s fast-paced world.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/about.jpg"
            alt="About Us"
            className="img-fluid w-100"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}
