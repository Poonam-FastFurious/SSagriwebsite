/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Swiper from "swiper";

function Testimonial() {
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
                          I am very happy with my purchase from this website,
                          the plants were healthy and arrived on time."
                        </p>
                        <div className="tptestimonial__rating mb-5">
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
    </>
  );
}

export default Testimonial;
