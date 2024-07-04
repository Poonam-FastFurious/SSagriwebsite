/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { addToCart } from "../Utils/Addtocartutils";

function CardProduct({ product }) {
  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  return (
    <>
      <div className="col">
        <div className="tpproduct p-relative mb-20">
          <div className="tpproduct__thumb p-relative text-center">
            <Link to="#">
              <img src={product.image} alt="" />
            </Link>
            <Link className="tpproduct__thumb-img" to="#">
              <img src={product.image} alt="" />
            </Link>
            <div className="tpproduct__info bage">
              <span className="tpproduct__info-discount bage__discount">
                -50%
              </span>
              <span className="tpproduct__info-hot bage__hot">HOT</span>
            </div>
            <div className="tpproduct__shopping">
              <Link className="tpproduct__shopping-wishlist" to="#">
                <i className="icon-heart icons"></i>
              </Link>
              <Link className="tpproduct__shopping-wishlist" to="#">
                <i className="icon-layers"></i>
              </Link>
              <Link className="tpproduct__shopping-cart" to="#">
                <i className="icon-eye"></i>
              </Link>
            </div>
          </div>
          <div className="tpproduct__content">
            <span className="tpproduct__content-weight">
              <Link to={`/Product/${product._id}`}>{product.category}</Link>,
            </span>
            <h4 className="tpproduct__title">
              <Link to={`/Product/${product._id}`}>{product.productTitle}</Link>
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
              <del className=" pl-10">{product.discountPercentage}%</del>
            </div>
          </div>
          <div className="">
            <div
              className=" "
              style={{ marginLeft: "40px ", paddingBottom: "15px" }}
            >
              <Link
                className="tp-btn-2"
                to="#"
                onClick={() => handleAddToCart(product._id)}
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
