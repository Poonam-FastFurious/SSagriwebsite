import { Link } from "react-router-dom";
import featureProduct2 from "../../assets/Images/features_product01.png";
import featureProduct3 from "../../assets/Images/features_product03.png";
function CardProduct() {
  return (
    <>
      <div className="col">
        <div className="tpproduct p-relative mb-20">
          <div className="tpproduct__thumb p-relative text-center">
            <Link to="#">
              <img src={featureProduct2} alt="" />
            </Link>
            <Link className="tpproduct__thumb-img" to="/productDetails">
              <img src={featureProduct3} alt="" />
            </Link>
            <div className="tpproduct__info bage">
              <span className="tpproduct__info-discount bage__discount">
                -50%
              </span>
              <span className="tpproduct__info-hot bage__hot">HOT</span>
            </div>
            <div className="tpproduct__shopping">
              <Link className="tpproduct__shopping-wishlist" to="wishlist">
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
              <Link to="shop-details-3">Fresh Fruits</Link>,
              <Link to="shop-details-3">Vagetables</Link>
            </span>
            <h4 className="tpproduct__title">
              <Link to="shop-details-top-">
                Mangosteen Organic From VietNamese
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
              <span>$56.00</span>
              <del>$19.00</del>
            </div>
          </div>
          <div className="">
            <div
              className=" "
              style={{ marginLeft: "40px ", paddingBottom: "15px" }}
            >
              <Link className="tp-btn-2" to="cart">
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
