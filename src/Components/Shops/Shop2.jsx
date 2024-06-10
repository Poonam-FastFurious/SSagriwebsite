import { Link } from "react-router-dom";
import Category from "../Product/Category";
import { useEffect, useState } from "react";

function Shop2() {
  const [latestproduct, setLatestproduct] = useState([]);
  useEffect(() => {
    const fetchlatestProduct = async () => {
      try {
        const response = await fetch("/api/v1/Product/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch cart");
        }

        const data = await response.json();

        setLatestproduct(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchlatestProduct();
  });
  return (
    <>
      <section className="shop-area-start grey-bg pb-200">
        <div className="container">
          <div className="breadcrumb__area grey-bg pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="tp-breadcrumb__content ml-60">
                    <div className="tp-breadcrumb__list">
                      <span className="tp-breadcrumb__active">
                        <Link to="/">Home</Link>
                      </span>
                      <span className="dvdr">/</span>
                      <span>Shop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-60">
            <Category />
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="tpshop__top ml-60">
                <div
                  className="tpshop__banner mb-30"
                  style={{
                    backgroundImage:
                      "url(https://html.hixstudio.net/orfarm/assets/img/banner/shop-bg-1.jpg)",
                  }}
                >
                  <div className="tpshop__content text-center">
                    <span>The Salad</span>
                    <h4 className="tpshop__content-title mb-20">
                      Fresh & Natural <br />
                      Healthy Food Special Offer
                    </h4>
                    <p>Do not miss the current offers of us!</p>
                  </div>
                </div>
                <div className="product__filter-content mb-40">
                  <div className="row align-items-center">
                    <div className="col-sm-4">
                      <div className="product__item-count">
                        <span>Showing 1 - 18 of 40 Products</span>
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
                            <button
                              className="nav-link active"
                              id="nav-popular-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-popular"
                              type="button"
                              role="tab"
                              aria-controls="nav-popular"
                              aria-selected="true"
                            >
                              <i>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
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
                                </svg>
                              </i>
                            </button>
                            <button
                              className="nav-link"
                              id="nav-product-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-product"
                              type="button"
                              role="tab"
                              aria-controls="nav-product"
                              aria-selected="false"
                            >
                              <i>
                                <svg
                                  width="20"
                                  height="16"
                                  viewBox="0 0 20 16"
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
                                    d="M20 2C20 2.552 19.553 3 19 3H7C6.448 3 6 2.552 6 2C6 1.448 6.448 1 7 1H19C19.553 1 20 1.447 20 2Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M20 8C20 8.552 19.553 9 19 9H7C6.448 9 6 8.552 6 8C6 7.448 6.448 7 7 7H19C19.553 7 20 7.447 20 8Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M20 14C20 14.552 19.553 15 19 15H7C6.448 15 6 14.552 6 14C6 13.447 6.448 13 7 13H19C19.553 13 20 13.447 20 14Z"
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
                          <select style={{ display: "none" }}>
                            <option>Default sorting</option>
                            <option>Show 14</option>
                            <option>Show 08</option>
                            <option>Show 20</option>
                          </select>
                          <div className="nice-select" tabIndex="0">
                            <span className="current">Default sorting</span>
                            <ul className="list">
                              <li
                                data-value="Show 12"
                                className="option selected"
                              >
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
                    aria-labelledby="nav-all-tab"
                  >
                    <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item">
                      {latestproduct.map((product, index) => (
                        <div className="col" key={index}>
                          <div className="tpproduct p-relative mb-20">
                            <div className="tpproduct__thumb p-relative text-center">
                              <Link to="#">
                                <img
                                  src={product.image}
                                  alt=""
                                  style={{ height: "250px" }}
                                />
                              </Link>
                              <Link
                                className="tpproduct__thumb-img"
                                to="shop-details-grid"
                              >
                                <img
                                  src="https://html.hixstudio.net/orfarm/assets/img/product/products1-min.jpg"
                                  alt=""
                                />
                              </Link>
                              <div className="tpproduct__info bage">
                                <span className="tpproduct__info-discount bage__discount">
                                  -{product.discountPercentage}%
                                </span>
                                <span className="tpproduct__info-hot bage__hot">
                                  HOT
                                </span>
                              </div>
                              <div className="tpproduct__shopping">
                                <Link
                                  className="tpproduct__shopping-wishlist"
                                  to="wishlist"
                                >
                                  <i className="icon-heart icons"></i>
                                </Link>

                                <Link
                                  className="tpproduct__shopping-cart"
                                  to="#"
                                >
                                  <i className="icon-eye"></i>
                                </Link>
                              </div>
                            </div>
                            <div className="tpproduct__content">
                              <span className="tpproduct__content-weight">
                                <Link to="shop-details-3">
                                  {product.category}
                                </Link>
                              </span>
                              <h4 className="tpproduct__title">
                                <Link to="shop-details-top-">
                                  {product.productTitle}
                                </Link>
                              </h4>
                              <div className="tpproduct__rating mb-5">
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                              </div>
                              <div className="tpproduct__price">
                                <span>{product.oneTimePrice}</span>
                                <del>$19.00</del>
                              </div>
                            </div>
                            <div className="tpproduct__hover-text">
                              <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                <Link className="tp-btn-2" to="cart">
                                  Add to cart
                                </Link>
                              </div>
                              <div className="tpproduct__descrip">
                                <ul>
                                  <li>Stock: {product.stock}</li>
                                  <li>Rating: {product.rating}</li>
                                  <li>LIFE: 60 days</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active whight-product"
                    id="nav-popular"
                    role="tabpanel"
                    aria-labelledby="nav-popular-tab"
                  >
                    <div className="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item">
                      {latestproduct.map((product, index) => (
                        <div className="col" key={index}>
                          <div className="tpproduct p-relative mb-20">
                            <div className="tpproduct__thumb p-relative text-center">
                              <Link to="#">
                                <img src={product.image} alt="" />
                              </Link>
                              <Link
                                className="tpproduct__thumb-img"
                                to="shop-details-grid"
                              >
                                <img
                                  src="https://html.hixstudio.net/orfarm/assets/img/product/products1-min.jpg"
                                  alt=""
                                />
                              </Link>
                              <div className="tpproduct__info bage">
                                <span className="tpproduct__info-discount bage__discount">
                                  -{product.discountPercentage}%
                                </span>
                                <span className="tpproduct__info-hot bage__hot">
                                  HOT
                                </span>
                              </div>
                              <div className="tpproduct__shopping">
                                <Link
                                  className="tpproduct__shopping-wishlist"
                                  to="wishlist"
                                >
                                  <i className="icon-heart icons"></i>
                                </Link>

                                <Link
                                  className="tpproduct__shopping-cart"
                                  to="#"
                                >
                                  <i className="icon-eye"></i>
                                </Link>
                              </div>
                            </div>
                            <div className="tpproduct__content">
                              <span className="tpproduct__content-weight">
                                <Link to="shop-details-3">
                                  {" "}
                                  {product.category}
                                </Link>
                                ,
                              </span>
                              <h4 className="tpproduct__title">
                                <Link to="shop-details-top-">
                                  {product.productTitle}
                                </Link>
                              </h4>
                              <div className="tpproduct__rating mb-5">
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                              </div>
                              <div className="tpproduct__price">
                                <span>{product.oneTimePrice}</span>
                                <del>$19.00</del>
                              </div>
                            </div>
                            <div className="tpproduct__hover-text">
                              <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                <Link className="tp-btn-2" to="cart">
                                  Add to cart
                                </Link>
                              </div>
                              <div className="tpproduct__descrip">
                                <ul>
                                  <li>Rating: {product.rating}</li>
                                  <li>Stock: {product.stock}</li>
                                  <li>LIFE: 60 days</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade whight-product"
                    id="nav-product"
                    role="tabpanel"
                    aria-labelledby="nav-product-tab"
                  >
                    {latestproduct.map((product, index) => (
                      <div className="row" key={index}>
                        <div className="col-lg-12">
                          <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                            <div className="tplist__product-img">
                              <Link to="#" className="tplist__product-img-one">
                                <img
                                  src={product.image}
                                  alt=""
                                  style={{ height: "150px" }}
                                />
                              </Link>
                              <Link
                                className="tplist__product-img-two"
                                to="shop-details"
                              >
                                <img
                                  src="https://html.hixstudio.net/orfarm/assets/img/product/products48-min.jpg"
                                  alt=""
                                />
                              </Link>
                              <div className="tpproduct__info bage">
                                <span className="tpproduct__info-discount bage__discount">
                                  -{product.discountPercentage}%
                                </span>
                                <span className="tpproduct__info-hot bage__hot">
                                  HOT
                                </span>
                              </div>
                            </div>
                            <div className="tplist__content">
                              <h4 className="tplist__content-title">
                                <Link to="#">{product.productTitle}</Link>
                              </h4>
                              <div className="tplist__rating mb-5">
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                                <Link to="#">
                                  <i className="icon-star_outline1"></i>
                                </Link>
                              </div>
                              <ul className="tplist__content-info">
                                <li>Delicous Non-Dairy cheese sauce</li>
                                <li>Vegan & Allergy Friendly</li>
                                <li>Smooth, velvety Dairy free cheese sauce</li>
                              </ul>
                            </div>
                            <div className="tplist__price justify-content-end">
                              <h4 className="tplist__instock">
                                Availability: <span> {product.stock}</span>{" "}
                              </h4>
                              <h3 className="tplist__count mb-15">
                                {product.oneTimePrice}
                              </h3>
                              <button className="tp-btn-2 mb-10">
                                Add to cart
                              </button>
                              <div className="tplist__shopping">
                                <Link to="#">
                                  <i className="icon-heart icons"></i> wishlist
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop2;
