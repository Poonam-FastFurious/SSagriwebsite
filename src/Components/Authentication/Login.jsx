/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import "react-toastify/dist/ReactToastify.css";
import { Baseurl } from "../Confige";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(Baseurl + "/api/v1/user/login", {
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
          const { accessToken, refreshToken, user } = data.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("userid", user._id);
          Cookies.set("accessToken", accessToken, { expires: 7 });
          Cookies.set("refreshToken", refreshToken, { expires: 7 });
          Cookies.set("userid", user._id, { expires: 7 });
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
      <section className="track-area pb-40 breadcrumb__area pt-5 pb-5 h-screen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12 h-screen">
              <div className="tptrack__product mb-40">
                <div className="tptrack__content grey-bg">
                  <div className="tptrack__item d-flex mb-20">
                    <div className="tptrack__item-icon">
                      <i className="fal fa-user-unlock"></i>
                    </div>
                    <div className="tptrack__item-content">
                      <h4 className="tptrack__item-title">Login Here</h4>
                      {/* <p>
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account.
                      </p> */}
                    </div>
                  </div>
                  <div className="tptrack__id mb-40">
                    <form action="#">
                      <span>
                        <i className="fal fa-user"></i>
                      </span>
                      <input
                        type="email"
                        placeholder="Username / email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </form>
                  </div>
                  <div className="tptrack__email mb-10">
                    <form action="#">
                      <span>
                        <i className="fal fa-key"></i>
                      </span>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </form>
                  </div>
                  <div className="tpsign__remember d-flex align-items-center justify-content-between mb-15">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault2"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="tpsign__pass">
                      <a href="#">Forget Password</a>
                    </div>
                  </div>
                  <div className="tptrack__btn">
                    <button
                      className="tptrack__submition active"
                      onClick={handelsubmit}
                    >
                      Login Now<i className="fal fa-long-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
