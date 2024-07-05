import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Baseurl } from "../Confige";

function Wishlist() {
  const [wishlistData, setWishlistData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    // Retrieve accessToken from localStorage
    const accessToken = localStorage.getItem("accessToken");

    // Fetch wishlist data with authorization header
    fetch(Baseurl + "/api/v1/wishlist", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success) {
          setWishlistData(data.wishlist);
        } else {
          // Handle error or set default state
          console.error("Failed to fetch wishlist data:", data.message);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching wishlist data:", error);
        setError("Failed to retrieve wishlist");
      });
  }, []);

  const removeFromWishlist = (productId) => {
    // Retrieve accessToken from localStorage
    const accessToken = localStorage.getItem("accessToken");

    // Make DELETE request to remove item from wishlist
    fetch(`${Baseurl}/api/v1/wishlist/remove`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to remove item from wishlist");
        }
        toast.success("remove item from wishlist!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setWishlistData((prevData) => {
          const updatedItems = prevData.items.filter(
            (item) => item.productId !== productId
          );
          return { ...prevData, items: updatedItems };
        });
      })
      .catch((error) => {
        console.error("Error removing item from wishlist:", error);
        setError("Failed to remove item from wishlist");
      });
  };
  console.log(error);
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <main>
        <div className="breadcrumb__area pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-breadcrumb__content">
                  <div className="tp-breadcrumb__list">
                    <span className="tp-breadcrumb__active">
                      <a href="index.html">Home</a>
                    </span>
                    <span className="dvdr">/</span>
                    <span>Wishlist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-area pb-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Name</th>
                          <th className="product-price"> Price</th>

                          <th className="product-subtotal">Date</th>
                          <th className="product-add-to-cart">Add To Cart</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistData &&
                          wishlistData.items.map((item, index) => (
                            <>
                              <tr key={index}>
                                <td className="product-thumbnail">
                                  <a href="shop-details.html">
                                    <img src={item.url} alt="" />
                                  </a>
                                </td>
                                <td className="product-name">
                                  <a href="shop-details.html">
                                    {item.productName}
                                  </a>
                                </td>
                                <td className="product-price">
                                  <span className="amount">₹{item.price}</span>
                                </td>

                                <td className="product-subtotal">
                                  <span className="amount">
                                    {new Date(
                                      item.addedAt
                                    ).toLocaleDateString()}
                                  </span>
                                </td>
                                <td className="product-add-to-cart">
                                  <button className="tp-btn tp-color-btn  tp-wish-cart banner-animation">
                                    Add To Cart
                                  </button>
                                </td>
                                <td
                                  className="product-remove"
                                  onClick={() =>
                                    removeFromWishlist(item.productId)
                                  }
                                >
                                  <a href="#">
                                    <i className="fa fa-times"></i>
                                  </a>
                                </td>
                              </tr>
                            </>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Wishlist;
