import { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categorySwiper = new Swiper(".category-active", {
      loop: false,
      slidesPerView: 8,
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
      breakpoints: {
        1400: {
          slidesPerView: 8,
        },
        1200: {
          slidesPerView: 6,
        },
        992: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 2,
        },
      },
    });

    return () => {
      // Clean up Swiper instance when component unmounts
      categorySwiper.destroy(true, true);
    };
  }, []);
  useEffect(() => {
    fetch("/api/v1/category/allcategory")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.data.slice(0, 8));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="category-area grey-bg pb-40 pt-20">
        <div className="container">
          <div className="swiper-container category-active">
            <div className="swiper-wrapper">
              {categories.map((cat, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="category__item mb-30">
                    <div className="category__thumb fix mb-15">
                      <Link to="shop-details-3">
                        <img
                          src={cat.avatar}
                          alt="category-thumb"
                          style={{ height: "80px" }}
                        />
                      </Link>
                    </div>
                    <div className="category__content">
                      <h5 className="category__title">
                        <Link to="shop-details-4">{cat.title}</Link>
                      </h5>
                      <span className="category__count">05 items</span>
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

export default Category;
