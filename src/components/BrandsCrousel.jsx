import React from "react";
import Brand from "./Brand";
import { brandsData } from "../database/mockdata";
const BrandsCrousel = () => {
  return (
    <>
      <div className="animation-brands">
        <div className="brands">
          {brandsData.map((brand) => {
            return <Brand {...brand} />;
          })}
          {brandsData.map((brand) => {
            return <Brand {...brand} />;
          })}
          {brandsData.map((brand) => {
            return <Brand {...brand} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BrandsCrousel;
