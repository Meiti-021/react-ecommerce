import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "./LandingPage";
import LaptopPage from "./LaptopPage";
import MobilePage from "./MobilePage";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      {/* <LandingPage /> */}
      {/* <MobilePage /> */}
      <LaptopPage />
      <Footer />
    </div>
  );
};

export default HomePage;
