import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";

function LatestProduct() {
  const [latestproduct, setLatestproduct] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = async (productId) => {
    try {
      const response = await fetch("/api/v1/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Product added to cart:", data);
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart.");
    }
  };

  const addToWishlist = (productId) => {
    setWishlist((prevWishlist) => [...prevWishlist, productId]);
    toast.success("Item added to wishlist!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    const fetchLatestProduct = async () => {
      try {
        const response = await fetch("/api/v1/Product/products", {
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
              <div className="col" key={index}>
                <div className="tpproduct p-relative mb-20">
                  <div className="tpproduct__thumb p-relative text-center">
                    <Link to={`/Product/${product._id}`}>
                      <img
                        src={product.image}
                        alt="latestproduct"
                        style={{ height: "200px" }}
                      />
                    </Link>

                    <div className="tpproduct__info bage">
                      <span className="tpproduct__info-discount bage__discount">
                        -{product.discountPercentage}%
                      </span>
                      <span className="tpproduct__info-hot bage__hot">HOT</span>
                    </div>
                    <div className="tpproduct__shopping pt-25">
                      <Link
                        className="tpproduct__shopping-wishlist"
                        to="#"
                        onClick={() => addToWishlist(product._id)}
                      >
                        <i
                          className="icon-heart icons"
                          style={{
                            color: wishlist.includes(product._id)
                              ? "red"
                              : "black",
                          }}
                        ></i>
                      </Link>

                      <Link className="tpproduct__shopping-cart" to="#">
                        <i className="icon-eye"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tpproduct__content">
                    <span className="tpproduct__content-weight">
                      <Link to={`/Product/${product._id}`}>Fresh Fruits</Link>,
                      <Link to={`/Product/${product._id}`}>Vegetables</Link>
                    </span>
                    <h4 className="tpproduct__title">
                      <Link to="shop-details-top-">{product.productTitle}</Link>
                    </h4>
                    <div className="tpproduct__rating mb-5">
                      <Link to="#">
                        <i className="icon-star_outline1"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-star_outline1"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-star_outline1"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-star_outline1"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-star_outline1"></i>
                      </Link>
                    </div>
                    <div className="tpproduct__price">
                      <span>{product.oneTimePrice}</span>
                      <del>$19.00</del>
                    </div>
                  </div>
                  <div className="tpproduct__hover-text">
                    <div className="tpproduct__hover-btn d-flex justify-content-center mb-10">
                      <Link
                        className="tp-btn-2"
                        to="#"
                        onClick={() => addToCart(product._id)}
                      >
                        Add to cart
                      </Link>
                    </div>
                    <div className="tpproduct__descrip">
                      <ul>
                        <li>Stock: {product.stock}</li>
                        <li>Rating: {product.rating}</li>
                        <li>Type: Organic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestProduct;
