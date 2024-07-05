import { toast } from "react-toastify";
import { Baseurl } from "../Confige";

// cartUtils.js
export const addToCart = async (productId) => {
  try {
    const token = localStorage.getItem("accessToken"); // Retrieve the token from local storage

    const response = await fetch(Baseurl + "/api/v1/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
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
    toast.error("You Have to login first.");
  }
};
