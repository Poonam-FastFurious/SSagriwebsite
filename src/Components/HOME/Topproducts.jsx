import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Baseurl } from "../Confige";

function Topproducts() {
  const [topproduct, setTopproduct] = useState([]);
  const swiperRef = useRef(null);

  const addToCart = async (productId) => {
    try {
      const response = await fetch(Baseurl + "/api/v1/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Product added to cart:", data);
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart.");
    }
  };

  useEffect(() => {
    let swiper;

    setTimeout(() => {
      swiper = new Swiper(".tpproduct-active", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
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

      swiperRef.current = swiper;
    }, 100);

    // Cleanup function
    return () => {
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);
  useEffect(() => {
    const prevButton = document.querySelector(".tpproduct-btn__prv");
    const nextButton = document.querySelector(".tpproduct-btn__nxt");

    const handlePrevButtonClick = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };

    const handleNextButtonClick = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };

    if (prevButton && nextButton) {
      prevButton.addEventListener("click", handlePrevButtonClick);
      nextButton.addEventListener("click", handleNextButtonClick);
    }

    // Cleanup event listeners
    return () => {
      if (prevButton && nextButton) {
        prevButton.removeEventListener("click", handlePrevButtonClick);
        nextButton.removeEventListener("click", handleNextButtonClick);
      }
    };
  }, []);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Product/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTopproduct(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <section className="weekly-product-area grey-bg pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-20">
                <h4 className="tpsection__sub-title">~ Products ~</h4>
                <h4 className="tpsection__title">Top Product</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tpnavtab__area pb-40">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-all"
                    role="tabpanel"
                    aria-labelledby="nav-all-tab"
                    tabIndex="0"
                  >
                    <div className="tpproduct__arrow p-relative">
                      <div className="swiper-container tpproduct-active tpslider-bottom p-relative">
                        <div className="swiper-wrapper">
                          {topproduct.map((product, index) => (
                            <div className="swiper-slide" key={index}>
                              <div className="tpproduct p-relative">
                                <div className="tpproduct__thumb p-relative text-center">
                                  <Link to={`/Product/${product._id}`}>
                                    <img src={product.image} alt="" />
                                  </Link>
                                  <Link
                                    className="tpproduct__thumb-img"
                                    to={`/Product/${product._id}`}
                                  >
                                    <img src={product.thumbnail} alt="" />
                                  </Link>
                                  <div className="tpproduct__info bage">
                                    <span className="tpproduct__info-discount bage__discount">
                                      -{product.discountPercentage}%
                                    </span>
                                    <span className="tpproduct__info-hot bage__hot">
                                      HOT
                                    </span>
                                  </div>
                                  <div className="tpproduct__shopping ">
                                    <Link
                                      className="tpproduct__shopping-wishlist"
                                      to="#"
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
                                    <Link to={`/Product/${product._id}`}>
                                      {product.category}
                                    </Link>
                                  </span>
                                  <h4 className="tpproduct__title">
                                    <Link to={`/Product/${product._id}`}>
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
                                    <del className="pl-10">
                                      {product.subscriptionPrice}
                                    </del>
                                  </div>
                                </div>
                                <div className="tpproduct__hover-text">
                                  <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                    <Link
                                      className="tp-btn-2"
                                      to="#"
                                      onClick={() => addToCart(product._id)}
                                    >
                                      Add to cart
                                    </Link>
                                  </div>
                                  <div className="tpproduct__descrip">
                                    <ul>
                                      <li>Stock: {product.stock}</li>
                                      <li>Rating:{product.rating}</li>
                                      <li>LIFE: 60 days</li>
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
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tpproduct__all-item text-center">
                <span>
                  Discover thousands of other quality products.
                  <Link to="shop-3">
                    Shop All Products <i className="icon-chevrons-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Topproducts;
