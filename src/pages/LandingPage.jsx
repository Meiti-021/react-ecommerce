import React from "react";
import BestSellers from "../components/BestSellers";
import BrandsCrousel from "../components/BrandsCrousel";
import Hero from "../components/Hero";
import LastDealers from "../components/LastDealers";
import NewslettersSignUp from "../components/NewslettersSignUp";
import ServiceOptions from "../components/ServiceOptions";
import TopTrends from "../components/TopTrends";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <main>
        <BrandsCrousel />
        <TopTrends />
        <BestSellers />
        <LastDealers />
        <ServiceOptions />
        <NewslettersSignUp />
      </main>
    </div>
  );
};

export default LandingPage;
