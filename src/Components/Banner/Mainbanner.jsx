import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import sliderimage from "../../assets/Images/banner_img01.png";
import sliderimage2 from "../../assets/Images/features_img.png";
// import sliderimage3 from "../../assets/Images/features_img1.png";
import kerte from "../../assets/Images/kert1234.png";
import { Link } from "react-router-dom";
function Mainbanner() {
  useEffect(() => {
    const slider = new Swiper(".slider-active", {
      loop: true,
      slidesPerView: 1,
      fade: true,

      autoplay: {
        delay: 500,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".tpslider__arrow-nxt",
        prevEl: ".tpslider__arrow-prv",
      },
      pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
    });
    const prevButton = document.querySelector(".tpslider__arrow-prv");
    const nextButton = document.querySelector(".tpslider__arrow-nxt");

    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
        slider.slidePrev();
      });

      nextButton.addEventListener("click", () => {
        slider.slideNext();
      });
    }

    // Clean up Swiper instance on unmount
    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <>
      <section className="slider-area tpslider-delay">
        <div className="swiper-container slider-active">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="tpslider pt-90 pb-0 grey-bg"
                data-background="https://html.hixstudio.net/orfarm/assets/img/slider/shape-bg.jpg"
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-lg-6 col-md-6 col-12 col-sm-6">
                      <div className="tpslider__content pt-20">
                        <span className="tpslider__sub-title mb-35">
                          Top Seller In The Week
                        </span>
                        <h2 className="tpslider__title mb-30">
                          Grow Your Health
                        </h2>
                        <p>
                          Enhance Health with Nutrient-Packed Superfoods <br />
                          look good and taste even better
                        </p>
                        <div className="tpslider__btn">
                          <Link className="tp-btn" to="shop-2">
                            Discover Microgreen Magic
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-7 col-lg-6 col-md-6 col-12 col-sm-6">
                      <div className="tpslider__thumb p-relative pt-15">
                        <img
                          className="tpslider__thumb-img"
                          src={kerte}
                          alt="slider-bg"
                        />
                        <div className="tpslider__shape d-none d-md-block">
                          <img
                            className="tpslider__shape-one"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-1.png"
                            alt="shape"
                          />
                          <img
                            className="tpslider__shape-two"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-2.png"
                            alt="shape"
                          />
                          <img
                            className="tpslider__shape-three"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-3.png"
                            alt="shape"
                          />
                          <img
                            className="tpslider__shape-four"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-4.png"
                            alt="shape"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="tpslider pt-90 pb-0 grey-bg"
                data-background="https://html.hixstudio.net/orfarm/assets/img/slider/shape-bg.jpg"
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-lg-6 col-md-6 col-sm-6">
                      <div className="tpslider__content pt-20">
                        <span className="tpslider__sub-title mb-35">
                          Top Seller In The Week
                        </span>
                        <h2 className="tpslider__title mb-30">
                          #1 Alternative to <br />
                          Supplements
                        </h2>
                        <p>
                          Grow your superfoods rolls <br />
                          look good and taste even better
                        </p>
                        <div className="tpslider__btn">
                          <Link className="tp-btn" to="shop-2">
                            Discover Microgreen Magic
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-7 col-lg-6 col-md-6 col-sm-6">
                      <div className="tpslider__thumb p-relative">
                        <img
                          className="tpslider__thumb-img"
                          src={sliderimage}
                          alt="slider-bg"
                        />
                        <div className="tpslider__shape d-none d-md-block">
                          <img
                            className="tpslider__shape-one"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-1.png"
                            alt="shape"
                          />
                          <img
                            className="tpslider__shape-two"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-2.png"
                            alt="shape"
                          />
                          <img
                            className="tpslider__shape-three"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-3.png"
                            alt="shape"
                          />
                          <img
                            className="tpslider__shape-four"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-4.png"
                            alt="shape"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="tpslider pt-90 pb-0 grey-bg"
                data-background="https://html.hixstudio.net/orfarm/assets/img/slider/shape-bg.jpg"
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="tpslider__content pt-20">
                        <span className="tpslider__sub-title mb-35">
                          Top Seller In The Week
                        </span>
                        <h2 className="tpslider__title mb-30">
                          The Best <br />
                          Health Fresh.
                        </h2>
                        <p>
                          Presentation matters. Our fresh Vietnamese vegetable
                          rolls <br />
                          look good and taste even better
                        </p>
                        <div className="tpslider__btn">
                          <Link className="tp-btn" to="shop-2">
                            Discover Microgreen Magic
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="tpslider__thumb p-relative">
                        <img
                          className="tpslider__thumb-img"
                          src={sliderimage2}
                          alt="slider-bg"
                        />
                        <div className="tpslider__shape d-none d-md-block">
                          <img
                            className="tpslider__shape-one"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-1.png"
                            alt="shape"
                          />
                          <img
                            className="tpslider__shape-two"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-2.png"
                            alt="shape"
                          />
                          <img
                            className="tpslider__shape-three"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-3.png"
                            alt="shape"
                          />
                          <img
                            className="tpslider__shape-four"
                            src="https://html.hixstudio.net/orfarm/assets/img/slider/slider-shape-4.png"
                            alt="shape"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-pagination d-xxl-none"></div>
        </div>
      </section>
    </>
  );
}

export default Mainbanner;
