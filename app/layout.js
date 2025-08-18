"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        {/* ✅ Basic SEO Meta Tags */}
        <title>DATI Softwares | Software Development & IT Solutions</title>
        <meta
          name="description"
          content="DATI Softwares specializes in software development, web design, mobile apps, and IT solutions. We build modern, responsive, and scalable digital solutions for businesses."
        />
        <meta
          name="keywords"
          content="DATI Softwares, software development, web design, mobile apps, IT solutions, information system development, Kenya"
        />
        <meta name="author" content="DATI Softwares" />

        {/* ✅ Mobile & Browser Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* ✅ Open Graph (Social Media Preview) */}
        <meta property="og:title" content="DATI Softwares" />
        <meta
          property="og:description"
          content="We design and develop responsive websites, mobile apps, and custom software solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/your-preview-image.jpg"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DATI Softwares" />
        <meta
          name="twitter:description"
          content="Modern software development, web design, mobile apps & IT solutions."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/your-preview-image.jpg"
        />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
