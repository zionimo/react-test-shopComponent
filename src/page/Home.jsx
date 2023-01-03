import "../css/Tshirt.css";
import mainImg from "../img/메인.jpg";
import Tshirt from "../components/Tshirt";

const Home = () => {
  return (
    <div className="main">
      <img src={mainImg} alt="" className="main-img" />
      <a href="">더보기</a>
      <Tshirt className="component" />
    </div>
  );
};

export default Home;
