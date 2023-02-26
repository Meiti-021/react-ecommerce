import React, { useEffect, useState, useRef } from "react";
import Product from "../components/Product";
import { FaSortAmountDownAlt, TfiMenu } from "../database/icons";
import { AllProducts } from "../database/productsDatabase";
import ProductNotFound from "../components/ProductNotFound";
import MultiRangeSlider from "multi-range-slider-react";

const TvPage = () => {
  const [tvProducts, setTvProducts] = useState(
    AllProducts.filter((product) => {
      return product.categories.indexOf("Tv") !== -1;
    })
  );
  const [page, setPage] = useState(1);
  const [filterGroupOpen, setFilterGroupOpen] = useState({
    screen: false,
    service: false,
    resolution: false,
  });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [paginationBtns, setPaginationBtns] = useState([]);
  const [filter, setFilter] = useState({
    screen70: false,
    screen85: false,
    screen30: false,
    cashback: false,
    qled: false,
    soundpromo: false,
    resolution4k: false,
    resolutionhd: false,
  });
  const [sortSystem, setSortSystem] = useState("latest");
  const [priceLimit, setPriceLimit] = useState({
    min: 0,
    max: 100_000_000,
  });
  const sortRef = useRef(null);
  useEffect(() => {
    const numberOfPages = tvProducts.length / 6;
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
  }, [tvProducts]);
  useEffect(() => {
    const total = [];
    const AllTvProducts = AllProducts.filter((item) => {
      return item.categories.includes("Tv");
    });
    const allOptions = Object.values(filter);
    if (allOptions.includes(true)) {
      if (filter.screen70) {
        const filteredProducts = AllTvProducts.filter((item) => {
          return item.screen.indexOf(70) > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.screen85) {
        const filteredProducts = AllTvProducts.filter((item) => {
          return item.screen.indexOf(85) > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.screen30) {
        const filteredProducts = AllTvProducts.filter((item) => {
          return item.screen.indexOf(30) > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.cashback) {
        const filteredProducts = AllTvProducts.filter((item) => {
          return item.service === "cashback";
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.qled) {
        const filteredProducts = AllTvProducts.filter((item) => {
          return item.service === "qled";
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.soundpromo) {
        const filteredProducts = AllTvProducts.filter((item) => {
          return item.service === "soundpromo";
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.resolution4k) {
        const filteredProducts = AllTvProducts.filter((item) => {
          return item.resolution === "4k";
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.resolutionhd) {
        const filteredProducts = AllTvProducts.filter((item) => {
          return item.resolution === "hd";
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
    } else {
      AllTvProducts.forEach((item) => {
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
      setTvProducts(sortedArray);
    } else if (sortSystem === "alphabet") {
      const sortedArray = pureArray.sort((a, b) => {
        return a.model - b.model;
      });
      setTvProducts(sortedArray);
    } else if (sortSystem === "price") {
      const sortedArray = pureArray.sort((a, b) => {
        return a.priceOn - b.priceOn;
      });
      setTvProducts(sortedArray);
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
    <div className="tv-page">
      <p className="page-address">خانه / موبایل</p>
      <div className="head-menu">
        <p className="product-counter">
          نمایش{" "}
          <span className="number">
            {" "}
            {`${(page - 1) * 6 + 1} - ${(page - 1) * 6 + 6}`}
          </span>{" "}
          محصول از <span className="number">{tvProducts.length} </span> محصول
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
      <div className="tv-page-product-container">
        <div className="tv-page__products">
          <div
            className={
              isFilterModalOpen
                ? "tv-page__products-side-menu tv-page__products-side-menu-modal-active"
                : "tv-page__products-side-menu tv-page__products-side-menu-modal-active tv-page__products-side-menu-modal-diactive"
            }
          >
            <p className="filter-title">نمایش محصولات برحسب: </p>
            <div
              className={
                filterGroupOpen.screen
                  ? "filter-by filter-by-open"
                  : "filter-by filter-by-close"
              }
            >
              <p>
                صفحه نمایش
                <button
                  onClick={() => {
                    filterGroupOpen.screen
                      ? setFilterGroupOpen({
                          ...filterGroupOpen,
                          screen: false,
                        })
                      : setFilterGroupOpen({
                          ...filterGroupOpen,
                          screen: true,
                        });
                  }}
                >
                  {filterGroupOpen.screen ? "-" : "+"}
                </button>
              </p>
              <div className="input-group">
                <button
                  id="8screen"
                  className={
                    filter.screen70
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.screen70) {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                      });
                    } else {
                      setFilter({
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                        screen70: true,
                      });
                    }
                  }}
                >
                  70 اینچ
                </button>
                <button
                  id="4screen"
                  className={
                    filter.screen85
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.screen85) {
                      setFilter({
                        screen70: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                        screen85: false,
                      });
                    } else {
                      setFilter({
                        screen70: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                        screen85: true,
                      });
                    }
                  }}
                >
                  85 اینچ
                </button>
                <button
                  id="2screen"
                  className={
                    filter.screen30
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.screen30) {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                        screen30: false,
                      });
                    } else {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                        screen30: true,
                      });
                    }
                  }}
                >
                  30 اینچ
                </button>
              </div>
            </div>
            <div
              className={
                filterGroupOpen.service
                  ? "filter-by filter-by-open"
                  : " filter-by filter-by-close"
              }
            >
              <p>
                آپشن ها
                <button
                  onClick={() => {
                    filterGroupOpen.service
                      ? setFilterGroupOpen({
                          ...filterGroupOpen,
                          service: false,
                        })
                      : setFilterGroupOpen({
                          ...filterGroupOpen,
                          service: true,
                        });
                  }}
                >
                  {filterGroupOpen.service ? "-" : "+"}
                </button>
              </p>
              <div className="input-group">
                <button
                  id="16service"
                  className={
                    filter.cashback
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.cashback) {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                        cashback: false,
                      });
                    } else {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                        cashback: true,
                      });
                    }
                  }}
                >
                  کشبک
                </button>
                <button
                  id="8service"
                  className={
                    filter.qled
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.qled) {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                        qled: false,
                      });
                    } else {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                        qled: true,
                      });
                    }
                  }}
                >
                  نئو QLED 8K و galaxy 4
                </button>
                <button
                  id="4service"
                  className={
                    filter.soundpromo
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.soundpromo) {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        resolution4k: false,
                        resolutionhd: false,
                        soundpromo: false,
                      });
                    } else {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        resolution4k: false,
                        resolutionhd: false,
                        soundpromo: true,
                      });
                    }
                  }}
                >
                  صدا دالبی
                </button>
              </div>
            </div>
            <div
              className={
                filterGroupOpen.resolution
                  ? "filter-by filter-by-open"
                  : " filter-by filter-by-close"
              }
            >
              <p>
                وضوح تصویر
                <button
                  onClick={() => {
                    filterGroupOpen.resolution
                      ? setFilterGroupOpen({
                          ...filterGroupOpen,
                          resolution: false,
                        })
                      : setFilterGroupOpen({
                          ...filterGroupOpen,
                          resolution: true,
                        });
                  }}
                >
                  {filterGroupOpen.resolution ? "-" : "+"}
                </button>
              </p>
              <div className="input-group">
                <button
                  id="resolution4k"
                  className={
                    filter.resolution4k
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.resolution4k) {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolutionhd: false,
                        resolution4k: false,
                      });
                    } else {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolutionhd: false,
                        resolution4k: true,
                      });
                    }
                  }}
                >
                  HD
                </button>
                <button
                  id="resolutionhd"
                  className={
                    filter.resolutionhd
                      ? "input-group-btn-active input-group-btn"
                      : "input-group-btn"
                  }
                  onClick={() => {
                    if (filter.resolutionhd) {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: false,
                      });
                    } else {
                      setFilter({
                        screen70: false,
                        screen85: false,
                        screen30: false,
                        cashback: false,
                        qled: false,
                        soundpromo: false,
                        resolution4k: false,
                        resolutionhd: true,
                      });
                    }
                  }}
                >
                  4k
                </button>
              </div>
            </div>
            <div className="filter-by">
              <p>محدوده قیمت </p>
              <div className="input-group input-price-group">
                <MultiRangeSlider
                  min={0}
                  max={30000000}
                  step={500000}
                  minValue={priceLimit.min}
                  maxValue={priceLimit.max}
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
          <div className="tv-page__products-show">
            {tvProducts.length === 0 ? (
              <ProductNotFound />
            ) : (
              tvProducts
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

export default TvPage;
