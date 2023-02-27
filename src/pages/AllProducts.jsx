import React from "react";
import Product from "../components/Product";
import { AllProducts } from "../database/productsDatabase";

const AllOfProducts = () => {
  return (
    <div className="all-products">
      <div className="all-products-container">
        {AllProducts.map((product) => {
          return <Product {...product} />;
        })}
      </div>
    </div>
  );
};

export default AllOfProducts;
