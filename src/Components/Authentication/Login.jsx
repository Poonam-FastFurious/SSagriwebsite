/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/Images/white_logo.png";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      toast.success("🦄Login Successfull", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => {
          localStorage.setItem("token", data.data.accessToken);
          localStorage.setItem("userid", data.data.user._id);
          navigate("/");
        },
      });
    } catch (error) {
      toast.error("invalid userid or password", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>

        <div className="auth-page-content overflow-hidden pt-lg-5">
          <div
            className="container"
            style={{ paddingLeft: "150px", paddingRight: "150px" }}
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="card overflow-hidden">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="p-lg-5 p-4 auth-one-bg h-100">
                        <div className="bg-overlay"></div>
                        <div className="position-relative h-100 d-flex flex-column">
                          <div className="mb-4">
                            <Link to="/" className="d-block">
                              <img src={logo} alt="" height="50" />
                            </Link>
                          </div>
                          <div className="mt-auto">
                            <div className="mb-3">
                              <i className="ri-double-quotes-l display-4 text-success"></i>
                            </div>

                            <div
                              id="qoutescarouselIndicators"
                              className="carousel slide"
                              data-bs-ride="carousel"
                            >
                              <div className="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="0"
                                  className="active"
                                  aria-current="true"
                                  aria-label="Slide 1"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="1"
                                  aria-label="Slide 2"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="2"
                                  aria-label="Slide 3"
                                ></button>
                              </div>
                              <div className="carousel-inner text-center text-white-50 pb-5">
                                <div className="carousel-item active">
                                  <p className="fs-15 fst-italic">
                                    " Admin Dashboard Thanks very much! "
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " The theme is really great with an amazing
                                    customer support."
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="p-lg-5 p-4">
                        <div>
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p className="text-muted">
                            Sign in to continue to SSAgriqulture.
                          </p>
                        </div>

                        <div className="mt-4">
                          <form onSubmit={handelsubmit}>
                            <div className="mb-3">
                              <label htmlFor="username" className="form-label">
                                Eamil
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="username"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>

                            <div className="mb-3">
                              <div className="float-end">
                                <Link to="#" className="text-muted">
                                  Forgot password?
                                </Link>
                              </div>
                              <label
                                className="form-label"
                                htmlFor="password-input"
                              >
                                Password
                              </label>
                              <div className="position-relative auth-pass-inputgroup mb-3">
                                <input
                                  type="password"
                                  className="form-control pe-5 password-input"
                                  placeholder="Enter password"
                                  id="password-input"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                  type="button"
                                  id="password-addon"
                                >
                                  <i className="ri-eye-fill align-middle"></i>
                                </button>
                              </div>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="auth-remember-check"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="auth-remember-check"
                              >
                                Remember me
                              </label>
                            </div>

                            <div className="mt-4">
                              <button
                                className="btn btn-success w-100"
                                type="submit"
                              >
                                Sign In
                              </button>
                            </div>

                            <div className="mt-4 text-center">
                              <div className="signin-other-title">
                                <h5 className="fs-13 mb-4 title">
                                  Sign In with
                                </h5>
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  gap: "3px",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary btn-icon "
                                >
                                  <i className="ri-facebook-fill fs-16"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-google-fill fs-16"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-dark btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-github-fill fs-16"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-info btn-icon waves-effect waves-light"
                                >
                                  <i className="ri-twitter-fill fs-16"></i>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="mt-5 text-center">
                          <p className="mb-0">
                            Don't have an account ?
                            <Link
                              to="/register"
                              className="fw-semibold text-primary text-decoration-underline"
                            >
                              Signup
                            </Link>
                          </p>
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
    </>
  );
}

export default Signin;
