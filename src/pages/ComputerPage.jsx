import React, { useEffect, useState, useRef } from "react";
import Product from "../components/Product";
import { FaSortAmountDownAlt, TfiMenu } from "../database/icons";
import { AllProducts } from "../database/productsDatabase";
import ProductNotFound from "../components/ProductNotFound";

const ComputerPage = () => {
  const [computerProducts, setComputerProducts] = useState(
    AllProducts.filter((product) => {
      return product.categories.indexOf("Computer") !== -1;
    })
  );
  const [page, setPage] = useState(1);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [paginationBtns, setPaginationBtns] = useState([]);
  const [sortSystem, setSortSystem] = useState("latest");
  const [priceLimit, setPriceLimit] = useState({
    min: 0,
    max: 100_000_000,
  });
  const sortRef = useRef(null);
  useEffect(() => {
    const numberOfPages = computerProducts.length / 6;
    const newArray = [];
    if (numberOfPages - Math.floor(numberOfPages) !== 0) {
      for (let i = 0; i < Math.floor(numberOfPages) + 1; i++) {
        newArray.push(i);
      }
      setPaginationBtns(newArray);
    } else {
      for (let i = 0; i < numberOfPages; i++) {
        newArray.push(i);
      }
      setPaginationBtns(newArray);
    }
  }, [computerProducts]);
  return (
    <div className="computer-page">
      <p className="page-address">خانه / موبایل</p>
      <div className="head-menu">
        <p className="product-counter">
          نمایش {`${(page - 1) * 6 + 1} - ${(page - 1) * 6 + 6}`} محصول از{" "}
          {computerProducts.length} محصول
        </p>
        <FaSortAmountDownAlt />
        <select
          className="head-menu-drop-down"
          ref={sortRef}
          onChange={(event) => {
            setSortSystem(event.target.value);
          }}
        >
          <option value="latest">آخرین محصولات</option>
          <option value="price">قیمت</option>
          <option value="alphabet">الفبا</option>
        </select>
        <div className="pagination">
          {paginationBtns.map((btn, index) => {
            return (
              <button
                onClick={() => {
                  setPage(index + 1);
                }}
                className={index + 1 === page ? "active" : ""}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <button
          className={
            isFilterModalOpen ? "modal-btn modal-btn-active" : "modal-btn"
          }
          title="فیلتر"
          onClick={() => {
            isFilterModalOpen
              ? setIsFilterModalOpen(false)
              : setIsFilterModalOpen(true);
          }}
        >
          <TfiMenu />
        </button>
      </div>
      <div className="computer-page-product-container">
        <div className="computer-page__products">
          <div
            className={
              isFilterModalOpen
                ? "computer-page__products-side-menu computer-page__products-side-menu-modal-active"
                : "computer-page__products-side-menu computer-page__products-side-menu-modal-active computer-page__products-side-menu-modal-diactive"
            }
          >
            <p className="filter-title">نمایش محصولات برحسب: </p>
            <div className="filter-by">
              <p>رنگ</p>
              <div className="input-group">
                <div>
                  <input type="checkbox" name="silverColor" id="silverColor" />
                  <label htmlFor="silverColor">نقره </label>
                </div>
              </div>
            </div>
            <div className="filter-by">
              <p>سیستم عامل</p>
              <div className="input-group"></div>
            </div>
            <div className="filter-by">
              <p>شبکه</p>
              <div className="input-group"></div>
            </div>
            <div className="filter-by">
              <p>محدودیت قیمت </p>
              <div className="input-group input-price-group">
                <input
                  type="number"
                  name="price-from"
                  id="price-from"
                  placeholder="از :"
                  min={1_000_000}
                  max={100_000_000}
                  onChange={(event) => {
                    if (event.target.value !== "") {
                      setPriceLimit({ ...priceLimit, min: event.target.value });
                    } else {
                      setPriceLimit({ min: 0, max: 100000000 });
                    }
                  }}
                  step={100000}
                />
                <input
                  type="number"
                  name="price-end"
                  id="price-end"
                  placeholder=" تا :"
                  min={1_000_000}
                  max={100_000_000}
                  step={100000}
                  onChange={(event) => {
                    if (event.target.value !== "") {
                      setPriceLimit({ ...priceLimit, max: event.target.value });
                    } else {
                      setPriceLimit({ min: 0, max: 100000000 });
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="computer-page__products-show">
            {computerProducts.length === 0 ? (
              <ProductNotFound />
            ) : (
              computerProducts
                .slice((page - 1) * 6, (page - 1) * 6 + 6)
                .map((product) => {
                  return <Product {...product} key={product.id} />;
                })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerPage;
