import "../src/assets/New folder/libs/jsvectormap/css/jsvectormap.min.css";
import "../src/assets//New folder/libs/swiper/swiper-bundle.min.css";
import "../src/assets//New folder/css/bootstrap.min.css";
import "../src/assets//New folder/css/icons.min.css";
import "../src/assets//New folder/css/app.min.css";
import "../src/assets//New folder/css/custom.min.css";
import "./App.css";

import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/swiper-bundle.css";
import "./assets/css/slick.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/spacing.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/icon-dukamarket.css";
import "./assets/css/main.css";
import Header from "./Components/Header";

import Footer from "./Components/Footer";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/HOME/Home";

import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Wishlist from "./Components/User/Wishlist";
import ProductDetails from "./Components/Product/ProductDetails";
import Feature from "./Components/Feature";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Cart from "./Components/User/Cart";
import Checkout from "./Components/Pages/Checkout";
import Profile from "./Components/User/Profile";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import Quioze from "./Components/TestQuize/Quioze";
import CardProduct from "./Components/Product/CardProduct";
import Howtogrow from "./Components/Howtogrow";
import Helpandfaq from "./Components/Helpandfaq";
import Bloagepages from "./Components/Blogs/Bloagepages";
import Blogdetails from "./Components/Blogs/Blogdetails";
import Shop2 from "./Components/Shops/Shop2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<ProtectedRoute element={<Login />} redirectTo="/" />}
          />
          <Route
            path="/register"
            element={<ProtectedRoute element={<Signup />} redirectTo="/" />}
          />
          <Route
            element={
              <>
                <Header /> <Outlet />
                <Feature />
                <Footer />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop2 />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="Product/:id" element={<ProductDetails />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/quize" element={<Quioze />} />
            <Route path="/Card" element={<CardProduct />} />
            <Route path="/howtogrow" element={<Howtogrow />} />
            <Route path="/Faq" element={<Helpandfaq />} />
            <Route path="/Blog" element={<Bloagepages />} />
            <Route path="/blog-details" element={<Blogdetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
