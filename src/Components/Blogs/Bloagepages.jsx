import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Baseurl } from "../Confige";
import { format } from "date-fns";

function Bloagepages() {
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
  }, []);
  return (
    <>
      <section className="blog-area pt-80">
        <div className="container">
          <div className="row">
            {Blogs.map((blog, index) => (
              <div className="col-lg-4" key={index}>
                <div className="tpblog__item tpblog__item-2 mb-20">
                  <div className="tpblog__thumb fix">
                    <Link to="/blog-details">
                      <img src={blog.thumbnail} alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <Link to="#">Lifestyle</Link>
                      </span>
                      <span className="author-by">
                        <Link to="#">{blog.author}</Link>
                      </span>
                      <span className="post-data">
                        <Link to="#">
                          {format(new Date(blog.createdAt), "MMM dd, yyyy")}
                        </Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link to={`/blogdetails/${blog._id}`}>{blog.title}</Link>
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
      </section>
    </>
  );
}

export default Bloagepages;
