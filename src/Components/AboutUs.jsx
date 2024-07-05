/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
function AboutUs() {
  useEffect(() => {
    const tptestimonial = new Swiper(".tptestimonial-active3", {
      loop: true,
      slidesPerView: 3,
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
      breakpoints: {
        1400: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".tptestimonial__nxt",
        prevEl: ".tptestimonial__prv",
      },
    });

    // Cleanup function to destroy Swiper instance when component unmounts
    return () => {
      tptestimonial.destroy();
    };
  }, []);
  return (
    <>
      <main>
        <section className="about-area tpabout__inner-bg pt-175 pb-170 mb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tpabout__inner text-center">
                  <h5 className="tpabout__inner-sub mb-15">
                    About for SSAGRICULTURE
                  </h5>
                  <h3 className="tpabout__inner-title mb-35">Why us ?</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati perspiciatis commodi dolore pariatur, optio hic.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam fugit earum ab..
                  </p>
                  <div className="tpabout__inner-btn">
                    <Link to="#">About us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area pt-100 pb-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="tpabout__inner-thumb-2 p-relative mb-30">
                  <img
                    src="https://html.hixstudio.net/orfarm/assets/img/banner/about-inner-bg.png"
                    alt=""
                  />
                  <div className="tpabout__inner-thumb-shape d-none d-md-block">
                    <div className="tpabout__inner-thumb-shape-one">
                      <img
                        src="https://html.hixstudio.net/orfarm/assets/img/shape/tree-leaf-6.png"
                        alt=""
                      />
                    </div>
                    <div className="tpabout__inner-thumb-shape-two">
                      <img
                        src="https://html.hixstudio.net/orfarm/assets/img/shape/tree-leaf-7.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tpabout__inner-2 mb-30">
                  <div className="tpabout__inner-tag mb-10">
                    <span className="active">About us</span>
                    <span>Welcome to SSAgriculture</span>
                  </div>
                  <h3 className="tpabout__inner-title-2 mb-25">
                    We Help Your <br /> Health
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique eaque modi doloribus? <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit expedita possimus architecto? <br /> Lorem ipsum dolor
                    sit amet consectetur adipisicing elit.
                  </p>
                  <div className="tpabout__inner-list">
                    <ul>
                      <li>
                        <i className="icon-check"></i> Lorem ipsum dolor sit.
                      </li>
                      <li>
                        <i className="icon-check"></i> Lorem, ipsum.
                      </li>
                      <li>
                        <i className="icon-check"></i> Lorem ipsum dolor sit
                        amet, consectetur adipisicing.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area pb-35">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="tpabout__item text-center mb-40">
                  <div className="tpabout__icon mb-15">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/about-svg1.svg"
                      alt=""
                    />
                  </div>
                  <div className="tpabout__content">
                    <h4 className="tpabout__title">Try Us.</h4>
                    <p>
                      Choose from select produce to start. <br /> Keep, add, or
                      remove items.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="tpabout__item text-center mb-40">
                  <div className="tpabout__icon mb-15">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/about-svg2.svg"
                      alt=""
                    />
                  </div>
                  <div className="tpabout__content">
                    <h4 className="tpabout__title">Trust Us. </h4>
                    <p>
                      Lorem ipsum dolor sit.
                      <br />
                      Lorem ipsum dolor sit. Lorem, ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="tpabout__item text-center mb-40">
                  <div className="tpabout__icon mb-15">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/about-svg3.svg"
                      alt=""
                    />
                  </div>
                  <div className="tpabout__content">
                    <h4 className="tpabout__title">See Results. </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. <br /> and it's
                      Lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="img-box-area grey-bg pt-80 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="tpsection mb-35">
                  <h4 className="tpsection__sub-title">~ Why Choose Us ~</h4>
                  <h4 className="tpsection__title">Our Amazing Work</h4>
                  <p>
                    The liber tempor cum soluta nobis eleifend option congue
                    doming quod mazim.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="img-box__wrapper text-center mb-30">
                  <div className="img-box__thumb mb-30">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/about/about-1.png"
                      alt=""
                    />
                  </div>
                  <div className="img-box__content">
                    <h4 className="img-box__title mb-10">Who We Are</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                      elit, sed do eiusmod tempor labore <br /> et dolore
                      dignissimos cumque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="img-box__wrapper text-center mb-30">
                  <div className="img-box__thumb mb-30">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/about/about-2.png"
                      alt=""
                    />
                  </div>
                  <div className="img-box__content">
                    <h4 className="img-box__title mb-10">Our Products</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                      elit, sed do eiusmod tempor labore <br /> et dolore
                      dignissimos cumque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="img-box__wrapper text-center mb-30">
                  <div className="img-box__thumb mb-30">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/about/about-3.png"
                      alt=""
                    />
                  </div>
                  <div className="img-box__content">
                    <h4 className="img-box__title mb-10">How We Work</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                      elit, sed do eiusmod tempor labore <br /> et dolore
                      dignissimos cumque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="video-area pt-80 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="tpsection mb-35">
                  <h4 className="tpsection__sub-title">~ Good Performance ~</h4>
                  <h4 className="tpsection__title">Our Working Ability</h4>
                  <p>
                    The liber tempor cum soluta nobis eleifend option congue
                    doming quod mazim.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="tpvideo__bg p-relative mb-25">
                  <img
                    src="https://html.hixstudio.net/orfarm/assets/img/banner/video-bg-1.jpg"
                    alt=""
                  />
                  <div className="tpvideo__video-btn">
                    <Link className="tpvideo__video-icon popup-video" to="#">
                      <i>
                        <svg
                          width="20"
                          height="22"
                          viewBox="0 0 20 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6499 6.58886L15.651 6.58953C17.8499 7.85553 18.7829 9.42511 18.7829 10.8432C18.7829 12.2613 17.8499 13.8308 15.651 15.0968L15.6499 15.0975L12.0218 17.195L8.3948 19.2919C8.3946 19.292 8.3944 19.2921 8.3942 19.2922C6.19546 20.558 4.36817 20.5794 3.13833 19.8697C1.9087 19.1602 1.01562 17.5694 1.01562 15.0382V10.8432V6.64818C1.01562 4.10132 1.90954 2.51221 3.13721 1.80666C4.36609 1.1004 6.1936 1.12735 8.3942 2.39416C8.3944 2.39428 8.3946 2.3944 8.3948 2.39451L12.0218 4.49135L15.6499 6.58886Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="choose-area tpchoose__bg pb-80 grey-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="tpsection mb-35 pt-75">
                  <h4 className="tpsection__sub-title">~ Why choose us? ~</h4>
                  <h4 className="tpsection__title">What makes us different</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore adipisci distinctio doloribus?
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="tpchoose__item text-center mb-30">
                  <div className="tpchoose__icon mb-20">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/choose-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className="tpchoose__content">
                    <h4 className="tpchoose__title">100% Fresh Food</h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tempore
                    </p>
                    <Link
                      to="#"
                      className="tpchoose__details d-flex align-items-center justify-content-center"
                    >
                      learn more<i className="icon-chevrons-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="tpchoose__item text-center mb-30">
                  <div className="tpchoose__icon mb-20">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/choose-icon2.svg"
                      alt=""
                    />
                  </div>
                  <div className="tpchoose__content">
                    <h4 className="tpchoose__title">Premium Quality</h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tempore
                    </p>
                    <Link
                      to="#"
                      className="tpchoose__details d-flex align-items-center justify-content-center"
                    >
                      learn more<i className="icon-chevrons-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="tpchoose__item text-center mb-30">
                  <div className="tpchoose__icon mb-20">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/choose-icon3.svg"
                      alt=""
                    />
                  </div>
                  <div className="tpchoose__content">
                    <h4 className="tpchoose__title">100% Natural</h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <Link
                      to="#"
                      className="tpchoose__details d-flex align-items-center justify-content-center"
                    >
                      learn more<i className="icon-chevrons-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="tpchoose__item text-center mb-30">
                  <div className="tpchoose__icon mb-20">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/choose-icon4.svg"
                      alt=""
                    />
                  </div>
                  <div className="tpchoose__content">
                    <h4 className="tpchoose__title">100% Organic Goods</h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <Link
                      to="#"
                      className="tpchoose__details d-flex align-items-center justify-content-center"
                    >
                      learn more<i className="icon-chevrons-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-area tptestimonial__bg pt-80 pb-55 p-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="tpsection mb-35">
                  <h4 className="tpsection__sub-title">~ Happy Customer ~</h4>
                  <h4 className="tpsection__title">What Client Says</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Numquam dolor ad animi.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-container tptestimonial-active3 p-relative">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="row justify-content-center p-relative">
                    <div className="col-md-12">
                      <div className="tptestimonial__item text-center mb-30">
                        <div className="tptestimonial__avata mb-25">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/testimonial/test-avata-1.png"
                            alt=""
                          />
                        </div>
                        <div className="tptestimonial__content tptestimonial__content2">
                          <p>
                            " I am very happy with my purchase from this
                            website, the plants were healthy and arrived on
                            time."
                          </p>
                          <div className="tptestimonial__rating mb-5">
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
                          <h4 className="tptestimonial__title">Rahul Raj</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row justify-content-center p-relative">
                    <div className="col-md-12">
                      <div className="tptestimonial__item text-center mb-30">
                        <div className="tptestimonial__avata mb-25">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/testimonial/test-avata-2.png"
                            alt=""
                          />
                        </div>
                        <div className="tptestimonial__content tptestimonial__content2">
                          <p>" This is the Amazing Healthy Microgreens "</p>
                          <div className="tptestimonial__rating mb-5">
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
                          <h4 className="tptestimonial__title">Tina</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row justify-content-center p-relative">
                    <div className="col-md-12">
                      <div className="tptestimonial__item text-center mb-30">
                        <div className="tptestimonial__avata mb-25">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/testimonial/test-avata-3.png"
                            alt=""
                          />
                        </div>
                        <div className="tptestimonial__content tptestimonial__content2">
                          <p>
                            “I am very happy with my purchase from this website,
                            the plants were healthy and arrived on time."
                          </p>
                          <div className="tptestimonial__rating mb-5">
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
                          <h4 className="tptestimonial__title">Jessica</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row justify-content-center p-relative">
                    <div className="col-md-12">
                      <div className="tptestimonial__item text-center mb-30">
                        <div className="tptestimonial__avata mb-25">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/testimonial/test-avata-3.png"
                            alt=""
                          />
                        </div>
                        <div className="tptestimonial__content tptestimonial__content2">
                          <p>
                            “I am very happy with my purchase from this website,
                            the plants were healthy and arrived on time.”
                          </p>
                          <div className="tptestimonial__rating mb-5">
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
                          <h4 className="tptestimonial__title">Priyanka</h4>
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

export default AboutUs;
