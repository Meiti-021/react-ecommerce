import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchProduct from "../components/SearchProduct";
import { AllProducts } from "../database/productsDatabase";
import { clearSearch } from "../stats/features/ShopCartSlice";

const SearchPage = () => {
  const { search } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const arr = [];
    AllProducts.forEach((item) => {
      if (item.model.toLowerCase().includes(search.toLowerCase())) {
        arr.push(item);
      }
    });
    setProducts(arr);
    console.log(arr);
  }, [search]);
  return (
    <div className="search-page">
      {products.map((product) => {
        return <SearchProduct {...product} />;
      })}
    </div>
  );
};

export default SearchPage;
