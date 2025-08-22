"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarNav() {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);

  // Dropdown is active only for /services/*
  const isServiceActive = pathname.startsWith("/services/");

  useEffect(() => {
    const handleScroll = () => {
      // Change 200 to whatever scrollY threshold you want
      if (window.scrollY > 28) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-white shadow-sm transition-navbar ${
          isFixed ? "fixed-top" : ""
        }`}
      >
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand p-0 m-0" href="#">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: "140px", height: "auto" }}
            />
          </a>

          {/* Toggler (Hamburger) */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <Link
                  href="/"
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  href="/dati/our-apps"
                  className={`nav-link ${
                    pathname === "/dati/our-apps" ? "active" : ""
                  }`}
                >
                  Apps
                </Link>
              </li>
              <li
                className={`nav-item dropdown mx-2 ${
                  isServiceActive ? "active" : ""
                }`}
              >
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </a>
                <ul
                  className="dropdown-menu my-menu"
                  aria-labelledby="servicesDropdown"
                >
                  <li>
                    <Link
                      href="/services/web-dev"
                      className={`dropdown-item ${
                        pathname === "/services/web-dev" ? "active" : ""
                      }`}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/mobile-apps"
                      className={`dropdown-item ${
                        pathname === "/services/mobile-apps" ? "active" : ""
                      }`}
                    >
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cloud"
                      className={`dropdown-item ${
                        pathname === "/services/cloud" ? "active" : ""
                      }`}
                    >
                      Information Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cloud"
                      className={`dropdown-item ${
                        pathname === "/services/cloud" ? "active" : ""
                      }`}
                    >
                      Cloud Solutions
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <Link
                  href="/dati/contact"
                  className={`nav-link ${
                    pathname === "/dati/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
