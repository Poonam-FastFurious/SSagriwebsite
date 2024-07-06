import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { Baseurl } from "../Confige";
function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`${Baseurl}/api/v1/order/singleorder/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOrder(data.data);
      })
      .catch((error) => {
        console.error("Error fetching the order data:", error);
      });
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }
  const calculateSubtotal = (products) => {
    return products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal(order.products);
  const discount =
    (subtotal * order.products[0].product.discountPercentage) / 100;
  const shippingCharge = 65.0; // Example value
  const tax = 44.99; // Example value
  const total = subtotal - discount + shippingCharge + tax;
  return (
    <div className="container h-screen pt-10">
      <div className="row">
        <div className="col-xl-9">
          <div className="card">
            <div className="card-header">
              <div className="d-flex align-items-center">
                <h5 className="card-title flex-grow-1 mb-0">
                  Order #{order.orderID}
                </h5>
                <div className="flex-shrink-0">
                  <Link
                    to="apps-invoices-details"
                    className="btn btn-success btn-sm"
                  >
                    <i className="ri-download-2-fill align-middle me-1"></i>
                    Invoice
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive table-card">
                <table className="table table-nowrap align-middle table-borderless mb-0">
                  <thead className="table-light text-muted">
                    <tr>
                      <th scope="col">Product Details</th>
                      <th scope="col">Item Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Rating</th>
                      <th scope="col" className="text-end">
                        Total Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex">
                            <div className="flex-shrink-0 avatar-md bg-light rounded p-1">
                              <img
                                src={product.product.image}
                                alt={product.product.productTitle}
                                className="img-fluid d-block"
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h5 className="fs-15">
                                <Link
                                  to="apps-ecommerce-product-details"
                                  className="link-primary"
                                >
                                  {product.product.productTitle}
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">
                                Category:{" "}
                                <span className="fw-medium">
                                  {product.product.category}
                                </span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>₹{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>
                          <div className="text-warning fs-15">
                            {[...Array(product.product.rating)].map((_, i) => (
                              <i key={i} className="ri-star-fill"></i>
                            ))}
                            {product.product.rating % 1 !== 0 && (
                              <i className="ri-star-half-fill"></i>
                            )}
                          </div>
                        </td>
                        <td className="fw-medium text-end">
                          ₹{product.price * product.quantity}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-top border-top-dashed">
                      <td colSpan="3"></td>
                      <td colSpan="2" className="fw-medium p-0">
                        <table className="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <td>Sub Total :</td>
                              <td className="text-end">
                                ₹{subtotal.toFixed(2)}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Discount{" "}
                                <span className="text-muted">
                                  (
                                  {order.products[0].product.discountPercentage}
                                  %)
                                </span>
                                :
                              </td>
                              <td className="text-end">
                                -₹{discount.toFixed(2)}
                              </td>
                            </tr>
                            <tr>
                              <td>Shipping Charge :</td>
                              <td className="text-end">
                                ₹{shippingCharge.toFixed(2)}
                              </td>
                            </tr>
                            <tr>
                              <td>Estimated Tax :</td>
                              <td className="text-end">₹{tax.toFixed(2)}</td>
                            </tr>
                            <tr className="border-top border-top-dashed">
                              <th scope="row">Total:</th>
                              <th className="text-end">₹{total.toFixed(2)}</th>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3">
          <div className="card">
            <div className="card-header">
              <div className="d-flex">
                <h5 className="card-title flex-grow-1 mb-0">
                  Customer Details
                </h5>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0 vstack gap-3">
                <li>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-3.jpg"
                        alt=""
                        className="avatar-sm rounded"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-14 mb-1">{order.customer.fullName}</h6>
                      <p className="text-muted mb-0">Customer</p>
                    </div>
                  </div>
                </li>
                <li>
                  <i className="ri-mail-line me-2 align-middle text-muted fs-16"></i>
                  josephparker@gmail.com
                </li>
                <li>
                  <i className="ri-phone-line me-2 align-middle text-muted fs-16"></i>
                  +(256) 245451 441
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="ri-map-pin-line align-middle me-1 text-muted"></i>{" "}
                Shipping Address
              </h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                <li className="fw-medium fs-14">Joseph Parker</li>
                <li>+(256) 245451 451</li>
                <li>{order.shippingInfo.address}</li>
                <li>
                  {order.shippingInfo.city} - {order.shippingInfo.postalCode}
                </li>
                <li>{order.shippingInfo.country}</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="ri-secure-payment-line align-bottom me-1 text-muted"></i>{" "}
                Payment Details
              </h5>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="flex-shrink-0">
                  <p className="text-muted mb-0">Transactions:</p>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">#VLZ124561278124</h6>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-shrink-0">
                  <p className="text-muted mb-0">{order.paymentInfo.method}</p>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">{order.paymentInfo.method}</h6>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-shrink-0">
                  <p className="text-muted mb-0">{order.customer.fullName}</p>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">{order.shippingInfo.phoneNumber}</h6>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2"></div>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <p className="text-muted mb-0">Total Amount:</p>
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0">{order.totalAmount}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
