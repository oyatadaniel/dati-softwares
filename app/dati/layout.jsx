"use client";

import Footer from "../components/Footer";
import NavBarNav from "../components/NavBarNav";
import TopBar from "../components/TopBar";

export default function RootLayout({ children }) {
  return (
    <div>
      <TopBar />
      <NavBarNav />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}
