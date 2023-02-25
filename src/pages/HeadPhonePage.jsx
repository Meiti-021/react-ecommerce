import React, { useEffect, useState, useRef } from "react";
import Product from "../components/Product";
import { FaSortAmountDownAlt, TfiMenu } from "../database/icons";
import { AllProducts } from "../database/productsDatabase";
import ProductNotFound from "../components/ProductNotFound";
import MultiRangeSlider from "multi-range-slider-react";

const HeadphonesPage = () => {
  const [headphoneProducts, setHeadphonesProducts] = useState(
    AllProducts.filter((product) => {
      return product.categories.indexOf("Headphones") !== -1;
    })
  );
  const [page, setPage] = useState(1);
  const [filterGroupOpen, setFilterGroupOpen] = useState({
    color: false,
    wire: false,
  });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [paginationBtns, setPaginationBtns] = useState([]);
  const [filter, setFilter] = useState({
    colorB: false,
    colorW: false,
    colory: false,
    wireless: false,
    wiry: false,
  });
  const [sortSystem, setSortSystem] = useState("latest");
  const [priceLimit, setPriceLimit] = useState({
    min: 0,
    max: 10_000_000,
  });
  const sortRef = useRef(null);
  useEffect(() => {
    const numberOfPages = headphoneProducts.length / 6;
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
  }, [headphoneProducts]);
  useEffect(() => {
    const total = [];
    const AllHeadphonesProducts = AllProducts.filter((item) => {
      return item.categories.includes("Headphones");
    });
    const allOptions = Object.values(filter);
    if (allOptions.includes(true)) {
      if (filter.colorB) {
        const filteredProducts = AllHeadphonesProducts.filter((item) => {
          return item.color === "black";
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.colorW) {
        const filteredProducts = AllHeadphonesProducts.filter((item) => {
          return item.color === "white";
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.colory) {
        const filteredProducts = AllHeadphonesProducts.filter((item) => {
          return item.color === "colory";
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.wireless) {
        const filteredProducts = AllHeadphonesProducts.filter((item) => {
          return item.categories.indexOf("Wireless Headphones") > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.wiry) {
        const filteredProducts = AllHeadphonesProducts.filter((item) => {
          return item.categories.indexOf("Wireless Headphones") === -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
    } else {
      AllHeadphonesProducts.forEach((item) => {
        total.push(item);
      });
    }
    const newSet = new Set(total);
    const noRepeatArray = Array.from(newSet);
    const pureArray = noRepeatArray.filter((item) => {
      return item.priceOn <= priceLimit.max && item.priceOn >= priceLimit.min;
    });

    if (sortSystem === "latest") {
      const sortedArray = pureArray.sort((a, b) => {
        return a.date - b.date;
      });
      setHeadphonesProducts(sortedArray);
    } else if (sortSystem === "alphabet") {
      const sortedArray = pureArray.sort((a, b) => {
        return a.model - b.model;
      });
      setHeadphonesProducts(sortedArray);
    } else if (sortSystem === "price") {
      const sortedArray = pureArray.sort((a, b) => {
        return a.priceOn - b.priceOn;
      });
      setHeadphonesProducts(sortedArray);
    }
  }, [filter, sortSystem, priceLimit]);
  const priceHandler = (e) => {
    if (e.maxValue !== priceLimit.max || e.minValue !== priceLimit.min) {
      setPriceLimit({
        max: e.maxValue,
        min: e.minValue,
      });
    }
  };
  useEffect(() => {
    setPage(1);
  }, [filter, sortSystem]);
  return (
    <div className="headphone-page">
      <p className="page-address">خانه / موبایل</p>
      <div className="head-menu">
        <p className="product-counter">
          نمایش {`${(page - 1) * 6 + 1} - ${(page - 1) * 6 + 6}`} محصول از{" "}
          {headphoneProducts.length} محصول
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
      <div className="headphone-page-product-container">
        <div className="headphone-page__products">
          <div
            className={
              isFilterModalOpen
                ? "headphone-page__products-side-menu headphone-page__products-side-menu-modal-active"
                : "headphone-page__products-side-menu headphone-page__products-side-menu-modal-active headphone-page__products-side-menu-modal-diactive"
            }
          >
            <p className="filter-title">نمایش محصولات برحسب: </p>
            <div
              className={
                filterGroupOpen.color
                  ? "filter-by filter-by-open"
                  : "filter-by filter-by-close"
              }
            >
              <p>
                رنگ
                <button
                  onClick={() => {
                    filterGroupOpen.color
                      ? setFilterGroupOpen({ ...filterGroupOpen, color: false })
                      : setFilterGroupOpen({ ...filterGroupOpen, color: true });
                  }}
                >
                  {filterGroupOpen.color ? "-" : "+"}
                </button>
              </p>
              <div className="input-group">
                <button
                  id="8color"
                  className={
                    filter.colorB
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.colorB) {
                      setFilter({
                        colorB: false,
                        colorW: false,
                        colory: false,
                        wireless: false,
                        wiry: false,
                      });
                    } else {
                      setFilter({
                        colorW: false,
                        colory: false,
                        wireless: false,
                        wiry: false,
                        colorB: true,
                      });
                    }
                  }}
                >
                  سیاه
                </button>
                <button
                  id="4color"
                  className={
                    filter.colorW
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.colorW) {
                      setFilter({
                        colorB: false,
                        colory: false,
                        wireless: false,
                        wiry: false,
                        wire4: false,
                        camera108: false,
                        camera60: false,
                        colorW: false,
                      });
                    } else {
                      setFilter({
                        colorB: false,
                        colory: false,
                        wireless: false,
                        wiry: false,
                        colorW: true,
                      });
                    }
                  }}
                >
                  سفید
                </button>
                <button
                  id="2color"
                  className={
                    filter.colory
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.colory) {
                      setFilter({
                        colorB: false,
                        colorW: false,
                        wireless: false,
                        wiry: false,
                        colory: false,
                      });
                    } else {
                      setFilter({
                        colorB: false,
                        colorW: false,
                        wireless: false,
                        wiry: false,
                        colory: true,
                      });
                    }
                  }}
                >
                  رنگارنگ
                </button>
              </div>
            </div>
            <div
              className={
                filterGroupOpen.wire
                  ? "filter-by filter-by-open"
                  : " filter-by filter-by-close"
              }
            >
              <p>
                نوع سیم
                <button
                  onClick={() => {
                    filterGroupOpen.wire
                      ? setFilterGroupOpen({ ...filterGroupOpen, wire: false })
                      : setFilterGroupOpen({ ...filterGroupOpen, wire: true });
                  }}
                >
                  {filterGroupOpen.wire ? "-" : "+"}
                </button>
              </p>
              <div className="input-group">
                <button
                  id="16wire"
                  className={
                    filter.wireless
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.wireless) {
                      setFilter({
                        colorB: false,
                        colorW: false,
                        colory: false,
                        wiry: false,
                        wireless: false,
                      });
                    } else {
                      setFilter({
                        colorB: false,
                        colorW: false,
                        colory: false,
                        wiry: false,
                        wireless: true,
                      });
                    }
                  }}
                >
                  بیسیم
                </button>
                <button
                  id="8wire"
                  className={
                    filter.wiry
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.wiry) {
                      setFilter({
                        colorB: false,
                        colorW: false,
                        colory: false,
                        wireless: false,
                        wiry: false,
                      });
                    } else {
                      setFilter({
                        colorB: false,
                        colorW: false,
                        colory: false,
                        wireless: false,
                        wire4: false,
                        camera108: false,
                        camera60: false,
                        wiry: true,
                      });
                    }
                  }}
                >
                  سیمدار
                </button>
              </div>
            </div>
            <div className="filter-by">
              <p>محدوده قیمت </p>
              <div className="input-group input-price-group">
                <MultiRangeSlider
                  min={0}
                  max={10000000}
                  minValue={priceLimit.min}
                  maxValue={priceLimit.max}
                  step={500000}
                  stepOnly={true}
                  style={{
                    border: "none",
                    boxShadow: "none",
                    direction: "ltr",
                  }}
                  ruler={false}
                  barLeftColor={"#fff"}
                  barRightColor={"#fff"}
                  barInnerColor={"#041e42"}
                  label={true}
                  onInput={(e) => {
                    priceHandler(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="headphone-page__products-show">
            {headphoneProducts.length === 0 ? (
              <ProductNotFound />
            ) : (
              headphoneProducts
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

export default HeadphonesPage;
