import React, { useEffect, useState, useRef } from "react";
import Product from "../components/Product";
import { FaSortAmountDownAlt, TfiMenu } from "../database/icons";
import { AllProducts } from "../database/productsDatabase";
import ProductNotFound from "../components/ProductNotFound";
import MultiRangeSlider from "multi-range-slider-react";

const MobilePage = () => {
  const [mobileProducts, setMobileProducts] = useState(
    AllProducts.filter((product) => {
      return product.categories.indexOf("Mobile") !== -1;
    })
  );
  const [page, setPage] = useState(1);
  const [filterGroupOpen, setFilterGroupOpen] = useState({
    core: false,
    ram: false,
    camera: false,
  });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [paginationBtns, setPaginationBtns] = useState([]);
  const [filter, setFilter] = useState({
    core8: false,
    core4: false,
    core2: false,
    ram16: false,
    ram8: false,
    ram4: false,
    camera108: false,
    camera60: false,
  });
  const [sortSystem, setSortSystem] = useState("latest");
  const [priceLimit, setPriceLimit] = useState({
    min: 0,
    max: 100_000_000,
  });
  const sortRef = useRef(null);
  useEffect(() => {
    const numberOfPages = mobileProducts.length / 6;
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
  }, [mobileProducts]);
  useEffect(() => {
    const total = [];
    const AllMobileProducts = AllProducts.filter((item) => {
      return item.categories.includes("Mobile");
    });
    const allOptions = Object.values(filter);
    if (allOptions.includes(true)) {
      if (filter.core8) {
        const filteredProducts = AllMobileProducts.filter((item) => {
          return item.core.indexOf(8) > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.core4) {
        const filteredProducts = AllMobileProducts.filter((item) => {
          return item.core.indexOf(4) > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.core2) {
        const filteredProducts = AllMobileProducts.filter((item) => {
          return item.core.indexOf(2) > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.ram16) {
        const filteredProducts = AllMobileProducts.filter((item) => {
          return item.ram === 16;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.ram8) {
        const filteredProducts = AllMobileProducts.filter((item) => {
          return item.ram === 8;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.ram4) {
        const filteredProducts = AllMobileProducts.filter((item) => {
          return item.ram === 4;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.camera108) {
        const filteredProducts = AllMobileProducts.filter((item) => {
          return item.camera === 108;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.camera60) {
        const filteredProducts = AllMobileProducts.filter((item) => {
          return item.camera === 60;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
    } else {
      AllMobileProducts.forEach((item) => {
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
      setMobileProducts(sortedArray);
    } else if (sortSystem === "alphabet") {
      const sortedArray = pureArray.sort((a, b) => {
        return a.model - b.model;
      });
      setMobileProducts(sortedArray);
    } else if (sortSystem === "price") {
      const sortedArray = pureArray.sort((a, b) => {
        return a.priceOn - b.priceOn;
      });
      setMobileProducts(sortedArray);
    }
  }, [filter, sortSystem, priceLimit]);
  const priceHandler = (e) => {
    setPriceLimit({
      max: e.maxValue,
      min: e.minValue,
    });
  };
  useEffect(() => {
    setPage(1);
  }, [filter, sortSystem]);
  return (
    <div className="mobile-page">
      <p className="page-address">خانه / موبایل</p>
      <div className="head-menu">
        <p className="product-counter">
          نمایش {`${(page - 1) * 6 + 1} - ${(page - 1) * 6 + 6}`} محصول از{" "}
          {mobileProducts.length} محصول
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
      <div className="mobile-page-product-container">
        <div className="mobile-page__products">
          <div
            className={
              isFilterModalOpen
                ? "mobile-page__products-side-menu mobile-page__products-side-menu-modal-active"
                : "mobile-page__products-side-menu mobile-page__products-side-menu-modal-active mobile-page__products-side-menu-modal-diactive"
            }
          >
            <p className="filter-title">نمایش محصولات برحسب: </p>
            <div
              className={
                filterGroupOpen.core
                  ? "filter-by filter-by-open"
                  : "filter-by filter-by-close"
              }
            >
              <p>
                هسته پردازنده
                <button
                  onClick={() => {
                    filterGroupOpen.core
                      ? setFilterGroupOpen({ ...filterGroupOpen, core: false })
                      : setFilterGroupOpen({ ...filterGroupOpen, core: true });
                  }}
                >
                  {filterGroupOpen.core ? "-" : "+"}
                </button>
              </p>
              <div className="input-group">
                <button
                  id="8core"
                  className={
                    filter.core8
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.core8) {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                      });
                    } else {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        core8: true,
                      });
                    }
                  }}
                >
                  8 هسته ای
                </button>
                <button
                  id="4core"
                  className={
                    filter.core4
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.core4) {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        core4: false,
                      });
                    } else {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        core4: true,
                      });
                    }
                  }}
                >
                  4 هسته ای
                </button>
                <button
                  id="2core"
                  className={
                    filter.core2
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.core2) {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        core2: false,
                      });
                    } else {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        core2: true,
                      });
                    }
                  }}
                >
                  2 هسته ای
                </button>
              </div>
            </div>
            <div
              className={
                filterGroupOpen.ram
                  ? "filter-by filter-by-open"
                  : " filter-by filter-by-close"
              }
            >
              <p>
                رم
                <button
                  onClick={() => {
                    filterGroupOpen.ram
                      ? setFilterGroupOpen({ ...filterGroupOpen, ram: false })
                      : setFilterGroupOpen({ ...filterGroupOpen, ram: true });
                  }}
                >
                  {filterGroupOpen.ram ? "-" : "+"}
                </button>
              </p>
              <div className="input-group">
                <button
                  id="16ram"
                  className={
                    filter.ram16
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.ram16) {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        ram16: false,
                      });
                    } else {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        ram16: true,
                      });
                    }
                  }}
                >
                  16 GB
                </button>
                <button
                  id="8ram"
                  className={
                    filter.ram8
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.ram8) {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        ram8: false,
                      });
                    } else {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        ram8: true,
                      });
                    }
                  }}
                >
                  8 GB
                </button>
                <button
                  id="4ram"
                  className={
                    filter.ram4
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.ram4) {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        ram4: false,
                      });
                    } else {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        ram4: true,
                      });
                    }
                  }}
                >
                  4 GB
                </button>
              </div>
            </div>
            <div
              className={
                filterGroupOpen.camera
                  ? "filter-by filter-by-open"
                  : " filter-by filter-by-close"
              }
            >
              <p>
                وضوح دوربین
                <button
                  onClick={() => {
                    filterGroupOpen.camera
                      ? setFilterGroupOpen({
                          ...filterGroupOpen,
                          camera: false,
                        })
                      : setFilterGroupOpen({
                          ...filterGroupOpen,
                          camera: true,
                        });
                  }}
                >
                  {filterGroupOpen.camera ? "-" : "+"}
                </button>
              </p>
              <div className="input-group">
                <button
                  id="108mgpx"
                  className={
                    filter.camera108
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.camera108) {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        camera108: false,
                      });
                    } else {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        camera108: true,
                      });
                    }
                  }}
                >
                  108 مگاپیکسل
                </button>
                <button
                  id="60mgpx"
                  className={
                    filter.camera60
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.camera60) {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        camera60: false,
                      });
                    } else {
                      setFilter({
                        core8: false,
                        core4: false,
                        core2: false,
                        ram16: false,
                        ram8: false,
                        ram4: false,
                        camera108: false,
                        camera60: false,
                        camera60: true,
                      });
                    }
                  }}
                >
                  60 مگاپیکسل
                </button>
              </div>
            </div>
            <div className="filter-by">
              <p>محدودیت قیمت </p>
              <div className="input-group input-price-group">
                <MultiRangeSlider
                  min={0}
                  max={30000000}
                  minValue={priceLimit.min}
                  maxValue={priceLimit.max}
                  step={1000000}
                  stepOnly={true}
                  style={{
                    border: "none",
                    boxShadow: "none",
                    width: "100%",
                    padding: "15px 10px",
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
          <div className="mobile-page__products-show">
            {mobileProducts.length === 0 ? (
              <ProductNotFound />
            ) : (
              mobileProducts
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

export default MobilePage;
