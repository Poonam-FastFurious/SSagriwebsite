import { useEffect } from "react";

function Feature() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-background]");
    elements.forEach((element) => {
      const backgroundImage = element.getAttribute("data-background");
      element.style.backgroundImage = `url(${backgroundImage})`;
    });
  }, []);
  return (
    <>
      <section
        className="feature-area mainfeature__bg grey-bg pt-50 pb-40"
        data-background="https://html.hixstudio.net/orfarm/assets/img/shape/footer-shape-1.svg"
      >
        <div className="container">
          <div className="mainfeature__border pb-15">
            <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
              <div className="col">
                <div className="mainfeature__item  mb-30">
                  <div className="mainfeature__icon">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-1.svg"
                      alt=""
                    />
                  </div>
                  <div className="mainfeature__content">
                    <h4 className="mainfeature__title">Fast Delivery</h4>
                    <p>Across India</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mainfeature__item  mb-30">
                  <div className="mainfeature__icon">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-2.svg"
                      alt=""
                    />
                  </div>
                  <div className="mainfeature__content">
                    <h4 className="mainfeature__title">safe payment</h4>
                    <p>100% Secure Payment</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mainfeature__item  mb-30">
                  <div className="mainfeature__icon">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-3.svg"
                      alt=""
                    />
                  </div>
                  <div className="mainfeature__content">
                    <h4 className="mainfeature__title">Online Discount</h4>
                    <p>Add Multi-buy Discount</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mainfeature__item  mb-30">
                  <div className="mainfeature__icon">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-4.svg"
                      alt=""
                    />
                  </div>
                  <div className="mainfeature__content">
                    <h4 className="mainfeature__title">Help Center</h4>
                    <p>Dedicated 24/7 Support</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mainfeature__item  mb-30">
                  <div className="mainfeature__icon">
                    <img
                      src="https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-5.svg"
                      alt=""
                    />
                  </div>
                  <div className="mainfeature__content">
                    <h4 className="mainfeature__title">Curated items</h4>
                    <p>From Handpicked Sellers</p>
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

export default Feature;
