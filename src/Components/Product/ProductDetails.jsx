import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
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
        const response = await fetch(`/api/v1/Product/product?id=${id}`);
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
                                <img
                                  src="https://html.hixstudio.net/orfarm/assets/img/product/product-details-1.png"
                                  alt=""
                                />
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
                                <img
                                  src={products.image}
                                  alt=""
                                  style={{ maxHeight: "450px" }}
                                />
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
                                <img
                                  src="https://html.hixstudio.net/orfarm/assets/img/product/product-details-3.png"
                                  alt=""
                                />
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
                                  <img
                                    src="https://html.hixstudio.net/orfarm/assets/img/product/product-detaisl-item1.png"
                                    alt=""
                                  />
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
                                  <img
                                    src="https://html.hixstudio.net/orfarm/assets/img/product/product-detaisl-item2.png"
                                    alt=""
                                  />
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
                                  <img
                                    src="https://html.hixstudio.net/orfarm/assets/img/product/product-detaisl-item3.png"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </nav>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="product__details">
                            <div className="product__details-price-box">
                              <h5 className="product__details-price">
                                Rs{products.oneTimePrice}
                              </h5>
                              <ul className="product__details-info-list">
                                <li>{products.category}</li>
                                <li>Vegan & Allergy friendly</li>
                                <li>Smooth, velvety dairy free cheese sauce</li>
                              </ul>
                            </div>
                            <div className="product__details-cart">
                              <div className="product__details-quantity d-flex align-items-center mb-15">
                                <b>Qty:</b>
                                <div className="product__details-count mr-10">
                                  <span
                                    className="cart-minus"
                                    onClick={decreaseQuantity}
                                  >
                                    <i className="far fa-minus"></i>
                                  </span>
                                  <input
                                    className="tp-cart-input"
                                    type="text"
                                    value={quantity}
                                  />
                                  <span
                                    className="cart-plus"
                                    onClick={increaseQuantity}
                                  >
                                    <i className="far fa-plus"></i>
                                  </span>
                                </div>
                                <div className="product__details-btn">
                                  <Link to="cart">add to cart</Link>
                                </div>
                              </div>
                              <ul className="product__details-check">
                                <li>
                                  <Link to="#">
                                    <i className="icon-heart icons"></i> add to
                                    wishlist
                                  </Link>
                                </li>
                              </ul>
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
                          <p>{products.description}</p>
                        </div>
                        <div className="tpdescription__product-wrapper mt-30 mb-30 d-flex justify-content-between align-items-center">
                          <div className="tpdescription__product-info">
                            <h5 className="tpdescription__product-title">
                              PRODUCT DETAILS
                            </h5>
                            <ul className="tpdescription__product-info">
                              <li>Material: Plastic, Wood</li>
                              <li>Legs: Lacquered oak and black painted oak</li>
                              <li>
                                Dimensions and Weight: Height: 80 cm, Weight:
                                5.3 kg
                              </li>
                              <li>Length: 48cm</li>
                              <li>Depth: 52 cm</li>
                            </ul>
                            <p>
                              Lemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut <br /> fugit, sed quia
                              consequuntur magni dolores eos qui ratione
                              voluptatem <br /> sequi nesciunt.
                            </p>
                          </div>
                        </div>
                        <div className="tpdescription__video">
                          <h5 className="tpdescription__product-title">
                            PRODUCT DETAILS
                          </h5>
                          <p>
                            Form is an armless modern chair with a minimalistic
                            expression. With a simple and contemporary design
                            Form Chair has a soft and welcoming ilhouette and a
                            distinctly residential look. The legs appear almost
                            as if they are growing out of the shell. This gives
                            the design flexibility and makes it possible to vary
                            the frame. Unika is a mouth blown series of small,
                            glass pendant lamps, originally designed for the
                            Restaurant Gronbech. Est eum itaque maiores qui
                            blanditiis architecto. Eligendi saepe rem ut. Cumque
                            quia earum eligendi.
                          </p>

                          <h5 className="tpdescription__product-title">
                            Product supreme quality
                          </h5>
                          <p>
                            Form is an armless modern chair with a minimalistic
                            expression. With a simple and contemporary design
                            Form Chair has a soft and welcoming ilhouette and a
                            distinctly residential look. The legs appear almost
                            as if they are growing out of the shell. This gives
                            the design flexibility and makes it possible to vary
                            the frame. Unika is a mouth blown series of small,
                            glass pendant lamps, originally designed for the
                            Restaurant Gronbech. Est eum itaque maiores qui
                            blanditiis architecto. Eligendi saepe rem ut. Cumque
                            quia earum eligendi.
                          </p>
                          <p>
                            Duis semper erat mauris, sed egestas purus commodo.
                            Cras imperdiet est in nunc tristique lacinia. Nullam
                            aliquam mauris eu accumsan tincidunt. Suspendisse
                            velit ex, aliquet vel ornare vel, dignissim a
                            tortor. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate.
                          </p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-information"
                        role="tabpanel"
                        aria-labelledby="nav-info-tab"
                        tabIndex="0"
                      >
                        <div className="tpdescription__content">
                          <p>
                            Designed by Puik in 1949 as one of the first models
                            created especially for Carl Hansen & Son, and
                            produced since 1950. The last of a series of chairs
                            wegner designed based on inspiration from antique
                            chinese armchairs. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia eserunt
                            mollit anim id est laborum. Sed ut perspiciatis unde
                            omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, aque ipsa
                            quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                          </p>
                        </div>
                        <div className="tpdescription__product-wrapper mt-30 mb-30 d-flex justify-content-between align-items-center">
                          <div className="tpdescription__product-info">
                            <h5 className="tpdescription__product-title">
                              PRODUCT DETAILS
                            </h5>
                            <ul className="tpdescription__product-info">
                              <li>Material: Plastic, Wood</li>
                              <li>Legs: Lacquered oak and black painted oak</li>
                              <li>
                                Dimensions and Weight: Height: 80 cm, Weight:
                                5.3 kg
                              </li>
                              <li>Length: 48cm</li>
                              <li>Depth: 52 cm</li>
                            </ul>
                            <p>
                              Lemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut <br /> fugit, sed quia
                              consequuntur magni dolores eos qui ratione
                              voluptatem <br /> sequi nesciunt.
                            </p>
                          </div>
                          <div className="tpdescription__product-thumb">
                            <img
                              src="https://html.hixstudio.net/orfarm/assets/img/product/product-single-1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="tpdescription__video">
                          <h5 className="tpdescription__product-title">
                            PRODUCT DETAILS
                          </h5>
                          <p>
                            Form is an armless modern chair with a minimalistic
                            expression. With a simple and contemporary design
                            Form Chair has a soft and welcoming ilhouette and a
                            distinctly residential look. The legs appear almost
                            as if they are growing out of the shell. This gives
                            the design flexibility and makes it possible to vary
                            the frame. Unika is a mouth blown series of small,
                            glass pendant lamps, originally designed for the
                            Restaurant Gronbech. Est eum itaque maiores qui
                            blanditiis architecto. Eligendi saepe rem ut. Cumque
                            quia earum eligendi.
                          </p>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="nav-review"
                        role="tabpanel"
                        aria-labelledby="nav-review-tab"
                        tabIndex="0"
                      >
                        <div className="tpreview__wrapper">
                          <h4 className="tpreview__wrapper-title">
                            1 review for Cheap and delicious fresh chicken
                          </h4>
                          <div className="tpreview__comment">
                            <div className="tpreview__comment-img mr-20">
                              <img
                                src="https://html.hixstudio.net/orfarm/assets/img/testimonial/test-avata-1.png"
                                alt=""
                              />
                            </div>
                            <div className="tpreview__comment-text">
                              <div className="tpreview__comment-autor-info d-flex align-items-center justify-content-between">
                                <div className="tpreview__comment-author">
                                  <span>admin</span>
                                </div>
                                <div className="tpreview__comment-star">
                                  <i className="icon-star_outline1"></i>
                                  <i className="icon-star_outline1"></i>
                                  <i className="icon-star_outline1"></i>
                                  <i className="icon-star_outline1"></i>
                                  <i className="icon-star_outline1"></i>
                                </div>
                              </div>
                              <span className="date mb-20">
                                --April 9, 2022:
                              </span>
                              <p>very good</p>
                            </div>
                          </div>
                          <div className="tpreview__form">
                            <h4 className="tpreview__form-title mb-25">
                              Add a review
                            </h4>
                            <form action="#">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="tpreview__input mb-30">
                                    <input type="text" placeholder="Name" />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="tpreview__input mb-30">
                                    <input type="email" placeholder="Email" />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="tpreview__star mb-20">
                                    <h4 className="title">Your Rating</h4>
                                    <div className="tpreview__star-icon">
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
                                  </div>
                                  <div className="tpreview__input mb-30">
                                    <textarea
                                      name="text"
                                      placeholder="Message"
                                    ></textarea>
                                    <div className="tpreview__submit mt-30">
                                      <button className="tp-btn">Submit</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
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
                          <Link to="shop-details-3">Fresh Fruits</Link>
                        </span>
                        <h4 className="tpsidebar__product-title">
                          <Link to="shop-details-3">
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
                          <Link to="shop-details-3">Fresh Fruits</Link>
                        </span>
                        <h4 className="tpsidebar__product-title">
                          <Link to="shop-details-3">
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
                          <Link to="shop-details-3">Fresh Fruits</Link>
                        </span>
                        <h4 className="tpsidebar__product-title">
                          <Link to="shop-details-grid">
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
                <h5 className="tpdescription__product-title mb-20">
                  Related Products
                </h5>
              </div>
            </div>
            <div className="tpproduct__arrow double-product p-relative">
              <div className="swiper-container tpproduct-active tpslider-bottom p-relative">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <a href="#">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products29-min.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="tpproduct__thumb-img"
                          href="shop-details.html"
                        >
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products30-min.jpg"
                            alt=""
                          />
                        </a>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            -50%
                          </span>
                          <span className="tpproduct__info-hot bage__hot">
                            HOT
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <a
                            className="tpproduct__shopping-wishlist"
                            href="wishlist.html"
                          >
                            <i className="icon-heart icons"></i>
                          </a>
                          <a className="tpproduct__shopping-wishlist" href="#">
                            <i className="icon-layers"></i>
                          </a>
                          <a className="tpproduct__shopping-cart" href="#">
                            <i className="icon-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <a href="shop-details.html">Fresh Meat</a>
                        </span>
                        <h4 className="tpproduct__title">
                          <a href="shop-details-top-.html">
                            Mangosteen Organic From VietNamese
                          </a>
                        </h4>
                        <div className="tpproduct__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <div className="tpproduct__price">
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <a className="tp-btn-2" href="cart.html">
                            Add to cart
                          </a>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Type: Organic</li>
                            <li>MFG: August 4.2021</li>
                            <li>LIFE: 60 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <a href="#">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products9-min.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="tpproduct__thumb-img"
                          href="shop-details.html"
                        >
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products10-min.jpg"
                            alt=""
                          />
                        </a>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            -40%
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <a
                            className="tpproduct__shopping-wishlist"
                            href="wishlist.html"
                          >
                            <i className="icon-heart icons"></i>
                          </a>
                          <a className="tpproduct__shopping-wishlist" href="#">
                            <i className="icon-layers"></i>
                          </a>
                          <a className="tpproduct__shopping-cart" href="#">
                            <i className="icon-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <a href="shop-details.html">Fresh Meat</a>
                        </span>
                        <h4 className="tpproduct__title">
                          <a href="shop-details-top.html">
                            Soda Sparkling Water Maker (Rose Gold)
                          </a>
                        </h4>
                        <div className="tpproduct__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <div className="tpproduct__price">
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <a className="tp-btn-2" href="cart.html">
                            Add to cart
                          </a>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Type: Organic</li>
                            <li>MFG: August 4.2021</li>
                            <li>LIFE: 60 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <a href="#">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products13-min.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="tpproduct__thumb-img"
                          href="shop-details.html"
                        >
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products35-min.jpg"
                            alt=""
                          />
                        </a>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            -10%
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <a
                            className="tpproduct__shopping-wishlist"
                            href="wishlist.html"
                          >
                            <i className="icon-heart icons"></i>
                          </a>
                          <a className="tpproduct__shopping-wishlist" href="#">
                            <i className="icon-layers"></i>
                          </a>
                          <a className="tpproduct__shopping-cart" href="#">
                            <i className="icon-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <a href="shop-details-3.html">Fresh Fruits</a>
                        </span>
                        <h4 className="tpproduct__title">
                          <a href="shop-details.html">
                            HOT - Lettuce Fresh Produce Fruit Vegetables
                          </a>
                        </h4>
                        <div className="tpproduct__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <div className="tpproduct__price">
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <a className="tp-btn-2" href="cart.html">
                            Add to cart
                          </a>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Type: Organic</li>
                            <li>MFG: August 4.2021</li>
                            <li>LIFE: 60 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <a href="#">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products27-min.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="tpproduct__thumb-img"
                          href="shop-details.html"
                        >
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products14-min.jpg"
                            alt=""
                          />
                        </a>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            -90%
                          </span>
                          <span className="tpproduct__info-hot bage__hot">
                            HOT
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <a
                            className="tpproduct__shopping-wishlist"
                            href="wishlist.html"
                          >
                            <i className="icon-heart icons"></i>
                          </a>
                          <a className="tpproduct__shopping-wishlist" href="#">
                            <i className="icon-layers"></i>
                          </a>
                          <a className="tpproduct__shopping-cart" href="#">
                            <i className="icon-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <a href="shop-details-3.html">Fresh Fruits</a>
                        </span>
                        <h4 className="tpproduct__title">
                          <a href="shop-details-grid.html">
                            Pure Irish Organic Beef Quarter Pounder Burgers
                          </a>
                        </h4>
                        <div className="tpproduct__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <div className="tpproduct__price">
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <a className="tp-btn-2" href="cart.html">
                            Add to cart
                          </a>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Type: Organic</li>
                            <li>MFG: August 4.2021</li>
                            <li>LIFE: 60 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <a href="#">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products15-min.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="tpproduct__thumb-img"
                          href="shop-details.html"
                        >
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products32-min.jpg"
                            alt=""
                          />
                        </a>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            -50%
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <a
                            className="tpproduct__shopping-wishlist"
                            href="wishlist.html"
                          >
                            <i className="icon-heart icons"></i>
                          </a>
                          <a className="tpproduct__shopping-wishlist" href="#">
                            <i className="icon-layers"></i>
                          </a>
                          <a className="tpproduct__shopping-cart" href="#">
                            <i className="icon-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <a href="shop-details-3.html">Vagetables</a>
                        </span>
                        <h4 className="tpproduct__title">
                          <a href="shop-details-3.html">
                            Ginger Fresh, Whole, Organic - 250gram
                          </a>
                        </h4>
                        <div className="tpproduct__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <div className="tpproduct__price">
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <a className="tp-btn-2" href="cart.html">
                            Add to cart
                          </a>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Type: Organic</li>
                            <li>MFG: August 4.2021</li>
                            <li>LIFE: 60 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <a href="#">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products12-min.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="tpproduct__thumb-img"
                          href="shop-details.html"
                        >
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products28-min.jpg"
                            alt=""
                          />
                        </a>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            -40%
                          </span>
                          <span className="tpproduct__info-hot bage__hot">
                            HOT
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <a
                            className="tpproduct__shopping-wishlist"
                            href="wishlist.html"
                          >
                            <i className="icon-heart icons"></i>
                          </a>
                          <a className="tpproduct__shopping-wishlist" href="#">
                            <i className="icon-layers"></i>
                          </a>
                          <a className="tpproduct__shopping-cart" href="#">
                            <i className="icon-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <a href="shop-details-3.html">Fresh Fruits</a>
                        </span>
                        <h4 className="tpproduct__title">
                          <a href="shop-details-grid.html">
                            Laffy Taffy Laff Bites Gone Bananas - 4 Packs
                          </a>
                        </h4>
                        <div className="tpproduct__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <div className="tpproduct__price">
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <a className="tp-btn-2" href="cart.html">
                            Add to cart
                          </a>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Type: Organic</li>
                            <li>MFG: August 4.2021</li>
                            <li>LIFE: 60 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <a href="#">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products12-min.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="tpproduct__thumb-img"
                          href="shop-details.html"
                        >
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products28-min.jpg"
                            alt=""
                          />
                        </a>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            -40%
                          </span>
                          <span className="tpproduct__info-hot bage__hot">
                            HOT
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <a
                            className="tpproduct__shopping-wishlist"
                            href="wishlist.html"
                          >
                            <i className="icon-heart icons"></i>
                          </a>
                          <a className="tpproduct__shopping-wishlist" href="#">
                            <i className="icon-layers"></i>
                          </a>
                          <a className="tpproduct__shopping-cart" href="#">
                            <i className="icon-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <a href="shop-details-3.html">Fresh Fruits</a>
                        </span>
                        <h4 className="tpproduct__title">
                          <a href="shop-details-grid.html">
                            Laffy Taffy Laff Bites Gone Bananas - 4 Packs
                          </a>
                        </h4>
                        <div className="tpproduct__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <div className="tpproduct__price">
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <a className="tp-btn-2" href="cart.html">
                            Add to cart
                          </a>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Type: Organic</li>
                            <li>MFG: August 4.2021</li>
                            <li>LIFE: 60 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <a href="#">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products12-min.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="tpproduct__thumb-img"
                          href="shop-details.html"
                        >
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products28-min.jpg"
                            alt=""
                          />
                        </a>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            -40%
                          </span>
                          <span className="tpproduct__info-hot bage__hot">
                            HOT
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <a
                            className="tpproduct__shopping-wishlist"
                            href="wishlist.html"
                          >
                            <i className="icon-heart icons"></i>
                          </a>
                          <a className="tpproduct__shopping-wishlist" href="#">
                            <i className="icon-layers"></i>
                          </a>
                          <a className="tpproduct__shopping-cart" href="#">
                            <i className="icon-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <a href="shop-details-3.html">Fresh Fruits</a>
                        </span>
                        <h4 className="tpproduct__title">
                          <a href="shop-details-grid.html">
                            Laffy Taffy Laff Bites Gone Bananas - 4 Packs
                          </a>
                        </h4>
                        <div className="tpproduct__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <div className="tpproduct__price">
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <a className="tp-btn-2" href="cart.html">
                            Add to cart
                          </a>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Type: Organic</li>
                            <li>MFG: August 4.2021</li>
                            <li>LIFE: 60 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <a href="#">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products12-min.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="tpproduct__thumb-img"
                          href="shop-details.html"
                        >
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/product/products28-min.jpg"
                            alt=""
                          />
                        </a>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            -40%
                          </span>
                          <span className="tpproduct__info-hot bage__hot">
                            HOT
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <a
                            className="tpproduct__shopping-wishlist"
                            href="wishlist.html"
                          >
                            <i className="icon-heart icons"></i>
                          </a>
                          <a className="tpproduct__shopping-wishlist" href="#">
                            <i className="icon-layers"></i>
                          </a>
                          <a className="tpproduct__shopping-cart" href="#">
                            <i className="icon-eye"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <a href="shop-details-3.html">Fresh Fruits</a>
                        </span>
                        <h4 className="tpproduct__title">
                          <a href="shop-details-grid.html">
                            Laffy Taffy Laff Bites Gone Bananas - 4 Packs
                          </a>
                        </h4>
                        <div className="tpproduct__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <div className="tpproduct__price">
                          <span>$56.00</span>
                          <del>$19.00</del>
                        </div>
                      </div>
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <a className="tp-btn-2" href="cart.html">
                            Add to cart
                          </a>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Type: Organic</li>
                            <li>MFG: August 4.2021</li>
                            <li>LIFE: 60 days</li>
                          </ul>
                        </div>
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

export default ProductDetails;
