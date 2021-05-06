import Item from "../components/Item";
import ripped from "../img/ripped.svg";

const Home = ({ data }) => {
  return (
    <div>
      <div className="hero">
        <div className="hero-message">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <button>Commencer à vendre</button>
        </div>
        <img src={ripped} alt="" />
      </div>

      <Item data={data.offers} />
    </div>
  );
};

export default Home;
