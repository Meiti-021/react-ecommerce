import React from "react";
import { TbError404 } from "../database/icons";

const Product404 = () => {
  return (
    <div className="product404">
      <p> هیچ محصولی پیدا نشد!</p>
      <p>
        <TbError404 className="error-icon" />
      </p>
    </div>
  );
};

export default Product404;
