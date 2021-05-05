import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Offer = ({ data }) => {
  const { id } = useParams();

  return (
    <div>
      <Header />

      {data.map((offers, index) => {
        return (
          id === offers._id && (
            <div className="offer">
              <img
                className="product"
                src={offers.product_pictures.map((product_pictures, index) => {
                  return product_pictures.url;
                })}
                alt=""
              />
              <div className="offer-description">
                <h2>{offers.product_price.toFixed(2)} €</h2>
                <div className="flex">
                  <div>
                    {offers.product_details.map((product_details, index) => {
                      return (
                        <div>
                          {product_details.MARQUE && <p>MARQUE</p>}
                          {product_details.TAILLE && <p>TAILLE</p>}
                          {product_details.ÉTAT && <p>ÉTAT</p>}
                          {product_details.COULEUR && <p>COULEUR</p>}
                          {product_details.EMPLACEMENT && <p>EMPLACEMENT</p>}
                          {product_details["MODES DE PAIEMENT"] && (
                            <p>MODES DE PAIEMENT</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {offers.product_details.map((product_details, index) => {
                      return (
                        <div>
                          <p>{product_details.MARQUE}</p>
                          <p>{product_details.TAILLE}</p>
                          <p>{product_details.ÉTAT}</p>
                          <p>{product_details.COULEUR}</p>
                          <p>{product_details.EMPLACEMENT}</p>
                          <p>{product_details["MODES DE PAIEMENT"]}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <h2>{offers.product_name}</h2>
                <p>{offers.product_description}</p>
                <div>
                  <img
                    className="avatar"
                    src={offers.owner.account.avatar.url}
                    alt=""
                  />
                  {offers.owner.account.username}
                </div>
                <button>Acheter</button>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Offer;
