/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

function Profile() {
  const [editable, setEditable] = useState(false);

  // Function to toggle the editable state
  const toggleEditable = () => {
    setEditable(!editable);
  };

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
                      <label
                        htmlFor="profile-foreground-img-file-input"
                        className="profile-photo-edit btn btn-light"
                      >
                        <i className="ri-image-edit-line align-bottom me-1"></i>
                        Change Cover
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-3">
                <div className="card mt-n5">
                  <div className="card-body p-4">
                    <div className="text-center">
                      <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                        <img
                          src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-1.jpg"
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
                          >
                            <span className="avatar-title rounded-circle bg-light text-body">
                              <i className="ri-camera-fill"></i>
                            </span>
                          </label>
                        </div>
                      </div>
                      <h5 className="fs-16 mb-1">fullname</h5>
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
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-0">Profile</h5>
                      </div>
                    </div>

                    <div className="mb-3 d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-primary">
                          <i className="ri-global-fill"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="websiteInput"
                        placeholder="www.example.com"
                        value=""
                      />
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-success">
                          <i className="ri-dribbble-fill"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="dribbleName"
                        placeholder="Username"
                      />
                    </div>
                    <div className="d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-danger">
                          <i className="ri-pinterest-fill"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="pinterestName"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-9">
                <div className="card mt-xxl-n5">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                      role="tablist"
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
                          href="#changePassword"
                          role="tab"
                        >
                          <i className="far fa-user"></i> Orders
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#changePassword"
                          role="tab"
                        >
                          <i className="far fa-user"></i> Addresses
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
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstnameInput"
                                  placeholder="Enter your firstname"
                                  value=""
                                  disabled={!editable}
                                />
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="lastnameInput"
                                  className="form-label"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastnameInput"
                                  placeholder="Enter your lastname"
                                  value=""
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
                                  value=""
                                />
                              </div>
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
                                  value=""
                                />
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="mb-3">
                                <label
                                  htmlFor="JoiningdatInput"
                                  className="form-label"
                                >
                                  Today Login time
                                </label>
                                <p>""</p>
                              </div>
                            </div>

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
                        <form>
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
                                />
                              </div>
                            </div>

                            <div className="col-lg-12">
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
                        <div className="d-flex align-items-center mb-3">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                              <i className="ri-tablet-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6>Apple iPad Pro</h6>
                            <p className="text-muted mb-0">
                              Washington, United States - November 06 at 10:43AM
                            </p>
                          </div>
                          <div>
                            <a href="">Logout</a>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                              <i className="ri-smartphone-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6>Galaxy S21 Ultra 5G</h6>
                            <p className="text-muted mb-0">
                              Conneticut, United States - June 12 at 3:24PM
                            </p>
                          </div>
                          <div>
                            <a href="">Logout</a>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                              <i className="ri-macbook-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6>Dell Inspiron 14</h6>
                            <p className="text-muted mb-0">
                              Phoenix, United States - July 26 at 8:10AM
                            </p>
                          </div>
                          <div>
                            <a href="">Logout</a>
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
