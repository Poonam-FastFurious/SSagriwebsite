import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Baseurl } from "../Confige";

function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate(); // Use navigate hook for programmatic navigation

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(Baseurl + "api/v1/cart/product", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch cart");
        }

        const data = await response.json();
        const updatedCartItems = data.cart.items.map((item) => ({
          ...item,
          product: {
            ...item.product,
            price: item.price,
          },
        }));
        const updatedCart = {
          ...data.cart,
          items: updatedCartItems,
        };
        setCart(updatedCart);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCart();
  }, []);

  const incrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const updatedItems = updatedCart.items.map((item) => {
        if (item.product._id === productId) {
          const updatedQuantity = item.quantity + 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });

      const updatedSubtotal = updatedItems.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      );

      return {
        ...updatedCart,
        items: updatedItems,
        total: updatedSubtotal,
      };
    });
  };

  const removeProduct = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(Baseurl + "/api/v1/cart/removeproduct", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to remove product");
      }

      setCart((prevCart) => {
        const updatedItems = prevCart.items.filter(
          (item) => item.product._id !== productId
        );

        const updatedSubtotal = updatedItems.reduce(
          (total, item) => total + item.quantity * item.product.price,
          0
        );

        return {
          ...prevCart,
          items: updatedItems,
          total: updatedSubtotal,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckout = () => {
    localStorage.setItem("cartProducts", JSON.stringify(cart.items));
    navigate("/checkout");
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
                      <Link to="/">Home</Link>
                    </span>
                    <span className="dvdr">/</span>
                    <span>Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="cart-area pb-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {cart && cart.items.length === 0 ? (
                  <div className="empty-cart">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
                      alt="Empty Cart"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "flex",
                        justifyContent: "center",
                        margin: "auto",
                      }}
                    />
                  </div>
                ) : (
                  <form action="#">
                    <div className="table-content table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="product-thumbnail">Images</th>
                            <th className="cart-product-name">Product Name</th>
                            <th className="product-price">Unit Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Total</th>
                            <th className="product-remove">Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart ? (
                            cart.items.map((product, index) => (
                              <tr key={index}>
                                <td className="product-thumbnail">
                                  <Link to="/shop-details">
                                    <img src={product.product.image} alt="" />
                                  </Link>
                                </td>
                                <td className="product-name">
                                  <Link to="/shop-details">
                                    {product.product.productTitle}
                                  </Link>
                                </td>
                                <td className="product-price">
                                  <span className="amount">
                                    Rs {product.product.price}
                                  </span>
                                </td>
                                <td className="product-quantity">
                                  <span className="cart-minus">-</span>
                                  <input
                                    className="cart-input"
                                    type="text"
                                    value={product.quantity}
                                    readOnly
                                  />
                                  <span
                                    className="cart-plus"
                                    onClick={() =>
                                      incrementQuantity(product.product._id)
                                    }
                                  >
                                    +
                                  </span>
                                </td>
                                <td className="product-subtotal">
                                  <span className="amount">
                                    Rs{" "}
                                    {product.quantity * product.product.price}
                                  </span>
                                </td>
                                <td className="product-remove">
                                  <Link
                                    to="#"
                                    onClick={() =>
                                      removeProduct(product.product._id)
                                    }
                                  >
                                    <i className="fa fa-times"></i>
                                  </Link>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="6">Loading...</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="coupon-all">
                          <div className="coupon">
                            <input
                              id="coupon_code"
                              className="input-text"
                              name="coupon_code"
                              placeholder="Coupon code"
                              type="text"
                            />
                            <button
                              className="tp-btn tp-color-btn banner-animation"
                              name="apply_coupon"
                              type="submit"
                            >
                              Apply Coupon
                            </button>
                          </div>
                          <div className="coupon2">
                            <button
                              className="tp-btn tp-color-btn banner-animation"
                              name="update_cart"
                              type="submit"
                            >
                              Update cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-end">
                      <div className="col-md-5 ">
                        {cart && (
                          <div className="cart-page-total">
                            <h2>Cart totals</h2>
                            <ul className="mb-20">
                              <li>
                                Subtotal <span>Rs {cart.total}</span>
                              </li>
                            </ul>
                            <button
                              onClick={handleCheckout}
                              className="tp-btn tp-color-btn banner-animation"
                            >
                              Proceed to Checkout
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Cart;
