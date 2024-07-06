import { Link } from "react-alice-carousel";
import sucessimg from "../../assets/Images/Success.svg";
function Successpage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img src={sucessimg} alt="" />
      </Link>
    </div>
  );
}

export default Successpage;
