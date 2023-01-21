import React from "react";
import BrandsCrousel from "../components/BrandsCrousel";
import Hero from "../components/Hero";
import TopTrends from "../components/TopTrends";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <main>
        <BrandsCrousel />
        <TopTrends />
      </main>
    </div>
  );
};

export default LandingPage;
