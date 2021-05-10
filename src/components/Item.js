import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <div className="all-items">
      {data.map((offers, index) => {
        return (
          <div className="individual-items">
            <div className="user">
              <img
                className="avatar"
                src={
                  offers.owner.account.avatar === undefined
                    ? ""
                    : offers.owner.account.avatar.url
                }
                alt=""
              />
              {offers.owner.account.username}
            </div>
            <Link className="link" to={`/offer/${offers._id}`}>
              <img
                className="product"
                src={offers.product_pictures.map((product_pictures, index) => {
                  return product_pictures.url;
                })}
                alt=""
              />
              <div className="individual-items-description">
                <p> {offers.product_price.toFixed(2)} €</p>
                <p>
                  {offers.product_details.map((product_details, index) => {
                    return product_details.TAILLE;
                  })}
                </p>
                <p>
                  {offers.product_details.map((product_details, index) => {
                    return product_details.MARQUE;
                  })}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
