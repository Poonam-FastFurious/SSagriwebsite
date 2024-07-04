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
                    <Link className="whight-btn" to="#">
                      Know More
                    </Link>
                    <Link className="whight-btn border-btn ml-15" to="#">
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
      <section className="brand-product pt-75 pb-60">
        <div className="container">
          <div className="white-bg pb-40 brand-product">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="tpsection mb-35">
                  <h4 className="tpsection__sub-title">~ Best Products ~</h4>
                  <h4 className="tpsection__title">This week’s highlights</h4>
                  <p>
                    The liber tempor cum soluta nobis eleifend option congue
                    doming quod mazim.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-3">
              {topproduct.map((product, index) => (
                <div className="col-xl-4 col-md-6 col-sm-12" key={index}>
                  <div className="tpbrandproduct__item d-flex mb-20">
                    <div className="tpbrandproduct__img p-relative">
                      <img src={product.image} alt="" />
                      <div className="tpproduct__info bage tpbrandproduct__bage">
                        <span className="tpproduct__info-discount bage__discount">
                          -50%
                        </span>
                      </div>
                    </div>
                    <div className="tpbrandproduct__contact">
                      <span className="tpbrandproduct__product-title">
                        <Link to={`/Product/${product._id}`}>
                          {product.productTitle}
                        </Link>
                      </span>
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
                        <span>₹{product.oneTimePrice}</span>
                        <del className="pl-10">
                          {product.discountPercentage}%
                        </del>
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

export default Dealofday;
