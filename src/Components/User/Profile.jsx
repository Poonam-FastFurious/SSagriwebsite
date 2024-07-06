/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Baseurl } from "../../Components/Confige";
import { Link } from "react-router-dom";

function Profile() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editable, setEditable] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const token = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userid");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    setError("");
    setSuccess("");

    // API request to change password
    fetch(Baseurl + "/api/v1/user/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        oldPassword: oldPassword,
        newPassword: newPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to change password");
        }
        return response.json();
      })
      .then(() => {
        setSuccess("Password changed successfully");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        console.error("Error changing password:", error);
        setError("Error changing password. Please try again.");
      });
  };
  // Function to toggle the editable state
  const toggleEditable = () => {
    setEditable(!editable);
  };
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(Baseurl + "/api/v1/user/current-user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setUserDetails(data.data);
      } catch (err) {
        setError(err.message || "Error fetching user details");
      }
    };

    fetchCurrentUser();
  }, []);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(Baseurl + "/api/v1/order/allorder");
        const data = await response.json();
        if (data.statusCode === 200) {
          const filteredOrders = data.data.filter(
            (order) => order.customer === userId
          );
          setOrders(filteredOrders);
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="">
        <div className="">
          <div className="container-fluid">
            <div className="position-relative">
              <div className="profile-wid-bg profile-setting-img">
                <img
                  src="https://themesbrand.com/velzon/html/master/assets/images/profile-bg.jpg"
                  className="profile-wid-img"
                  alt=""
                />
                <div className="overlay-content">
                  <div className="text-end p-3">
                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                      <input
                        id="profile-foreground-img-file-input"
                        type="file"
                        className="profile-foreground-img-file-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-3">
                <div className="card  mt-10">
                  <div className="card-body p-4">
                    <div className="text-center">
                      <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                        <img
                          src={userDetails.avatar}
                          className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                          alt="user-profile-image"
                        />
                        <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                          <input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input"
                          />
                          <label
                            htmlFor="profile-img-file-input"
                            className="profile-photo-edit avatar-xs"
                          ></label>
                        </div>
                      </div>
                      <h5 className="fs-16 mb-1">{userDetails.fullName}</h5>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-0">
                          Complete Your Profile
                        </h5>
                      </div>
                      <button
                        className="flex-shrink-0"
                        onClick={toggleEditable}
                      >
                        <a className="badge bg-light text-primary fs-12">
                          <i className="ri-edit-box-line align-bottom me-1"></i>
                          Edit
                        </a>
                      </button>
                    </div>
                    <div className="progress animated-progress custom-progress progress-label">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "40%" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="label">40%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-9">
                <div className="card mt-10">
                  <div className="card-header">
                    <ul
                      className="nav  rounded  border-bottom-0 "
                      role="tablist"
                      style={{ color: "red" }}
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          data-bs-toggle="tab"
                          href="#personalDetails"
                          role="tab"
                        >
                          <i className="fas fa-home"></i> Personal Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#changePassword"
                          role="tab"
                        >
                          <i className="far fa-user"></i> Change Password
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#orderlist"
                          role="tab"
                        >
                          <i className="far fa-user"></i> Orders
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body p-4">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="personalDetails"
                        role="tabpanel"
                      >
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstnameInput"
                                  className="form-label"
                                >
                                  Name(Full-Name)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstnameInput"
                                  placeholder="Enter your firstname"
                                  value={userDetails.fullName}
                                  disabled={!editable}
                                />
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="phonenumberInput"
                                  placeholder="Enter your phone number"
                                  disabled={!editable}
                                  value={userDetails.mobile}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <label
                                htmlFor="phonenumberInput"
                                className="form-label"
                              >
                                Gender
                              </label>
                              <select
                                className="form-select mb-3"
                                aria-label="Default select example"
                              >
                                <option selected>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Three</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="emailInput"
                                  className="form-label"
                                >
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="emailInput"
                                  placeholder="Enter your email"
                                  disabled={!editable}
                                  value={userDetails.email}
                                />
                              </div>
                            </div>

                            <div className="col-lg-12"></div>

                            <div className="col-lg-12"></div>

                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="cityInput"
                                  className="form-label"
                                >
                                  City
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="cityInput"
                                  placeholder="City"
                                  disabled={!editable}
                                  value=""
                                />
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="countryInput"
                                  className="form-label"
                                >
                                  Country
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="countryInput"
                                  placeholder="Country"
                                  disabled={!editable}
                                  value=""
                                />
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="zipcodeInput"
                                  className="form-label"
                                >
                                  Zip Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  minLength="5"
                                  maxLength="6"
                                  id="zipcodeInput"
                                  placeholder="Enter zipcode"
                                  disabled={!editable}
                                  value=""
                                />
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="mb-3 pb-2">
                                <label
                                  htmlFor="exampleFormControlTextarea"
                                  className="form-label"
                                >
                                  Description
                                </label>
                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea"
                                  placeholder="Enter your description"
                                  rows="3"
                                  disabled
                                >
                                  Hi I'm Anna Adame,It will be as simple as
                                  Occidental; in fact, it will be Occidental. To
                                  an English person, it will seem like
                                  simplified English, as a skeptical Cambridge
                                  friend of mine told me what Occidental is
                                  European languages are members of the same
                                  family.
                                </textarea>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Updates
                                </button>
                                <button
                                  onClick={toggleEditable}
                                  type="button"
                                  className="btn btn-soft-success"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div
                        className="tab-pane"
                        id="changePassword"
                        role="tabpanel"
                      >
                        <form onSubmit={handleSubmit}>
                          <div className="row g-2">
                            <div className="col-lg-4">
                              <div>
                                <label
                                  htmlFor="oldpasswordInput"
                                  className="form-label"
                                >
                                  Old Password*
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="oldpasswordInput"
                                  placeholder="Enter current password"
                                  value={oldPassword}
                                  onChange={(e) =>
                                    setOldPassword(e.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div>
                                <label
                                  htmlFor="newpasswordInput"
                                  className="form-label"
                                >
                                  New Password*
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="newpasswordInput"
                                  placeholder="Enter new password"
                                  value={newPassword}
                                  onChange={(e) =>
                                    setNewPassword(e.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div>
                                <label
                                  htmlFor="confirmpasswordInput"
                                  className="form-label"
                                >
                                  Confirm Password*
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="confirmpasswordInput"
                                  placeholder="Confirm password"
                                  value={confirmPassword}
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>

                            <div
                              className="col-lg-12"
                              style={{ visibility: "hidden" }}
                            >
                              <div className="mb-3">
                                <a
                                  href=""
                                  className="link-primary text-decoration-underline"
                                >
                                  Forgot Password ?
                                </a>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="text-end">
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                >
                                  Change Password
                                </button>
                              </div>
                            </div>
                            {error && (
                              <div className="col-lg-12">
                                <div
                                  className="alert alert-danger"
                                  role="alert"
                                >
                                  {error}
                                </div>
                              </div>
                            )}

                            {success && (
                              <div className="col-lg-12">
                                <div
                                  className="alert alert-success"
                                  role="alert"
                                >
                                  {success}
                                </div>
                              </div>
                            )}
                          </div>
                        </form>
                        <div className="mt-4 mb-3 border-bottom pb-2">
                          <div className="float-end">
                            <a href="" className="link-primary">
                              All Logout
                            </a>
                          </div>
                          <h5 className="card-title">Login History</h5>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                              <i className="ri-smartphone-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6>iPhone 12 Pro</h6>
                            <p className="text-muted mb-0">
                              Los Angeles, United States - March 16 at 2:47PM
                            </p>
                          </div>
                          <div>
                            <a href="">Logout</a>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="orderlist" role="tabpanel">
                        <div>
                          <ul
                            className="nav nav-tabs nav-tabs-custom nav-success mb-3"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <Link
                                className="nav-link active All py-3"
                                data-bs-toggle="tab"
                                id="All"
                                to="#home1"
                                role="tab"
                                aria-selected="true"
                              >
                                <i className="ri-store-2-fill me-1 align-bottom"></i>
                                All Orders
                              </Link>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              className="tab-pane fade show active"
                              id="home1"
                              role="tabpanel"
                            >
                              <div className="table-responsive table-card mb-1">
                                <table className="table table-nowrap align-middle">
                                  <thead className="text-muted table-light">
                                    <tr className="text-uppercase">
                                      <th scope="col" style={{ width: "25px" }}>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="checkAll"
                                            value="option"
                                          />
                                        </div>
                                      </th>
                                      <th className="sort" data-sort="id">
                                        Order ID
                                      </th>

                                      <th className="sort" data-sort="date">
                                        Order Date
                                      </th>
                                      <th className="sort" data-sort="amount">
                                        Amount
                                      </th>
                                      <th className="sort" data-sort="payment">
                                        Payment status
                                      </th>
                                      <th className="sort" data-sort="status">
                                        Delivery Status
                                      </th>
                                      <th className="sort" data-sort="city">
                                        Action
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="list form-check-all">
                                    {orders.map((userorder, index) => (
                                      <tr key={index}>
                                        <th scope="row">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              name="checkAll"
                                              value="option1"
                                            />
                                          </div>
                                        </th>
                                        <td className="product_name">
                                          <Link
                                            to={`/orderdetails/${userorder._id}`}
                                          >
                                            {userorder.orderID}
                                          </Link>
                                        </td>

                                        <td className="date">
                                          {new Date(
                                            userorder.createdAt
                                          ).toLocaleDateString()}
                                        </td>
                                        <td className="amount">
                                          {userorder.totalAmount}
                                        </td>
                                        <td className="payment">
                                          {userorder.paymentInfo.status}
                                        </td>
                                        <td className="status">
                                          <span className="badge bg-white text-success text-uppercase">
                                            {userorder.status}
                                          </span>
                                        </td>
                                        <td>
                                          <ul className="list-inline hstack gap-2 mb-0">
                                            <li
                                              className="list-inline-item"
                                              data-bs-toggle="tooltip"
                                              data-bs-trigger="hover"
                                              data-bs-placement="top"
                                              title="View"
                                            >
                                              <Link
                                                to={`${userorder._id}`}
                                                className="text-primary d-inline-block"
                                              >
                                                <i className="ri-eye-fill fs-16"></i>
                                              </Link>
                                            </li>
                                          </ul>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© SS Agriculture</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design & Develop by Brandbell
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Profile;
