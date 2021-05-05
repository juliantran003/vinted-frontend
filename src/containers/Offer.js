import Header from "../components/Header";

const Offer = ({ data }) => {
  return (
    <div>
      <Header />
      {data.map((offers, index) => {
        <div className="offer-display">
          <img src={offers.product_pictures.url} alt="" />
          <div>{offers.product_price.toFixed(2)}</div>
        </div>;
      })}
    </div>
  );
};

export default Offer;
