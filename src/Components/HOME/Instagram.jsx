/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Swiper from "swiper";

function Instagram() {
  useEffect(() => {
    const tpblogswiper = new Swiper(".insta-active", {
      loop: false,
      slidesPerView: 6,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 6,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  }, []);
  return (
    <>
      <section className="instagram-area grey-bg pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-35">
                <h4 className="tpsection__title">Our instagram</h4>
                <p>
                  Tag <a href="index.html">@orfarm</a> in your Instagram photos
                  for a chance to be featured here. <br /> Find more inspiration
                  on our Instagram.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-container insta-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <a href="#">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                      alt="thumb-img"
                    />
                  </a>
                  <a
                    className="tpinsta__links popup-image"
                    href="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <a href="#">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                      alt="thumb-img"
                    />
                  </a>
                  <a
                    className="tpinsta__links popup-image"
                    href="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <a href="#">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                      alt="thumb-img"
                    />
                  </a>
                  <a
                    className="tpinsta__links popup-image"
                    href="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpinsta__item p-relative fix">
                    <a href="#">
                      <img
                        src="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                        alt="thumb-img"
                      />
                    </a>
                    <a
                      className="tpinsta__links popup-image"
                      href="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <a href="#">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                      alt="thumb-img"
                    />
                  </a>
                  <a
                    className="tpinsta__links popup-image"
                    href="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <a href="#">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                      alt="thumb-img"
                    />
                  </a>
                  <a
                    className="tpinsta__links popup-image"
                    href="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <a href="#">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                      alt="thumb-img"
                    />
                  </a>
                  <a
                    className="tpinsta__links popup-image"
                    href="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <a href="#">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                      alt="thumb-img"
                    />
                  </a>
                  <a
                    className="tpinsta__links popup-image"
                    href="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <a href="#">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                      alt="thumb-img"
                    />
                  </a>
                  <a
                    className="tpinsta__links popup-image"
                    href="https://html.hixstudio.net/orfarm/assets/img/insta/insta-1.jpg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Instagram;
