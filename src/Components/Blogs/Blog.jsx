/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Baseurl } from "../Confige";
import { format } from "date-fns";
import { Link } from "react-router-dom";
function Blog() {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const response = await fetch(Baseurl + "/api/v1/blog/allblogs");
        const data = await response.json();
        setBlogs(data.data); // Adjust this line based on the actual API response structure
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchblogs();
    const tpblogswiper = new Swiper(".tpblog-active", {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  }, []);

  return (
    <>
      <section className="blog-area pt-100 pb-100 grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-35">
                <h4 className="tpsection__sub-title">~ Read Our Blog ~</h4>
                <h4 className="tpsection__title">Our Latest Post</h4>
                <p>
                  The liber tempor cum soluta nobis eleifend option congue
                  doming quod mazim.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-container tpblog-active">
            <div className="swiper-wrapper">
              {Blogs.map((blog, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="tpblog__item">
                    <div className="tpblog__thumb fix">
                      <a href="blog-details.html">
                        <img src={blog.thumbnail} alt="" />
                      </a>
                    </div>
                    <div className="tpblog__wrapper">
                      <div className="tpblog__entry-wap">
                        <span className="cat-links">
                          <a href="shop-details.html">Lifestyle</a>
                        </span>
                        <span className="author-by">
                          <a href="#">{blog.author}</a>
                        </span>
                        <span className="post-data">
                          <a href="#">
                            {format(new Date(blog.createdAt), "MMM dd, yyyy")}
                          </a>
                        </span>
                      </div>
                      <h4 className="tpblog__title">
                        <Link to={`/blogdetails/${blog._id}`}>
                          {blog.title}
                        </Link>
                      </h4>
                      <p>{blog.content.slice(0, 60)}....</p>
                      <div className="tpblog__details">
                        <Link to={`/blogdetails/${blog._id}`}>
                          Continue reading
                          <i className="icon-chevrons-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
