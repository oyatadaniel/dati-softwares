import NavBarNav from "./components/NavBarNav";
import Caroucel from "./components/Caroucel";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import WhyUs from "./components/WhyUs";
import Ourwork from "./components/Ourwork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <NavBarNav />
      <Caroucel />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <AboutUs />
          </div>
        </div>
      </div>
      <Projects />
      <WhyUs />
      <Ourwork />
      <Contact />
      <Footer />
    </div>
  );
}
