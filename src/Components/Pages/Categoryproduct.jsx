import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardProduct from "../Product/CardProduct";

import { Baseurl } from "../Confige";
function Categoryproduct() {
  const [allproduct, setAllproduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Product/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAllproduct(data.data);
        const filtered = data.data.filter((product) => product.category === id);
        setFilteredProducts(filtered);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <main>
        <div className="breadcrumb__area grey-bg pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-breadcrumb__content">
                  <div className="tp-breadcrumb__list">
                    <span className="tp-breadcrumb__active">
                      <Link to="index">Home</Link>
                    </span>
                    <span className="dvdr">/</span>
                    <span>Shop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="shop-area-start grey-bg pb-200">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="tpshop__details">
                  <div className="product__filter-content mb-30">
                    <div className="row align-items-center">
                      <div className="col-sm-4">
                        <div className="product__item-count">
                          <span>
                            Showing 1 - 12 of {allproduct.length} Products
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="tpproductnav tpnavbar product-filter-nav d-flex align-items-center justify-content-center">
                          <nav>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                className="nav-link"
                                id="nav-all-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-all"
                                type="button"
                                role="tab"
                                aria-controls="nav-all"
                                aria-selected="false"
                              >
                                <i>
                                  <svg
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M20 4C21.1046 4 22 3.10457 22 2C22 0.89543 21.1046 0 20 0C18.8954 0 18 0.89543 18 2C18 3.10457 18.8954 4 20 4Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C18.8954 6 18 6.89543 18 8C18 9.10457 18.8954 10 20 10Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </i>
                              </button>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product__navtabs d-flex justify-content-end align-items-center">
                          <div className="tp-shop-selector">
                            <div className="nice-select" tabIndex="0">
                              <span className="">Default sorting</span>
                              <ul className="list">
                                <li data-value="Show 12" className="option ">
                                  Default sorting
                                </li>
                                <li data-value="Show 14" className="option">
                                  Short popularity
                                </li>
                                <li data-value="Show 08" className="option">
                                  Show 08
                                </li>
                                <li data-value="Show 20" className="option">
                                  Show 20
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade"
                      id="nav-all"
                      role="tabpanel"
                    ></div>
                    <div
                      className="tab-pane fade show active whight-product"
                      id="nav-popular"
                      role="tabpanel"
                      aria-labelledby="nav-popular-tab"
                    >
                      <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item">
                        {filteredProducts.map((product) => (
                          <CardProduct key={product.id} product={product} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Categoryproduct;
