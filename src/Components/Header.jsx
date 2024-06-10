/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo ssagri.png";
import { useEffect, useState } from "react";

function Header() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");

    document.cookie =
      "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    setIsUserLoggedIn(false);

    navigate("/login");
  };
  useEffect(() => {
    fetch(
      "https://ssagriculturebackend.onrender.com/api/v1/category/allcategory"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Extracting only the titles from the data
        const categoryTitles = data.data.map((category) => category.title);
        setCategories(categoryTitles.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div id="header-sticky" className="header__main-area d-none d-xl-block">
        <div className="container">
          <div className="header__for-megamenu p-relative">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <div className="header__logo">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="header__menu main-menu ">
                  <nav id="mobile-menu">
                    <ul>
                      <li className=" has-homemenu">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="has-dropdown has-megamenu">
                        <Link to="/shop">Shop</Link>
                        <ul
                          className="sub-menu mega-menu"
                          data-background="https://html.hixstudio.net/orfarm/assets/img/banner/mega-menu-shop-1.jpg"
                        >
                          <li>
                            <Link className="mega-menu-title">
                              {categories.map((title, index) => (
                                <li key={index}>{title}</li>
                              ))}
                            </Link>
                            <ul>
                              <li>
                                <Link to="/shop">Radish Mix Greens</Link>
                              </li>
                              <li>
                                <Link to="/shop">Red Amaranth</Link>
                              </li>
                              <li>
                                <Link to="/shop">Immunity Booster Pack</Link>
                              </li>
                              <li>
                                <Link to="/shop">Memek</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="#">
                        <Link to="/quize">Take the test</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link to="#">Suport</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/howtogrow">Istruction</Link>
                          </li>
                          <li>
                            <Link to="/Faq">Help & FAQ</Link>
                          </li>
                          <li>
                            <Link to="/Blog">Blogs</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/AboutUs">About Us</Link>
                      </li>
                      <li>
                        <Link to="contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="header__info d-flex align-items-center">
                  <div className="header__info-search tpcolor__purple ml-10">
                    <button className="tp-search-toggle">
                      <i className="icon-search"></i>
                    </button>
                  </div>

                  <div className="header__info-wishlist tpcolor__greenish ml-10">
                    <Link to="wishlist">
                      <i className="icon-heart icons"></i>
                    </Link>
                  </div>
                  <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                    <button>
                      <i>
                        <Link to="/Cart">
                          <img
                            src="https://html.hixstudio.net/orfarm/assets/img/icon/cart-1.svg"
                            alt=""
                          />
                        </Link>
                      </i>
                      <span>5</span>
                    </button>
                  </div>
                  <div className="header__info-user tpcolor__yellow ml-10">
                    {isUserLoggedIn ? (
                      <Link to="#">
                        <div className="header__lang ">
                          <i className="icon-user mt-3"></i>
                          <ul className="header__lang-submenu">
                            <li>
                              <Link to="/Profile">Profile</Link>
                            </li>

                            <li>
                              <Link to="#">Order</Link>
                            </li>
                            <li>
                              <Link to="#">Support</Link>
                            </li>
                            <li>
                              <Link to="#" onClick={handleLogout}>
                                Logout
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <p> </p>
                      </Link>
                    ) : (
                      <span className="t">
                        <Link to="/login"> 👤Login</Link>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tpsearchbar tp-sidebar-area">
        <button className="tpsearchbar__close">
          <i className="icon-x"></i>
        </button>
        <div className="search-wrap text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6 pt-100 pb-100">
                <h2 className="tpsearchbar__title">
                  What Are You Looking For?
                </h2>
                <div className="tpsearchbar__form">
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search Product..."
                    />
                    <button className="tpsearchbar__search-btn">
                      <i className="icon-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="header-sticky-2" className="tpmobile-menu d-xl-none">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-3 col-sm-3">
              <div className="mobile-menu-icon">
                <button className="tp-menu-toggle">
                  <i className="icon-menu1"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-6 col-sm-4">
              <div className="header__logo text-center">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-3 col-sm-5">
              <div className="header__info d-flex align-items-center">
                <div className="header__info-search tpcolor__purple ml-10 d-none d-sm-block">
                  <button className="tp-search-toggle">
                    <i className="icon-search"></i>
                  </button>
                </div>
                <div className="header__info-user tpcolor__yellow ml-10 d-none d-sm-block">
                  <Link to="log-in">
                    <i className="icon-user"></i>
                  </Link>
                </div>
                <div className="header__info-wishlist tpcolor__greenish ml-10 d-none d-sm-block">
                  <Link to="wishlist">
                    <i className="icon-heart icons"></i>
                  </Link>
                </div>
                <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                  <button>
                    <i>
                      <img
                        src="https://html.hixstudio.net/orfarm/assets/img/icon/cart-1.svg"
                        alt=""
                      />
                    </i>
                    <span>5</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
