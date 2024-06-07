import { Link } from "react-router-dom";

function OfferBanner() {
  return (
    <>
      <section className="banner-area pb-60 grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="tpbanner__item mb-30">
                <Link to="shop-3">
                  <div
                    className="tpbanner__content"
                    style={{
                      backgroundImage:
                        "url(https://html.hixstudio.net/orfarm/assets/img/banner/banner-2.jpg)",
                    }}
                  >
                    <span className="tpbanner__sub-title mb-10">
                      Top offers
                    </span>
                    <h4 className="tpbanner__title mb-30">
                      Eat Green <br />
                      Best For Family
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tpbanner__item mb-30">
                <Link to="shop-3">
                  <div
                    className="tpbanner__content"
                    style={{
                      backgroundImage:
                        "url(https://html.hixstudio.net/orfarm/assets/img/banner/banner-1.jpg)",
                    }}
                  >
                    <span className="tpbanner__sub-title tpbanner__white mb-10">
                      Weekend Deals
                    </span>
                    <h4 className="tpbanner__title mb-30">
                      Fresh Food <br />
                      Restore Health
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tpbanner__item mb-30">
                <Link to="shop-3">
                  <div
                    className="tpbanner__content"
                    style={{
                      backgroundImage:
                        "url(https://html.hixstudio.net/orfarm/assets/img/banner/banner-3.jpg)",
                    }}
                  >
                    <span className="tpbanner__sub-title mb-10">
                      Top seller
                    </span>
                    <h4 className="tpbanner__title mb-30">
                      Healthy <br />
                      Fresh Free Bread
                    </h4>
                    <p>Limited Time: Online Only!</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OfferBanner;
