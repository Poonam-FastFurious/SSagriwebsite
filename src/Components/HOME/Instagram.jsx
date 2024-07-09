/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Swiper from "swiper";
import imge from "../../assets/Images/instagram.jpeg";
import { Link } from "react-router-dom";
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
                  Tag <Link to="/">@SSAgriculture</Link> in your Instagram
                  photos for a chance to be featured here. <br /> Find more
                  inspiration on our Instagram.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-container insta-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <Link to="#">
                    <img src={imge} alt="thumb-img" />
                  </Link>
                  <Link
                    className="tpinsta__links popup-image"
                    to="https://www.instagram.com/agriqulture.innovations?igsh=eGMzeDBnNHI4NXJz&utm_source=qr"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <Link to="#">
                    <img src={imge} alt="thumb-img" />
                  </Link>
                  <Link
                    className="tpinsta__links popup-image"
                    to="https://www.instagram.com/agriqulture.innovations?igsh=eGMzeDBnNHI4NXJz&utm_source=qr"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <Link to="#">
                    <img src={imge} alt="thumb-img" />
                  </Link>
                  <Link
                    className="tpinsta__links popup-image"
                    to="https://www.instagram.com/agriqulture.innovations?igsh=eGMzeDBnNHI4NXJz&utm_source=qr"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpinsta__item p-relative fix">
                    <Link to="#">
                      <img src={imge} alt="thumb-img" />
                    </Link>
                    <Link
                      className="tpinsta__links popup-image"
                      to="https://www.instagram.com/agriqulture.innovations?igsh=eGMzeDBnNHI4NXJz&utm_source=qr"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <Link to="#">
                    <img src={imge} alt="thumb-img" />
                  </Link>
                  <Link
                    className="tpinsta__links popup-image"
                    to="https://www.instagram.com/agriqulture.innovations?igsh=eGMzeDBnNHI4NXJz&utm_source=qr"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <Link to="#">
                    <img src={imge} alt="thumb-img" />
                  </Link>
                  <Link
                    className="tpinsta__links popup-image"
                    to="https://www.instagram.com/agriqulture.innovations?igsh=eGMzeDBnNHI4NXJz&utm_source=qr"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <Link to="#">
                    <img src={imge} alt="thumb-img" />
                  </Link>
                  <Link
                    className="tpinsta__links popup-image"
                    to="https://www.instagram.com/agriqulture.innovations?igsh=eGMzeDBnNHI4NXJz&utm_source=qr"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <Link to="#">
                    <img src={imge} alt="thumb-img" />
                  </Link>
                  <Link
                    className="tpinsta__links popup-image"
                    to="https://www.instagram.com/agriqulture.innovations?igsh=eGMzeDBnNHI4NXJz&utm_source=qr"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpinsta__item p-relative fix">
                  <Link to="#">
                    <img src={imge} alt="thumb-img" />
                  </Link>
                  <Link
                    className="tpinsta__links popup-image"
                    to="https://www.instagram.com/agriqulture.innovations?igsh=eGMzeDBnNHI4NXJz&utm_source=qr"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
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
