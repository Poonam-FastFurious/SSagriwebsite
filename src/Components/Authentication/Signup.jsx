import { useState } from "react";
import { Link } from "react-router-dom";
import { Baseurl } from "../Confige";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch(Baseurl + "/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password }),
    });

    if (response.ok) {
      // Handle successful registration (e.g., navigate to a different page, show a success message)
      setSuccessMessage("Register successful!");
      setErrorMessage("");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      // Handle errors (e.g., show an error message)
      setErrorMessage("User Already exist this name ");
      setSuccessMessage("");
    }
  };
  return (
    <>
      <section className="track-area  breadcrumb__area pt-5 pb-5 h-screen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12 h-screen">
              <div className="tptrack__product mb-40">
                <div className="tptrack__content grey-bg">
                  <div className="tptrack__item d-flex mb-20">
                    <div className="tptrack__item-icon">
                      <i className="fal fa-lock"></i>
                    </div>
                    <div className="tptrack__item-content">
                      <h4 className="tptrack__item-title">Sign Up</h4>
                      <p>
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account.
                      </p>
                    </div>
                  </div>
                  <div className="tptrack__id mb-10">
                    <form action="#">
                      <span>
                        <i className="fal fa-envelope"></i>
                      </span>
                      <input
                        type="text"
                        placeholder="full Name "
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </form>
                  </div>
                  <div className="tptrack__id mb-10">
                    <form action="#">
                      <span>
                        <i className="fal fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                      />
                    </form>
                  </div>
                  <div className="tpsign__account mb-15">
                    <Link to="/login">Already Have Account?</Link>
                  </div>
                  <div className="tptrack__btn">
                    <button
                      className="tptrack__submition tpsign__reg"
                      onClick={handleRegister}
                    >
                      Register Now<i className="fal fa-long-arrow-right"></i>
                    </button>
                    {errorMessage && (
                      <p className="text-sm text-red-500 mt-2">
                        {errorMessage}
                      </p>
                    )}
                    {successMessage && (
                      <p className="text-sm text-green-500 mt-2">
                        {successMessage}
                      </p>
                    )}
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

export default SignUp;
