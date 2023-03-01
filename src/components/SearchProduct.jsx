import React from "react";
import { Link } from "react-router-dom";
const SearchProduct = ({ id, name, model }) => {
  return (
    <div className="search-product-item">
      <img src={`./assets/products/${id}`} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{model}</p>
      </div>
      <Link to={`/products/${id.split(".")[0]}`}>مشاهده جزئیات</Link>
    </div>
  );
};

export default SearchProduct;
