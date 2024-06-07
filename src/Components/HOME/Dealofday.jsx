import { Link } from "react-router-dom";
import bgimages from "../../assets/Images/formula_bg.jpg";
import imagesmicro from "../../assets/Images/formula_img1.png";
import { useEffect, useState } from "react";
import { Baseurl } from "../Confige";
function Dealofday() {
  const [topproduct, setTopproduct] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Product/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTopproduct(data.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <section
        className="product-coundown-area tpcoundown__bg grey-bg pb-25"
        style={{
          backgroundImage: `url(${bgimages})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tpcoundown p-relative ml-175">
                <div className="section__content mb-35">
                  <span className="section__sub-title mb-10">
                    ~ Deals Of The Day ~
                  </span>
                  <h2 className="section__title mb-25">
                    Start eating <br />
                    our Microgreens
                  </h2>
                  <p>
                    Our Microgreens Combos, are on the go or perfect
                    <br />
                    if you just want quick nutrition fix.
                  </p>
                </div>
                <div className="tpcoundown__count">
                  <h4 className="tpcoundown__count-title">
                    Buy...Open...Sprinkle.
                  </h4>
                  <div
                    className="tpcoundown__countdown"
                    data-countdown="2024/06/11"
                  ></div>
                  <div className="tpcoundown__btn mt-50">
                    <Link className="whight-btn" to="shop-details-grid">
                      Know More
                    </Link>
                    <Link
                      className="whight-btn border-btn ml-15"
                      to="shop-list-view"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
                <div className="tpcoundown__shape d-none d-lg-block">
                  <img
                    className="tpcoundown__shape-one"
                    src="https://html.hixstudio.net/orfarm/assets/img/shape/tree-leaf-1.svg"
                    alt=""
                  />
                  <img
                    className="tpcoundown__shape-two"
                    src="https://html.hixstudio.net/orfarm/assets/img/shape/tree-leaf-2.svg"
                    alt=""
                  />
                  <img
                    className="tpcoundown__shape-three "
                    src="https://html.hixstudio.net/orfarm/assets/img/shape/tree-leaf-3.svg"
                    alt=""
                  />
                  <img
                    className="tpcoundown__shape-four mt-20"
                    src={imagesmicro}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brand-product grey-bg mt-50 ">
        <div className="">
          <div className="sections__wrapper white-bg pl-50 pr-50 pb-40 brand-product">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <div className="tpsection mb-15">
                  <h4 className="tpsection__title text-start brand-product-title">
                    Featured Brand Products
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tpproduct__all-item">
                  <a href="#">
                    View All <i className="icon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row gx-3">
              <div className="col-lg-3">
                <div className="tpbrandproduct__main text-center">
                  <div className="tpbrandproduct__main-thumb mb-20">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/brand/brand-thumb-1.png"
                      alt=""
                    />
                  </div>
                  <div className="tpbrandproduct__main-contetn">
                    <h4 className="tpbrandproduct__title">Super Market</h4>
                    <p>
                      Nam liber tempor cum soluta nobis eleifend congue doming
                      quod mazim placerat facer possim assum typi.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row gx-3">
                  {topproduct.map((product, index) => (
                    <div className="col-xl-4 col-lg-6" key={index}>
                      <div className="tpbrandproduct__item d-flex mb-20">
                        <div className="tpbrandproduct__img p-relative">
                          <img src={product.image} alt="" />
                          <div className="tpproduct__info bage tpbrandproduct__bage">
                            <span className="tpproduct__info-discount bage__discount">
                              -{product.discountPercentage}%
                            </span>
                          </div>
                        </div>
                        <div className="tpbrandproduct__contact">
                          <span className="tpbrandproduct__product-title">
                            <a href="shop-details.html">
                              {product.productTitle}
                            </a>
                          </span>
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
                            <span>{product.oneTimePrice}</span>
                            <del className="ml-10">
                              {product.subscriptionPrice}
                            </del>
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
      </section>
    </>
  );
}

export default Dealofday;
