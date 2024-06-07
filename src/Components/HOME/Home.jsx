import Mainbanner from "../Banner/Mainbanner";
import OfferBanner from "../Banner/OfferBanner";
import Blog from "../Blogs/Blog";
import Category from "../Product/Category";
import Testimonial from "../Testimonial";

import Whychooseus from "../Whychooseus";
import Dealofday from "./Dealofday";
import Instagram from "./Instagram";
import LatestProduct from "./LatestProduct";
import StartMicrogreen from "./StartMicrogreen";
import Topproducts from "./Topproducts";

function Home() {
  return (
    <>
      <Mainbanner />
      <Whychooseus />

      <Category />
      <LatestProduct />
      <StartMicrogreen />
      <OfferBanner />
      <Topproducts />
      <Dealofday />
      <Testimonial />
      <Blog />
      <Instagram />
    </>
  );
}

export default Home;
