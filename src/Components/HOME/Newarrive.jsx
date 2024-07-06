import { useEffect, useState } from "react";
import { Baseurl } from "../Confige";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { addToCart } from "../Utils/Addtocartutils";
import { Link } from "react-router-dom";
import handleAddToWishlist from "../Utils/WishlistUtils";

function Newarrive() {
  const [newproduct, setNewproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const addToWishlist = (productId) => {
    handleAddToWishlist(productId, setLoading);
  };
  const handleAddToCart = (productId) => {
    addToCart(productId);
  };
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
    fetch(Baseurl + "/api/v1/Product/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNewproduct(data.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <section className="product-area whight-product pt-75 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-35">
                <h4 className="tpsection__sub-title">~ Products ~</h4>
                <h4 className="tpsection__title">New Arrival Product </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  expedita possimus odio alias recusandae quidem accusamus quia
                  magni.
                </p>
              </div>
            </div>
          </div>
          <div className="tpproduct__arrow double-product p-relative">
            <div className="swiper-container tpproduct-active tpslider-bottom p-relative">
              <div className="swiper-wrapper">
                {newproduct.map((product, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <Link to={`/Product/${product._id}`}>
                          <img src={product.image} alt="" />
                        </Link>
                        <Link
                          className="tpproduct__thumb-img"
                          to={`/Product/${product._id}`}
                        >
                          <img src={product.thumbnail} alt="" />
                        </Link>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            Sale
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <Link
                            className="tpproduct__shopping-wishlist"
                            to="#"
                            onClick={() => addToWishlist(product._id)}
                            disabled={loading}
                          >
                            <i className="icon-heart icons"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <Link to={`/Product/${product._id}`}>
                            {product.category}
                          </Link>
                        </span>
                        <h4 className="tpproduct__title">
                          <Link to={`/Product/${product._id}`}>
                            {product.productTitle}
                          </Link>
                        </h4>
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
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <Link
                            className="tp-btn-2"
                            to="#"
                            onClick={() => handleAddToCart(product._id)}
                          >
                            Add to cart
                          </Link>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Stock: {product.stock}</li>
                            <li>Rating: {product.rating}</li>
                            <li>Type: Organic</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {newproduct.map((product, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <Link to={`/Product/${product._id}`}>
                          <img src={product.image} alt="" />
                        </Link>
                        <Link
                          className="tpproduct__thumb-img"
                          to={`/Product/${product._id}`}
                        >
                          <img src={product.thumbnail} alt="" />
                        </Link>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            Sale
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <Link
                            className="tpproduct__shopping-wishlist"
                            to="#"
                            onClick={() => addToWishlist(product._id)}
                            disabled={loading}
                          >
                            <i className="icon-heart icons"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <Link to={`/Product/${product._id}`}>
                            {product.category}
                          </Link>
                        </span>
                        <h4 className="tpproduct__title">
                          <Link to={`/Product/${product._id}`}>
                            {product.productTitle}
                          </Link>
                        </h4>
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
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <Link
                            className="tp-btn-2"
                            to="#"
                            onClick={() => handleAddToCart(product._id)}
                          >
                            Add to cart
                          </Link>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Stock: {product.stock}</li>
                            <li>Rating: {product.rating}</li>
                            <li>Type: Organic</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {newproduct.map((product, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <Link to={`/Product/${product._id}`}>
                          <img src={product.image} alt="" />
                        </Link>
                        <Link
                          className="tpproduct__thumb-img"
                          to={`/Product/${product._id}`}
                        >
                          <img src={product.thumbnail} alt="" />
                        </Link>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            Sale
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <Link
                            className="tpproduct__shopping-wishlist"
                            to="#"
                            onClick={() => addToWishlist(product._id)}
                            disabled={loading}
                          >
                            <i className="icon-heart icons"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <Link to={`/Product/${product._id}`}>
                            {product.category}
                          </Link>
                        </span>
                        <h4 className="tpproduct__title">
                          <Link to={`/Product/${product._id}`}>
                            {product.productTitle}
                          </Link>
                        </h4>
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
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <Link
                            className="tp-btn-2"
                            to="#"
                            onClick={() => handleAddToCart(product._id)}
                          >
                            Add to cart
                          </Link>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Stock: {product.stock}</li>
                            <li>Rating: {product.rating}</li>
                            <li>Type: Organic</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {newproduct.map((product, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="tpproduct p-relative">
                      <div className="tpproduct__thumb p-relative text-center">
                        <Link to={`/Product/${product._id}`}>
                          <img src={product.image} alt="" />
                        </Link>
                        <Link
                          className="tpproduct__thumb-img"
                          to={`/Product/${product._id}`}
                        >
                          <img src={product.thumbnail} alt="" />
                        </Link>
                        <div className="tpproduct__info bage">
                          <span className="tpproduct__info-discount bage__discount">
                            Sale
                          </span>
                        </div>
                        <div className="tpproduct__shopping">
                          <Link
                            className="tpproduct__shopping-wishlist"
                            to="#"
                            onClick={() => addToWishlist(product._id)}
                            disabled={loading}
                          >
                            <i className="icon-heart icons"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="tpproduct__content">
                        <span className="tpproduct__content-weight">
                          <Link to={`/Product/${product._id}`}>
                            {product.category}
                          </Link>
                        </span>
                        <h4 className="tpproduct__title">
                          <Link to={`/Product/${product._id}`}>
                            {product.productTitle}
                          </Link>
                        </h4>
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
                      <div className="tpproduct__hover-text">
                        <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                          <Link
                            className="tp-btn-2"
                            to="#"
                            onClick={() => handleAddToCart(product._id)}
                          >
                            Add to cart
                          </Link>
                        </div>
                        <div className="tpproduct__descrip">
                          <ul>
                            <li>Stock: {product.stock}</li>
                            <li>Rating: {product.rating}</li>
                            <li>Type: Organic</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newarrive;
