import { useParams } from "react-router-dom";
import { Baseurl } from "../Confige";
import { useEffect, useState } from "react";
import { format } from "date-fns";

/* eslint-disable react/no-unescaped-entities */
function Blogdetails() {
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${Baseurl}/api/v1/blog/singleblogs?id=${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setBlogData(data.data); // Assuming data is structured as { success: true, data: {...} }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchData();
  }, [id]);
  if (!blogData) return null;
  console.log(blogData);
  return (
    <>
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
                  <span className="tp-breadcrumb__active">
                    <a href="index.html">Lifestyle </a>
                  </span>
                  <span className="dvdr">/</span>
                  <span>{blogData.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-details-area pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-blog-details__thumb">
                <img src={blogData.thumbnail} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 col-lg-12">
              <div className="tp-blog-details__wrapper">
                <div className="tp-blog-details__content">
                  <div className="tpblog__entry-wap mb-5">
                    <span className="cat-links">
                      <a href="shop-details.html">Lifestyle</a>
                    </span>
                    <span className="author-by">
                      <a href="#">{blogData.author}</a>
                    </span>
                    <span className="post-data">
                      <a href="#">
                        {format(new Date(blogData.createdAt), "MMM dd, yyyy")}
                      </a>
                    </span>
                  </div>
                  <h2 className="tp-blog-details__title mb-25">
                    The Best Great Benefits Of Fresh Beef For Women's Health
                  </h2>
                  <p>
                    These are the people who make your life easier. Large tiles
                    were arranged on the counter top plate near the window of
                    the living room, they were connected to the kitchen. The
                    perfect way to enjoy brewing tea on low hanging fruit to
                    identify. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                  <p>
                    Large tiles were arranged on the counter top plate near the
                    window of the living room, they were connected to the
                    kitchen counter through the opening in the existing building
                    wall. For me, the most important part of improving at
                    photography has been sharing it. Sign up for an Exposure
                    account, or post regularly to Tumblr, or both. Tell people
                    you’re trying to get better at photography.
                  </p>
                  <div className="tp-blog-details__quation pt-15 pb-40 text-center">
                    <i>
                      “ The disk at the bottom of the bowl can be turned
                      counterclockwise to <br /> drain water when washing
                      vegetables and it can be turned. ”{" "}
                    </i>
                  </div>
                  <p>
                    Form is an armless modern with a minimalistic expression.
                    With a simple and contemporary design form Foody has a soft
                    and welcoming silhouette and a distinctly residential look.
                    The legs appear almost as if they are growing out of the
                    shell. This gives the design flexibility and makes it
                    possible to vary the frame. Unika is a mouth blown an series
                    of small, glass pendant lamps, originally designed for the
                    restaurant.
                  </p>
                </div>
                <div className="tp-blog-details__img">
                  <div className="row">
                    {blogData.gallery.map((image, index) => (
                      <div className="col-lg-6 col-md-6" key={index}>
                        <div className="tp-blog-details__img-item mb-30">
                          <img src={image} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tp-blog-details__content">
                  <p>
                    Staying locked up in four walls have restricted our
                    thinking. I feel like our limited thinking echoes through
                    this wall. We are so used to schedules and predictable life
                    that we have successfully suppressed our creative side. When
                    you step out of these four walls on a peaceful morning, you
                    realize how much nature has to offer to you. Its boundless.
                    Your thoughts, worries, deadlines won’t resonate here.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione sequi nesciunt.
                    They’ll come on photo walks with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogdetails;
