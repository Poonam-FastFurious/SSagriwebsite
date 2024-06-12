import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [formData, setFormData] = useState({
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phoneNumber: "",
    totalAmount: 0, // Dynamic total amount
  });

  const [errors, setErrors] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming you have retrieved the products from the cart page and set them in localStorage
    const storedProducts = JSON.parse(localStorage.getItem("cartProducts"));

    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    }
  }, []);
  useEffect(() => {
    const totalAmount = products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    setFormData((prevData) => ({ ...prevData, totalAmount }));
  }, [products]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    return newErrors;
  };
  const paymentHandler = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const orderId = await createOrder();
      const response = await fetch("/api/v1/payments/create", {
        method: "POST",
        body: JSON.stringify({
          orderId,
          amount: formData.totalAmount,
          currency: "INR",
          paymentMethod: "Credit Card",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const order = await response.json();
      console.log(order);

      // Initialize Razorpay
      var options = {
        key: "rzp_test_apOsHc9PArNQm9",
        amount: formData.totalAmount * 100,
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.payment.razorpayOrderId,
        handler: async function (response) {
          const body = {
            orderId: order.payment.razorpayOrderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          // Verify payment on backend
          const validateRes = await fetch("/api/v1/payments/verify", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const jsonRes = await validateRes.json();
          console.log(jsonRes);
        },
        prefill: {
          name: "SS AGRICULTURE",
          email: "info.agriqulture@gmail.com",
          contact: "9876543210",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
      localStorage.removeItem("cartProducts");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const createOrder = async () => {
    const customerId = localStorage.getItem("userid"); // Retrieve customer ID from localStorage

    if (!customerId) {
      alert("Customer ID not found in local storage.");
      return null;
    }

    try {
      const orderData = {
        customerId,
        products: products.map((product) => ({
          product: product.product._id, // Change this line
          quantity: product.quantity,
          price: product.product.price, // Also, adjust this line to access the price from the nested product object
        })),
        totalAmount: formData.totalAmount,
        shippingInfo: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: "Country",
          phoneNumber: formData.phoneNumber,
        },
        paymentInfo: {
          method: "Credit Card",
          status: "Pending",
        },
      };

      const response = await fetch("/api/v1/order/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to create order: ${response.status} ${errorText}`
        );
      }

      const responseData = await response.json();
      console.log("Order created successfully:", responseData);
      console.log("Order created successfullyid:", responseData.data._id);
      return responseData.data._id;
    } catch (error) {
      console.error("Error creating order:", error);
      alert(`Error creating order: ${error.message}`);
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
                    <span>Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="coupon-area pt-10 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="coupon-accordion">
                  <h3>
                    Returning customer?
                    <span id="showlogin">Click here to login</span>
                  </h3>
                  <div id="checkout-login" className="coupon-content">
                    <div className="coupon-info">
                      <p className="coupon-text">
                        Quisque gravida turpis sit amet nulla posuere lacinia.
                        Cras sed est sit amet ipsum luctus.
                      </p>
                      <form action="#">
                        <p className="form-row-first">
                          <label>
                            Username or email
                            <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </p>
                        <p className="form-row-last">
                          <label>
                            Password <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </p>
                        <p className="form-row">
                          <button className="tp-btn tp-color-btn" type="submit">
                            Login
                          </button>
                          <label>
                            <input type="checkbox" />
                            Remember me
                          </label>
                        </p>
                        <p className="lost-password">
                          <a href="#">Lost your password?</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="coupon-accordion">
                  <h3>
                    Have a coupon?
                    <span id="showcoupon">Click here to enter your code</span>
                  </h3>
                  <div id="checkout_coupon" className="coupon-checkout-content">
                    <div className="coupon-info">
                      <form action="#">
                        <p className="checkout-coupon">
                          <input type="text" placeholder="Coupon Code" />
                          <button className="tp-btn tp-color-btn" type="submit">
                            Apply Coupon
                          </button>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="checkout-area pb-50">
          <div className="container">
            <form action="#">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="checkbox-form">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="country-select">
                          <label>
                            Country <span className="required">*</span>
                          </label>
                          <select>
                            <option>INDIA</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            First Name <span className="required"></span>
                          </label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Last Name <span className="required"></span>
                          </label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Address <span className="required"></span>
                          </label>
                          <input
                            name="address"
                            type="text"
                            placeholder="Street address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                          {errors.address && (
                            <p className="error" style={{ color: "red" }}>
                              {errors.address}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <input
                            name="apartment"
                            type="text"
                            placeholder="Apartment, suite, unit etc. (optional)"
                            value={formData.apartment}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input
                            name="city"
                            type="text"
                            placeholder="Town / City"
                            value={formData.city}
                            onChange={handleInputChange}
                          />
                          {errors.city && (
                            <p className="error" style={{ color: "red" }}>
                              {errors.city}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input
                            name="state"
                            type="text"
                            placeholder=""
                            value={formData.state}
                            onChange={handleInputChange}
                          />
                          {errors.state && (
                            <p className="error" style={{ color: "red" }}>
                              {errors.state}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input
                            name="postalCode"
                            type="text"
                            placeholder="Postcode / Zip"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                          />
                          {errors.postalCode && (
                            <p className="error" style={{ color: "red" }}>
                              {errors.postalCode}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder=""
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          {errors.email && (
                            <p className="error" style={{ color: "red" }}>
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input
                            name="phoneNumber"
                            type="text"
                            placeholder="Phone"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                          />
                          {errors.phoneNumber && (
                            <p className="error" style={{ color: "red" }}>
                              {errors.phoneNumber}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="your-order mb-30 ">
                    <h3>Your order</h3>
                    <div className="your-order-table table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th className="product-name">Product</th>
                            <th className="product-total">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product, index) => (
                            <tr className="cart_item" key={index}>
                              <td className="product-name">
                                {product.product.productTitle}
                                <strong className="product-quantity">
                                  × {product.quantity}
                                </strong>
                              </td>
                              <td className="product-total">
                                <span className="amount">
                                  {product.product.price * product.quantity}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td>
                              <span className="amount">
                                ${formData.totalAmount}
                              </span>
                            </td>
                          </tr>
                          <tr className="shipping">
                            <th>Shipping</th>
                            <td>
                              <ul>
                                <li>
                                  <input type="radio" name="shipping" />
                                  <label>Free Shipping:</label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="order-total">
                            <th>Order Total</th>
                            <td>
                              <strong>
                                <span className="amount">
                                  ${formData.totalAmount}
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div className="payment-method">
                      <div className="order-button-payment mt-20">
                        <button
                          onClick={paymentHandler}
                          type="button"
                          className="tp-btn tp-color-btn w-100 banner-animation"
                        >
                          Place order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Checkout;
