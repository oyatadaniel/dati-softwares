import React from "react";
import { Container, Row, Col, Button, Card, CardBody } from "react-bootstrap";

export default function WebDevelopment() {
  return (
    <div className="mt-2 mb-4">
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
            Web Development
          </li>
        </ol>
      </nav>
      <div className="py-3">
        <h2 className="mb-4">Web Development</h2>

        <p>
          At <strong>Your Company Name</strong>, we build more than just
          websites — we craft <strong>digital experiences</strong> that are
          fast, scalable, and user-friendly.
        </p>

        <p>
          Our web development team combines creativity and cutting-edge
          technology to deliver solutions that help your business{" "}
          <strong>stand out online</strong>. Whether you need a sleek corporate
          site, a dynamic e-commerce platform, or a powerful web application,
          we’ve got you covered.
        </p>

        <h4 className="mt-5"> What We Offer</h4>
        <Row className="gy-4 mt-3">
          {[
            {
              title: "Custom Website Design & Development",
              text: "Tailored to your brand and audience.",
            },
            {
              title: "Responsive & Mobile-First Design",
              text: "Seamless experiences across all devices.",
            },
            {
              title: "E-commerce Solutions",
              text: "Secure, scalable, and conversion-focused.",
            },
            {
              title: "Web Applications",
              text: "Built to streamline workflows and enhance productivity.",
            },
            {
              title: "SEO & Performance Optimization",
              text: "Fast, discoverable, and reliable websites.",
            },
            {
              title: "Ongoing Support & Maintenance",
              text: "We grow with you, not just launch and leave.",
            },
          ].map((offer, i) => (
            <Col md={4} key={i}>
              <div className="h-100  border-0 wedo">
                <h6 className="fw-bold mb-2">{offer.title}</h6>
                <p className="mb-0">{offer.text}</p>
              </div>
            </Col>
          ))}
        </Row>

        <h4 className="mt-5">Why Choose Us?</h4>
        <div className=" mt-3">
          <p>
            {" "}
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
            </svg>{" "}
            &nbsp;A team of passionate developers and designers.
          </p>
          <p>
            {" "}
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
            </svg>{" "}
            &nbsp; Focus on <strong>quality, usability, and innovation</strong>.
          </p>
          <p>
            {" "}
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
            </svg>{" "}
            &nbsp;Transparent process with on-time delivery.
          </p>
          <p>
            {" "}
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
            </svg>{" "}
            &nbsp;Long-term partnerships, not just one-time projects.
          </p>
        </div>

        <p className="mt-4">
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
          </svg>{" "}
          &nbsp; Your website is often the <strong>first impression</strong>{" "}
          your clients get — let’s make it unforgettable.
        </p>

        <a href="/dati/contact" className=" btn mt-3 btn-custome">
          Let’s Build Your Vision Today &nbsp;
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
  );
}
