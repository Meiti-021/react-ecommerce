import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "./LandingPage";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default HomePage;
