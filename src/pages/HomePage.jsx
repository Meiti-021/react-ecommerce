import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "./LandingPage";
import MobilePage from "./MobilePage";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      {/* <LandingPage /> */}
      <MobilePage />
      <Footer />
    </div>
  );
};

export default HomePage;
