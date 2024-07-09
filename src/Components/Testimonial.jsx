/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Swiper from "swiper";
import { Baseurl } from "./Confige";
import { Link } from "react-router-dom";

function Testimonial() {
  const [testimonial, SetTestimonial] = useState([]);
  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const response = await fetch(
          Baseurl + "/api/v1/testimonial/alltestimonial"
        );
        const data = await response.json();
        SetTestimonial(data.data); // Adjust this line based on the actual API response structure
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchTestimonial();
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
              {testimonial.map((testi, index) => (
                <div className="swiper-slide" key={index}>
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
                          <p>{testi.message}</p>
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
                              {testi.rating}
                            </Link>
                          </div>
                          <h4 className="tptestimonial__title">{testi.name}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
