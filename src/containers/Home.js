import { Link } from "react-router-dom";
import Header from "../components/Header";
import Item from "../components/Item";

const Home = ({ data }) => {
  return (
    <div>
      <Header />
      <div className="hero"></div>

      <Item data={data.offers} />

      <Link to="/offer">Offer</Link>
    </div>
  );
};

export default Home;
