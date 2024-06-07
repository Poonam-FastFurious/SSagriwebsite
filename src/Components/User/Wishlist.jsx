import { useState } from "react";

function Wishlist() {
  const [quantity, setQuantity] = useState(1);
  const incresequantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <>
      <main>
        <div className="breadcrumb__area pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-breadcrumb__content">
                  <div className="tp-breadcrumb__list">
                    <span className="tp-breadcrumb__active">
                      <a href="index.html">Home</a>
                    </span>
                    <span className="dvdr">/</span>
                    <span>Wishlist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-area pb-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Courses</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-add-to-cart">Add To Cart</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="shop-details.html">
                              <img
                                src="https://html.hixstudio.net/orfarm/assets/img/product/product-details-1.png"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="shop-details.html">
                              Summer Breakfast For Healthy Morning
                            </a>
                          </td>
                          <td className="product-price">
                            <span className="amount">$130.00</span>
                          </td>
                          <td className="product-quantity">
                            <span
                              className="cart-minus"
                              onClick={decreaseQuantity}
                            >
                              -
                            </span>
                            <input
                              className="cart-input"
                              type="text"
                              value={quantity}
                            />
                            <span
                              className="cart-plus"
                              onClick={incresequantity}
                            >
                              +
                            </span>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">{quantity * 130.5}</span>
                          </td>
                          <td className="product-add-to-cart">
                            <button className="tp-btn tp-color-btn  tp-wish-cart banner-animation">
                              Add To Cart
                            </button>
                          </td>
                          <td className="product-remove">
                            <a href="#">
                              <i className="fa fa-times"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <a href="shop-details.html">
                              <img
                                src="https://html.hixstudio.net/orfarm/assets/img/product/product-details-2.png"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="shop-details.html">
                              The Best Great Benefits Of Fresh Beef
                            </a>
                          </td>
                          <td className="product-price">
                            <span className="amount">$120.50</span>
                          </td>
                          <td className="product-quantity">
                            <span
                              className="cart-minus"
                              onClick={decreaseQuantity}
                            >
                              -
                            </span>
                            <input
                              className="cart-input"
                              type="text"
                              value={quantity}
                            />
                            <span
                              className="cart-plus"
                              onClick={incresequantity}
                            >
                              +
                            </span>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">{quantity * 120.5}</span>
                          </td>
                          <td className="product-add-to-cart">
                            <button className="tp-btn tp-color-btn tp-wish-cart banner-animation">
                              Add To Cart
                            </button>
                          </td>
                          <td className="product-remove">
                            <a href="#">
                              <i className="fa fa-times"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Wishlist;
