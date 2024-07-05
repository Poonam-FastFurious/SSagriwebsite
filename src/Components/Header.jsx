/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo ssagri.png";
import { useEffect, useState } from "react";
import images from "../assets/Images/1.png";
import { Baseurl } from "./Confige";
import axios from "axios";
import { IoIosLogOut } from "react-icons/io";
function Header() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    fetch(Baseurl + "/api/v1/category/allcategory")
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
  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("userid");

      if (!accessToken || !userId) {
        throw new Error("User information not found in local storage.");
      }

      const response = await axios.post(
        Baseurl + "/api/v1/user/logout",
        { id: userId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userid");
        localStorage.removeItem("user"); // Remove user info if stored
        localStorage.removeItem("refreshToken");

        document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        // Redirect to login page or perform any other actions
        window.location.href = "/login"; // Example: redirect to login page
      } else {
        console.error("Failed to log out:", response);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  const handleSearchToggle = () => {
    setIsSearchBarOpened(true);
  };

  const handleClose = () => {
    setIsSearchBarOpened(false);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        id="header-sticky"
        className="header__main-area d-none d-xl-block"
        style={
          isScrolled
            ? {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                zIndex: "1000",
                backgroundColor: "white",
              }
            : {}
        }
      >
        <div className="container">
          <div className="header__for-megamenu p-relative">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <div className="header__logo">
                  <Link to="/" onClick={scrollToTop}>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="header__menu main-menu ">
                  <nav id="mobile-menu">
                    <ul>
                      <li className=" has-homemenu">
                        <Link to="/" onClick={scrollToTop}>
                          Home
                        </Link>
                      </li>
                      <li className="has-dropdown has-megamenu">
                        <Link to="/shop" onClick={scrollToTop}>
                          Shop
                        </Link>
                        <ul
                          className="sub-menu mega-menu"
                          data-background={images}
                        >
                          <li>
                            <Link className="mega-menu-title">
                              {categories.map((title, index) => (
                                <li key={index}>{title}</li>
                              ))}
                            </Link>
                            <ul>
                              {categories.map((title, index) => (
                                <li key={index}>
                                  <Link to="/shop" onClick={scrollToTop}>
                                    {title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="#">
                        <Link to="/quize" onClick={scrollToTop}>
                          Take the test
                        </Link>
                      </li>
                      <li className="has-dropdown">
                        <Link to="#" onClick={scrollToTop}>
                          Suport
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/howtogrow" onClick={scrollToTop}>
                              Istruction
                            </Link>
                          </li>
                          <li>
                            <Link to="/Faq" onClick={scrollToTop}>
                              Help & FAQ
                            </Link>
                          </li>
                          <li>
                            <Link to="/Blog" onClick={scrollToTop}>
                              Blogs
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/AboutUs" onClick={scrollToTop}>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="contact" onClick={scrollToTop}>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="header__info d-flex align-items-center">
                  <div className="header__info-search tpcolor__purple ml-10">
                    <button
                      className="tp-search-toggle"
                      onClick={handleSearchToggle}
                    >
                      <i className="icon-search"></i>
                    </button>
                  </div>

                  <div className="header__info-wishlist tpcolor__greenish ml-10">
                    <Link to="/wishlist">
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

      <div
        className={`tpsearchbar tp-sidebar-area ${
          isSearchBarOpened ? "tp-searchbar-opened" : ""
        }`}
      >
        <button className="tpsearchbar__close" onClick={handleClose}>
          <i className="icon-x"></i>
        </button>
        <div className="search-wrap text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6 pt-40 ">
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
                <button
                  className="tp-menu-toggle"
                  onClick={handleToggleSidebar}
                >
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
                    <Link to="/cart">
                      <i>
                        <img
                          src="https://html.hixstudio.net/orfarm/assets/img/icon/cart-1.svg"
                          alt=""
                        />
                      </i>
                    </Link>
                    <span>5</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`tpsideinfo ${isSidebarOpen ? "tp-sidebar-opened" : ""}`}>
        <button className="tpsideinfo__close" onClick={handleCloseSidebar}>
          Close<i className="fal fa-times ml-10"></i>
        </button>
        <div className="tpsideinfo__search text-center pt-35">
          <span className="tpsideinfo__search-title mb-20">
            What Are You Looking For?
          </span>
          <form action="#">
            <input type="text" placeholder="Search Products..." />
            <button>
              <i className="icon-search"></i>
            </button>
          </form>
        </div>
        <div className="tpsideinfo__nabtab">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Menu
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Categories
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <div className="mobile-menu"></div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <div className="tpsidebar-categories">
                <ul>
                  <li>
                    <Link to="#">Organics</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tpsideinfo__wishlist-link">
          <Link to="/" target="_parent">
            Home
          </Link>
        </div>
        <div className="tpsideinfo__wishlist-link">
          <Link to="/AboutUs" target="_parent">
            AboutUs
          </Link>
        </div>
        <div className="tpsideinfo__wishlist-link">
          <Link to="/contact" target="_parent">
            ContactUs
          </Link>
        </div>
        <div className="tpsideinfo__account-link">
          <Link to="/login">
            <i className="icon-user icons"></i> Login / Register
          </Link>
        </div>
        <div className="tpsideinfo__wishlist-link">
          <Link to="/wishlist" target="_parent">
            <i className="icon-heart"></i> Wishlist
          </Link>
        </div>

        <div className="tpsideinfo__wishlist-link pl-4">
          <Link to="#" onClick={handleLogout}>
            <IoIosLogOut />
            <span style={{ paddingLeft: "10px" }}>Logout</span>
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="body-overlay opened" onClick={handleCloseSidebar}></div>
      )}
    </>
  );
}

export default Header;
