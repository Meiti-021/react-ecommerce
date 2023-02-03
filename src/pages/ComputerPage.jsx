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
  useEffect(() => {
    const total = [];
    const AllComputerProducts = AllProducts.filter((item) => {
      return item.categories.includes("Computer");
    });
    const allOptions = Object.values(filter);
    if (allOptions.includes(true)) {
      if (filter.core8) {
        const filteredProducts = AllComputerProducts.filter((item) => {
          return item.core.indexOf(8) > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.core4) {
        const filteredProducts = AllComputerProducts.filter((item) => {
          return item.core.indexOf(4) > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.core2) {
        const filteredProducts = AllComputerProducts.filter((item) => {
          return item.core.indexOf(2) > -1;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.ram16) {
        const filteredProducts = AllComputerProducts.filter((item) => {
          return item.ram === 16;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.ram8) {
        const filteredProducts = AllComputerProducts.filter((item) => {
          return item.ram === 8;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.ram4) {
        const filteredProducts = AllComputerProducts.filter((item) => {
          return item.ram === 4;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.camera108) {
        const filteredProducts = AllComputerProducts.filter((item) => {
          return item.camera === 108;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
      if (filter.camera60) {
        const filteredProducts = AllComputerProducts.filter((item) => {
          return item.camera === 60;
        });
        filteredProducts.forEach((item) => {
          total.push(item);
        });
      }
    } else {
      AllComputerProducts.forEach((item) => {
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
      setComputerProducts(sortedArray);
    } else if (sortSystem === "alphabet") {
      const sortedArray = pureArray.sort((a, b) => {
        return a.model - b.model;
      });
      setComputerProducts(sortedArray);
    } else if (sortSystem === "price") {
      const sortedArray = pureArray.sort((a, b) => {
        return a.priceOn - b.priceOn;
      });
      setComputerProducts(sortedArray);
    }
    setPage(1);
  }, [filter, sortSystem, priceLimit]);
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
              <p>هسته پردازنده </p>
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
            <div className="filter-by">
              <p>رم </p>
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
            <div className="filter-by">
              <p>وضوح دوربین </p>
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
