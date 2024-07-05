import "react-toastify/dist/ReactToastify.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import { Baseurl } from "../Confige";

import CardProduct from "../Product/CardProduct";

function LatestProduct() {
  const [latestproduct, setLatestproduct] = useState([]);

  useEffect(() => {
    const fetchLatestProduct = async () => {
      try {
        const response = await fetch(Baseurl + "/api/v1/Product/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch cart");
        }

        const data = await response.json();
        setLatestproduct(data.data.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };

    fetchLatestProduct();
  }, []);

  return (
    <>
      <section className="product-area grey-bg pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-35">
                <h4 className="tpsection__sub-title">~ Products ~</h4>
                <h4 className="tpsection__title">Latest Product </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  expedita possimus odio alias recusandae quidem accusamus quia
                  magni.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-xxl-5 row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item  ">
            {latestproduct.map((product, index) => (
              <CardProduct key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestProduct;
