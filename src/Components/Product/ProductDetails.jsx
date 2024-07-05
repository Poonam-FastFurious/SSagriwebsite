import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Baseurl } from "../Confige";
import { addToCart } from "../Utils/Addtocartutils";

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [newproduct, setNewproduct] = useState([]);

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Product/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNewproduct(data.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const tpproductswiper = new Swiper(".tpproduct-active", {
      loop: true,
      slidesPerView: 6,
      spaceBetween: 20,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 6,
        },
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".tpproduct-btn__nxt",
        prevEl: ".tpproduct-btn__prv",
      },
    });

    // Clean up Swiper instance when component unmounts
    return () => {
      tpproductswiper.destroy();
    };
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${Baseurl}/api/v1/Product/product?id=${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (err) {
        throw new Error("data not fetch ", err);
      }
    };

    fetchProducts();
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
                      <Link to="/">Home</Link>
                    </span>
                    <span className="dvdr">/</span>
                    <span className="tp-breadcrumb__active">
                      <Link to="/">Breakfast </Link>
                    </span>
                    <span className="dvdr">/</span>
                    <span>Fresh microgreen 100% Organic From VietNamese</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="shopdetails-area grey-bg pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-12">
                <div className="tpdetails__area mr-60 pb-30">
                  <div className="tpdetails__product mb-30">
                    <div className="tpdetails__title-box">
                      <h3 className="tpdetails__title">
                        {products.productTitle}
                      </h3>
                      <ul className="tpdetails__brand">
                        <li>
                          <i className="icon-star_outline1"></i>
                          <i className="icon-star_outline1"></i>
                          <i className="icon-star_outline1"></i>
                          <i className="icon-star_outline1"></i>
                          <i className="icon-star_outline1"></i>
                          <b>{products.rating}review</b>
                        </li>
                      </ul>
                    </div>
                    <div className="tpdetails__box">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="tpproduct-details__nab">
                            <div className="tab-content" id="nav-tabContents">
                              <div
                                className="tab-pane fade show active w-img"
                                id="nav-home"
                                role="tabpanel"
                                aria-labelledby="nav-home-tab"
                                tabIndex="0"
                              >
                                <img src={products.image} alt="" />
                                <div className="tpproduct__info bage">
                                  <span className="tpproduct__info-hot bage__hot">
                                    HOT
                                  </span>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade w-img"
                                id="nav-profile"
                                role="tabpanel"
                                aria-labelledby="nav-profile-tab"
                                tabIndex="0"
                              >
                                <img src={products.image} alt="" />
                                <div className="tpproduct__info bage">
                                  <span className="tpproduct__info-discount bage__discount">
                                    -{products.discountPercentage}%
                                  </span>
                                  <span className="tpproduct__info-hot bage__hot">
                                    HOT
                                  </span>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade w-img"
                                id="nav-contact"
                                role="tabpanel"
                                aria-labelledby="nav-contact-tab"
                                tabIndex="0"
                              >
                                <img src={products.image} alt="" />
                                <div className="tpproduct__info bage">
                                  <span className="tpproduct__info-hot bage__hot">
                                    HOT
                                  </span>
                                </div>
                              </div>
                            </div>
                            <nav>
                              <div
                                className="nav nav-tabs justify-content-center"
                                id="nav-tab"
                                role="tablist"
                              >
                                <button
                                  className="nav-link active"
                                  id="nav-home-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-home"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-home"
                                  aria-selected="true"
                                >
                                  <img src={products.image} alt="" />
                                </button>
                                <button
                                  className="nav-link"
                                  id="nav-profile-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-profile"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-profile"
                                  aria-selected="false"
                                >
                                  <img src={products.image} alt="" />
                                </button>
                                <button
                                  className="nav-link"
                                  id="nav-contact-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-contact"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-contact"
                                  aria-selected="false"
                                >
                                  <img src={products.image} alt="" />
                                </button>
                                <button
                                  className="nav-link"
                                  id="nav-contact-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-contact"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-contact"
                                  aria-selected="false"
                                >
                                  <img src={products.image} alt="" />
                                </button>{" "}
                                <button
                                  className="nav-link"
                                  id="nav-contact-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-contact"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-contact"
                                  aria-selected="false"
                                >
                                  <img src={products.image} alt="" />
                                </button>
                              </div>
                            </nav>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="product__details">
                            <div className="product__details-price-box">
                              <h5 className="product__details-price">
                                ₹{products.oneTimePrice}
                              </h5>
                              <ul className="product__details-info-list">
                                <li>{products.category}</li>
                                <li>{products.productTitle}</li>
                                <li>Smooth, velvety dairy free cheese sauce</li>
                              </ul>
                            </div>
                            <div className="product__details-cart">
                              <div className="product__table mb-20">
                                <form action="#">
                                  <div className="table-responsive">
                                    <table>
                                      <tbody>
                                        <tr>
                                          <td className="product__table-count">
                                            <div className="product__details-count mr-10">
                                              <input
                                                className="tp-cart-input"
                                                type="checkbox"
                                                value="1"
                                              />
                                              <span className="cart-plus">
                                                <i
                                                  className="far fa-plus"
                                                  style={{
                                                    visibility: "hidden",
                                                  }}
                                                ></i>
                                              </span>
                                            </div>
                                          </td>
                                          <td className="product__table-title">
                                            <Link to="#">OneTime Price</Link>
                                          </td>
                                          <td className="product__table-price">
                                            <span>
                                              ₹{products.oneTimePrice}
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="product__table-count">
                                            <div className="product__details-count mr-10">
                                              <input
                                                className="tp-cart-input"
                                                type="checkbox"
                                                value="1"
                                              />
                                              <span className="cart-plus">
                                                <i
                                                  className="far fa-plus"
                                                  style={{
                                                    visibility: "hidden",
                                                  }}
                                                ></i>
                                              </span>
                                            </div>
                                          </td>
                                          <td className="product__table-title">
                                            <Link to="#">
                                              Subscription Price
                                            </Link>
                                          </td>
                                          <td className="product__table-price">
                                            <span>
                                              ₹{products.subscriptionPrice}
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </form>
                              </div>
                              <div className="product__details-cart">
                                <div className="product__details-quantity d-flex align-items-center mb-35">
                                  <div className="product__details-btn">
                                    <Link
                                      to="#"
                                      onClick={() =>
                                        handleAddToCart(products._id)
                                      }
                                    >
                                      add to cart
                                    </Link>
                                  </div>
                                </div>
                                <ul className="product__details-check">
                                  <li>
                                    <Link to="#">
                                      <i className="icon-heart icons"></i> add
                                      to wishlist
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details-stock mb-25">
                              <ul>
                                <li>
                                  Availability: <i>{products.stock} Instock</i>
                                </li>
                                <li>
                                  Categories:
                                  <span>
                                    Vegetables, Meat & Eggs, Fruit Drink
                                  </span>
                                </li>
                                <li>
                                  Tags: <span>Chicken, Natural, Organic</span>
                                </li>
                              </ul>
                            </div>
                            <div className="product__details-payment text-center">
                              <img
                                src="https://ssagriqulture.com/assets/img/others/card_img.png"
                                alt=""
                              />
                              <span>Guarantee safe & Secure checkout</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tpdescription__box">
                    <div className="tpdescription__box-center d-flex ">
                      <nav>
                        <div className="nav-tabs" role="tablist">
                          <button
                            className="nav-link active"
                            id="nav-description-tab"
                          >
                            Product Description
                          </button>
                        </div>
                      </nav>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-description"
                        role="tabpanel"
                        aria-labelledby="nav-description-tab"
                        tabIndex="0"
                      >
                        <div className="tpdescription__content">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: products.description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="tpsidebar pb-30">
                  <div className="tpsidebar__banner mb-30">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/shape/sidebar-product-1.png"
                      alt=""
                    />
                  </div>
                  <div className="tpsidebar__product">
                    <h4 className="tpsidebar__title mb-15">Recent Products</h4>
                    <div className="tpsidebar__product-item">
                      <div className="tpsidebar__product-thumb p-relative">
                        <img
                          src="https://html.hixstudio.net/orfarm/assets/img/product/sidebar-pro-1.jpg"
                          alt=""
                        />
                        <div className="tpsidebar__info bage">
                          <span className="tpproduct__info-hot bage__hot">
                            HOT
                          </span>
                        </div>
                      </div>
                      <div className="tpsidebar__product-content">
                        <span className="tpproduct__product-category">
                          <Link to="#">Fresh Fruits</Link>
                        </span>
                        <h4 className="tpsidebar__product-title">
                          <Link to="#">
                            Fresh Mangosteen 100% Organic From VietNamese
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
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="tpsidebar__product-item">
                      <div className="tpsidebar__product-thumb p-relative">
                        <img
                          src="https://html.hixstudio.net/orfarm/assets/img/product/sidebar-pro-2.jpg"
                          alt=""
                        />
                        <div className="tpsidebar__info bage">
                          <span className="tpproduct__info-hot bage__hot">
                            HOT
                          </span>
                        </div>
                      </div>
                      <div className="tpsidebar__product-content">
                        <span className="tpproduct__product-category">
                          <Link to="#">Fresh Fruits</Link>
                        </span>
                        <h4 className="tpsidebar__product-title">
                          <Link to="#">
                            Fresh Mangosteen 100% Organic From VietNamese
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
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="tpsidebar__product-item">
                      <div className="tpsidebar__product-thumb p-relative">
                        <img
                          src="https://html.hixstudio.net/orfarm/assets/img/product/sidebar-pro-3.jpg"
                          alt=""
                        />
                        <div className="tpsidebar__info bage">
                          <span className="tpproduct__info-hot bage__hot">
                            HOT
                          </span>
                        </div>
                      </div>
                      <div className="tpsidebar__product-content">
                        <span className="tpproduct__product-category">
                          <Link to="#">Fresh Fruits</Link>
                        </span>
                        <h4 className="tpsidebar__product-title">
                          <Link to="#">
                            Fresh Mangosteen 100% Organic From VietNamese
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
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-area whight-product pt-75 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h5 className="tpdescription__product-title mb-20 text-24">
                  Related Products
                </h5>
              </div>
            </div>
            <div className="tpproduct__arrow double-product p-relative">
              <div className="swiper-container tpproduct-active tpslider-bottom p-relative">
                <div className="swiper-wrapper">
                  {newproduct.map((product, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="tpproduct p-relative">
                        <div className="tpproduct__thumb p-relative text-center">
                          <Link to="#">
                            <img src={product.image} alt="" />
                          </Link>
                          <Link className="tpproduct__thumb-img" to="#">
                            <img src={product.image} alt="" />
                          </Link>
                          <div className="tpproduct__info bage">
                            <span className="tpproduct__info-hot bage__discount">
                              HOT
                            </span>
                          </div>
                          <div className="tpproduct__shopping">
                            <Link
                              className="tpproduct__shopping-wishlist"
                              to="#"
                            >
                              <i className="icon-heart icons"></i>
                            </Link>
                            <Link
                              className="tpproduct__shopping-wishlist"
                              to="#"
                            >
                              <i className="icon-layers"></i>
                            </Link>
                            <Link className="tpproduct__shopping-cart" to="#">
                              <i className="icon-eye"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="tpproduct__content">
                          <span className="tpproduct__content-weight">
                            <Link to="#">{product.category}</Link>
                          </span>
                          <h4 className="tpproduct__title">
                            <Link to="#">{product.productTitle}</Link>
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
                            <span>₹{product.oneTimePrice}</span>
                            <del className="pl-10">
                              {product.discountPercentage}%
                            </del>
                          </div>
                        </div>
                        <div className="tpproduct__hover-text">
                          <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                            <Link
                              className="tp-btn-2"
                              to="#"
                              onClick={() => handleAddToCart(product._id)}
                            >
                              Add to cart
                            </Link>
                          </div>
                          <div className="tpproduct__descrip">
                            <ul>
                              <li>Stock: {product.stock}</li>
                              <li>Rating: {product.rating}</li>
                              <li>Type: Organic</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
