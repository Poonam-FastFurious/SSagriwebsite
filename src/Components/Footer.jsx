import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer>
        <div className="tpfooter__area theme-bg-2">
          <div className="tpfooter__top pb-15">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tpfooter__widget footer-col-1 mb-50">
                    <h4 className="tpfooter__widget-title">Let Us Help You</h4>
                    <p>
                      If you have any question, please <br />
                      contact us at:
                      <Link to="mailto:support@example.com">
                        info.agriqulture@gmail.com
                      </Link>
                    </p>
                    <div className="tpfooter__widget-social mt-45">
                      <span className="tpfooter__widget-social-title mb-5">
                        Social Media:
                      </span>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-skype"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tpfooter__widget footer-col-2 mb-50">
                    <h4 className="tpfooter__widget-title">Looking for Us</h4>
                    <p>Thane, Mumbai , India 400601</p>
                    <div className="tpfooter__widget-time-info mt-35">
                      <span>
                        Mobile: <b>+918076406706</b>
                      </span>
                      <span>
                        Saturday: <b>12:00 AM – 06:00 PM</b>
                      </span>
                      <span>
                        Sunday: <b>Close</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5">
                  <div className="tpfooter__widget footer-col-3 mb-50">
                    <h4 className="tpfooter__widget-title">Pages</h4>
                    <div className="tpfooter__widget-links">
                      <ul>
                        <li>
                          <Link to="/Termscondition" onClick={scrollToTop}>
                            Terms & condition
                          </Link>
                        </li>
                        <li>
                          <Link to="/privacy">PRIVACY POLICY</Link>
                        </li>
                        <li>
                          <Link to="#">Immunity booster</Link>
                        </li>
                        <li>
                          <Link to="#">Diabetes Pack</Link>
                        </li>
                        <li>
                          <Link to="#">Microgreens</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-8 col-sm-7">
                  <div className="tpfooter__widget footer-col-4 mb-50">
                    <h4 className="tpfooter__widget-title">Our newsletter</h4>
                    <div className="tpfooter__widget-newsletter">
                      <p>
                        Subscribe to the Orfarm mailing list to receive updates
                        <br />
                        on new arrivals & other information.
                      </p>
                      <form>
                        <span>
                          <i>
                            <img src="assets/img/shape/message-1.svg" alt="" />
                          </i>
                        </span>
                        <input
                          type="email"
                          placeholder="Your email address..."
                        />
                        <button className="tpfooter__widget-newsletter-submit tp-news-btn">
                          Subscribe
                        </button>
                      </form>
                      <div className="tpfooter__widget-newsletter-check mt-10">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            I accept terms & conditions & privacy policy.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tpfooter___bottom pt-40 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-12">
                  <div className="tpfooter__copyright">
                    <span className="tpfooter__copyright-text">
                      Copyright © <Link to="#">SS Agriculture</Link> all rights
                      reserved. Designed by{" "}
                      <Link target="blank" to="https://brandbell.in/">
                        Brandbell
                      </Link>
                      .
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-12">
                  <div className="tpfooter__copyright-thumb text-end">
                    <img src="assets/img/shape/footer-payment.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
