import { Link } from "react-router-dom";

function StartMicrogreen() {
  return (
    <>
      <section className="product-feature-area product-feature grey-bg pt-80 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="tpfeature__thumb p-relative pb-40">
                <iframe
                  id="AuraXFrame"
                  title="AuraX"
                  width="100%"
                  height="100%"
                  style={{
                    aspectRatio: "1",
                    maxHeight: "100vh",
                    maxWidth: "100vw",
                    outline: "none",
                    border: "none",
                  }}
                  src="https://aura-x-dashboard.vercel.app/model/664c76f889102a2d00d6eaf4"
                />
                <div className="tpfeature__shape d-none d-md-block">
                  <img
                    className="tpfeature__shape-one"
                    src="https://html.hixstudio.net/orfarm/assets/img/product/feature-shape-1.png"
                    alt=""
                  />
                  <img
                    className="tpfeature__shape-two"
                    src="https://html.hixstudio.net/orfarm/assets/img/product/feature-shap.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="tpproduct-feature p-relative pt-45 pb-40">
                <div className="tpsection tpfeature__content mb-35">
                  <h4 className="tpsection__sub-title mb-0">
                    ~ The Best For Your ~
                  </h4>
                  <h4 className="tpsection__title tpfeature__title mb-25">
                    Start growing your own <br />
                    <span>Microgreens</span> - Happy Life
                  </h4>
                  <p>
                    KERT is a savvy device that automatically grows Microgreens
                    for you in just 5-8 days, also including a variety of
                    species that you can hardly imagine growing it at home.
                    <br />
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="tpfeature__box">
                      <div className="tpfeature__product-item mb-25">
                        <h4 className="tpfeature__product-title">Color</h4>
                        <span className="tpfeature__product-info">
                          Cream & Beige ,Green & Brown
                        </span>
                      </div>
                      <div className="tpfeature__product-item mb-45">
                        <h4 className="tpfeature__product-title">Place</h4>
                        <span className="tpfeature__product-">
                          Place the Seed Patchs on the tray
                        </span>
                      </div>
                      <div className="tpfeature__btn">
                        <Link className="tp-btn-4" to="cart">
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="tpfeature__box">
                      <div className="tpfeature__product-item mb-25">
                        <h4 className="tpfeature__product-title">Harvest</h4>
                        <span className="tpfeature__product-info">
                          Harvest Goodness bundle
                        </span>
                      </div>
                      <div className="tpfeature__product-item mb-45">
                        <h4 className="tpfeature__product-title">Sprinkle</h4>
                        <span className="tpfeature__product-">
                          Harvest Goodness bundle
                        </span>
                      </div>
                      <div className="tpfeature__btn">
                        <Link className="tp-btn-3" to="shop-2">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tpfeature__shape d-none d-md-block">
                  <img
                    className="tpfeature__shape-three"
                    src="https://html.hixstudio.net/orfarm/assets/img/product/feature-shape-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StartMicrogreen;
