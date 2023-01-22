import React from "react";
import BestSellers from "../components/BestSellers";
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
        <BestSellers />
      </main>
    </div>
  );
};

export default LandingPage;
