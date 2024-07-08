import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <main>
        <section className="about-area tpabout__inner-bg pt-175 pb-170 mb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tpabout__inner text-center">
                  <h5 className="tpabout__inner-sub mb-15">
                    About for SSAGRICULTURE
                  </h5>
                  <h3 className="tpabout__inner-title mb-35">Contact Us ?</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati perspiciatis commodi dolore pariatur, optio hic.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam fugit earum ab..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map-area tpmap__box">
          <div className="container">
            <div className="row gx-0">
              <div className="ol-lg-6 col-md-6 order-1 order-md-2">
                <div className="tpform__wrapper pt-120 pb-80 ml-60">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15071.32713267635!2d72.96681406283528!3d19.202548226362165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93bc1aee347%3A0x26c4d0515abdb1cd!2sThane%2C%20Maharashtra%20400601!5e0!3m2!1sen!2sin!4v1714994580429!5m2!1sen!2sin"
                    width="100%" // Adjusted for responsiveness
                    height="500" // Adjusted height for smaller screens
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 order-1 order-md-2">
                <div className="tpform__wrapper pt-120 pb-80 ml-60">
                  <h4 className="tpform__title">LEAVE A REPLY</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="tpform__box">
                    <form>
                      <div className="row gx-7">
                        <div className="col-lg-6">
                          <div className="tpform__input mb-20">
                            <input
                              type="text"
                              placeholder="Your Name *"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tpform__input mb-20">
                            <input
                              type="email"
                              placeholder="Your Email *"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tpform__input mb-20">
                            <input
                              type="text"
                              placeholder="Subject *"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tpform__input mb-20">
                            <input type="text" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="tpform__textarea">
                            <textarea
                              name="message"
                              placeholder="Message"
                            ></textarea>
                            <div className="tpform__textarea-check mt-20 mb-25">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault01"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault01"
                                >
                                  I am bound by the terms of the{" "}
                                  <Link to="#">
                                    Service I accept Privacy Policy.
                                  </Link>
                                </label>
                              </div>
                            </div>
                            <button>Send message</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactUs;
