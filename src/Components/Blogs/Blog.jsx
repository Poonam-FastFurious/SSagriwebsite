/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
function Blog() {
  useEffect(() => {
    const tpblogswiper = new Swiper(".tpblog-active", {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
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
      <section className="blog-area pt-100 pb-100 grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-35">
                <h4 className="tpsection__sub-title">~ Read Our Blog ~</h4>
                <h4 className="tpsection__title">Our Latest Post</h4>
                <p>
                  The liber tempor cum soluta nobis eleifend option congue
                  doming quod mazim.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-container tpblog-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <a href="blog-details.html">
                      <img
                        src="https://ingarden.com/cdn/shop/articles/Recipe_1_720x.jpg?v=1686057851"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="shop-details.html">Lifestyle</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <a href="blog-details.html">
                        Avocado Grilled Salmon, Rich In Nutrients For The Body
                      </a>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <a href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <a href="blog-details.html">
                      <img
                        src="https://ingarden.com/cdn/shop/articles/Broccoli_2x_938b9cf6-f44a-441a-a24e-3d074c157db3_720x.jpg?v=1680070834"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="shop-details.html">Organics</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <a href="blog-details.html">
                        The Best Great Benefits For Women's Health
                      </a>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <a href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <a href="blog-details.html">
                      <img
                        src="https://ingarden.com/cdn/shop/articles/Recipe_1_720x.jpg?v=1686057851"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="shop-details.html">Organics</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <a href="blog-details.html">
                        Ways To Choose Fruits & Seafoods Good For Health
                      </a>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <a href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <a href="blog-details.html">
                      <img
                        src="https://ingarden.com/cdn/shop/articles/Recipe_1_720x.jpg?v=1686057851"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="shop-details.html">Shopping</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <a href="blog-details.html">
                        Summer Breakfast For The Healthy Morning With Tomatoes
                      </a>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <a href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <a href="blog-details.html">
                      <img
                        src="https://ingarden.com/cdn/shop/articles/Recipe_1_720x.jpg?v=1686057851"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="#">Foods</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <a href="blog-details.html">
                        Popular Reasons You Must Drinks Juice Everyday
                      </a>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <a href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <a href="blog-details.html">
                      <img
                        src="https://ingarden.com/cdn/shop/articles/Recipe_1_720x.jpg?v=1686057851"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="shop-details.html">Lifestyle</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <a href="blog-details.html">
                        Perfect Quality Reasonable Price For Your Family
                      </a>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <a href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <a href="blog-details.html">
                      <img
                        src="https://ingarden.com/cdn/shop/articles/Recipe_1_720x.jpg?v=1686057851"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="shop-details.html">Dairy Farm</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <a href="blog-details.html">
                        Ways To Choose Fruits Seafoods Good For Health
                      </a>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <a href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__item">
                  <div className="tpblog__thumb fix">
                    <a href="blog-details.html">
                      <img
                        src="https://ingarden.com/cdn/shop/articles/Recipe_1_720x.jpg?v=1686057851"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="#">organis</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <a href="blog-details.html">
                        The Best Great Benefits For Women’s Health
                      </a>
                    </h4>
                    <p>
                      These are the people who make your life easier. Egestas is
                      tristique vestibulum...
                    </p>
                    <div className="tpblog__details">
                      <a href="blog-details.html">
                        Continue reading <i className="icon-chevrons-right"></i>
                      </a>
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

export default Blog;
