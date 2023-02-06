import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeadphonesPage from "./HeadPhonePage";
import LandingPage from "./LandingPage";
import LaptopPage from "./LaptopPage";
import MobilePage from "./MobilePage";
import TvPage from "./SmartTvPage";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      {/* <LandingPage /> */}
      <MobilePage />
      {/* <LaptopPage /> */}
      {/* <TvPage /> */}
      {/* <HeadphonesPage /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
