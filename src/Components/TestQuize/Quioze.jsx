/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./test.css";
import { Link } from "react-router-dom";

// import CardProduct from "../Product/CardProduct";

function Quioze() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [topproduct, setTopproduct] = useState([]);
  useEffect(() => {
    fetch("https://ssagriculturebackend.onrender.com/api/v1/Product/products")
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
  // Define quiz data
  const quizData = [
    {
      question: "What is your primary health goal?",
      options: [
        {
          label: "Boost my immunity and stay healthy",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation.png",
        },
        {
          label: "Improve my digestion and gut health",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation2.png",
        },
        {
          label: "Increase my energy levels and focus",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation3.png",
        },
        {
          label: "Enhance my skin health and appearance",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation4.png",
        },
      ],
    },
    {
      question: "What flavour do you like in your food?",
      options: [
        {
          label: "Spicy",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation.png",
        },
        {
          label: "Sweet",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation2.png",
        },
        {
          label: "Earthy and crispy",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation3.png",
        },
        {
          label: "Savoury",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation4.png",
        },
      ],
    },
    {
      question: "How often do you exercise?",
      options: [
        {
          label: "Regularly",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation.png",
        },
        {
          label: "Occasionally",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation2.png",
        },

        {
          label: "Rarely or never",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation4.png",
        },
      ],
    },
    {
      question: "What's your skin type like?",
      options: [
        {
          label: "Dry as a desert",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation.png",
        },
        {
          label: "Oily and prone to breakouts",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation2.png",
        },

        {
          label: "Pretty normal",
          image:
            "https://templates.seekviral.com/quiza/quiz/Quiz7/assets/images/options/meditation4.png",
        },
      ],
    },
  ];

  const handleOptionChange = (step, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [step]: value,
    }));
  };

  const handleNextClick = () => {
    if (selectedOptions[`step${currentStep}`]) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  return (
    <>
      <section className="about-area tpabout__inner-bg pt-175 pb-170 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tpabout__inner text-center">
                <h5 className="tpabout__inner-sub mb-15">
                  Find your perfect first nutrition kit
                </h5>
                <h3
                  className="tpabout__inner-title mb-35"
                  style={{ color: "black" }}
                >
                  Take the microgreen quiz
                </h3>

                <div className="tpabout__inner-btn">
                  <Link to="about">Take the test</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quize overflow-hidden">
        <section className="steps container">
          <div className="container">
            <img
              src="https://octaneairsrc.com/aedtlay7jw5c4ete/quizimg/c85199af-5e64-44dc-b7e5-9fb18864cdc4"
              alt="Step"
            />
          </div>

          <form className="show-section" id="stepForm" noValidate="">
            {quizData.map(
              (stepData, index) =>
                currentStep === index && (
                  <fieldset key={index} id={`step${index}`}>
                    <div className="stepImg"></div>
                    <div className=" flex">
                      <h1 className="" style={{ marginTop: "45px" }}>
                        {stepData.question}
                      </h1>
                      <div className="stepImg"></div>
                    </div>
                    <div className="options">
                      {stepData.options.map((option, optionIndex) => (
                        <div
                          className={`option animate delay-${
                            optionIndex * 100
                          }`}
                          key={optionIndex}
                        >
                          <input
                            type="radio"
                            name={`step${index}`}
                            value={option.label}
                            onChange={() =>
                              handleOptionChange(`step${index}`, option.label)
                            }
                          />
                          <img src={option.image} alt={option.label} />
                          <label>{option.label}</label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                )
            )}
            {currentStep === quizData.length && (
              <fieldset id="recommendations">
                <h4>
                  according to your preferences, this is the perfect superfood
                  for you
                </h4>
                <div
                  className="tab-pane fade show active whight-product"
                  id="nav-popular"
                  role="tabpanel"
                  aria-labelledby="nav-popular-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                        <div className="tplist__product-img">
                          <Link to="#" className="tplist__product-img-one">
                            <img
                              src="https://html.hixstudio.net/orfarm/assets/img/product/products41-min.jpg"
                              alt=""
                            />
                          </Link>
                          <Link
                            className="tplist__product-img-two"
                            to="shop-details"
                          >
                            <img
                              src="https://html.hixstudio.net/orfarm/assets/img/product/products48-min.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tpproduct__info bage">
                            <span className="tpproduct__info-discount bage__discount">
                              -50%
                            </span>
                            <span className="tpproduct__info-hot bage__hot">
                              HOT
                            </span>
                          </div>
                        </div>
                        <div className="tplist__content">
                          <span>500 gram</span>
                          <h4 className="tplist__content-title">
                            <Link to="#">
                              Fresh Mangosteen 100% Organic From VietNamese
                            </Link>
                          </h4>
                          <div className="tplist__rating mb-5">
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
                          <ul className="tplist__content-info">
                            <li>Delicous Non-Dairy cheese sauce</li>
                            <li>Vegan & Allergy Friendly</li>
                            <li>Smooth, velvety Dairy free cheese sauce</li>
                          </ul>
                        </div>
                        <div className="tplist__price justify-content-end">
                          <h4 className="tplist__instock">
                            Availability: <span>92 in stock</span>{" "}
                          </h4>
                          <h3 className="tplist__count mb-15">$56.00</h3>
                          <button className="tp-btn-2 mb-10">
                            Add to cart
                          </button>
                          <div className="tplist__shopping">
                            <Link to="#">
                              <i className="icon-heart icons"></i> wishlist
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                        <div className="tplist__product-img">
                          <Link to="#" className="tplist__product-img-one">
                            <img
                              src="https://html.hixstudio.net/orfarm/assets/img/product/products41-min.jpg"
                              alt=""
                            />
                          </Link>
                          <Link
                            className="tplist__product-img-two"
                            to="shop-details"
                          >
                            <img
                              src="https://html.hixstudio.net/orfarm/assets/img/product/products48-min.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tpproduct__info bage">
                            <span className="tpproduct__info-discount bage__discount">
                              -50%
                            </span>
                            <span className="tpproduct__info-hot bage__hot">
                              HOT
                            </span>
                          </div>
                        </div>
                        <div className="tplist__content">
                          <span>500 gram</span>
                          <h4 className="tplist__content-title">
                            <Link to="#">
                              Fresh Mangosteen 100% Organic From VietNamese
                            </Link>
                          </h4>
                          <div className="tplist__rating mb-5">
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
                          <ul className="tplist__content-info">
                            <li>Delicous Non-Dairy cheese sauce</li>
                            <li>Vegan & Allergy Friendly</li>
                            <li>Smooth, velvety Dairy free cheese sauce</li>
                          </ul>
                        </div>
                        <div className="tplist__price justify-content-end">
                          <h4 className="tplist__instock">
                            Availability: <span>92 in stock</span>{" "}
                          </h4>
                          <h3 className="tplist__count mb-15">$56.00</h3>
                          <button className="tp-btn-2 mb-10">
                            Add to cart
                          </button>
                          <div className="tplist__shopping">
                            <Link to="#">
                              <i className="icon-heart icons"></i> wishlist
                            </Link>
                            <Link to="#">
                              <i className="icon-layers"></i>Compare
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                        <div className="tplist__product-img">
                          <Link to="#" className="tplist__product-img-one">
                            <img
                              src="https://html.hixstudio.net/orfarm/assets/img/product/products41-min.jpg"
                              alt=""
                            />
                          </Link>
                          <Link
                            className="tplist__product-img-two"
                            to="shop-details"
                          >
                            <img
                              src="https://html.hixstudio.net/orfarm/assets/img/product/products48-min.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tpproduct__info bage">
                            <span className="tpproduct__info-discount bage__discount">
                              -50%
                            </span>
                            <span className="tpproduct__info-hot bage__hot">
                              HOT
                            </span>
                          </div>
                        </div>
                        <div className="tplist__content">
                          <span>500 gram</span>
                          <h4 className="tplist__content-title">
                            <Link to="#">
                              Fresh Mangosteen 100% Organic From VietNamese
                            </Link>
                          </h4>
                          <div className="tplist__rating mb-5">
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
                          <ul className="tplist__content-info">
                            <li>Delicous Non-Dairy cheese sauce</li>
                            <li>Vegan & Allergy Friendly</li>
                            <li>Smooth, velvety Dairy free cheese sauce</li>
                          </ul>
                        </div>
                        <div className="tplist__price justify-content-end">
                          <h4 className="tplist__instock">
                            Availability: <span>92 in stock</span>{" "}
                          </h4>
                          <h3 className="tplist__count mb-15">$56.00</h3>
                          <button className="tp-btn-2 mb-10">
                            Add to cart
                          </button>
                          <div className="tplist__shopping">
                            <Link to="#">
                              <i className="icon-heart icons"></i> wishlist
                            </Link>
                            <Link to="#">
                              <i className="icon-layers"></i>Compare
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
                        <div className="tplist__product-img">
                          <Link to="#" className="tplist__product-img-one">
                            <img
                              src="https://html.hixstudio.net/orfarm/assets/img/product/products41-min.jpg"
                              alt=""
                            />
                          </Link>
                          <Link
                            className="tplist__product-img-two"
                            to="shop-details"
                          >
                            <img
                              src="https://html.hixstudio.net/orfarm/assets/img/product/products48-min.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tpproduct__info bage">
                            <span className="tpproduct__info-discount bage__discount">
                              -50%
                            </span>
                            <span className="tpproduct__info-hot bage__hot">
                              HOT
                            </span>
                          </div>
                        </div>
                        <div className="tplist__content">
                          <span>500 gram</span>
                          <h4 className="tplist__content-title">
                            <Link to="#">
                              Fresh Mangosteen 100% Organic From VietNamese
                            </Link>
                          </h4>
                          <div className="tplist__rating mb-5">
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
                          <ul className="tplist__content-info">
                            <li>Delicous Non-Dairy cheese sauce</li>
                            <li>Vegan & Allergy Friendly</li>
                            <li>Smooth, velvety Dairy free cheese sauce</li>
                          </ul>
                        </div>
                        <div className="tplist__price justify-content-end">
                          <h4 className="tplist__instock">
                            Availability: <span>92 in stock</span>{" "}
                          </h4>
                          <h3 className="tplist__count mb-15">$56.00</h3>
                          <button className="tp-btn-2 mb-10">
                            Add to cart
                          </button>
                          <div className="tplist__shopping">
                            <Link to="#">
                              <i className="icon-heart icons"></i> wishlist
                            </Link>
                            <Link to="#">
                              <i className="icon-layers"></i>Compare
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            )}
          </form>
        </section>

        <div className="nextPrev">
          {currentStep < quizData.length && (
            <button
              type="button"
              className="next"
              id="nextBtn"
              onClick={handleNextClick}
            >
              Next
            </button>
          )}
        </div>
      </div>
      <section className="brand-product grey-bg mt-50 ">
        <div className="">
          <div className="sections__wrapper white-bg pl-50 pr-50 pb-40 brand-product">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <div className="tpsection mb-15">
                  <h4 className="tpsection__title text-start brand-product-title">
                    Our most popular
                  </h4>
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

export default Quioze;
