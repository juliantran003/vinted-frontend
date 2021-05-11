import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import black from "../img/black.jpg";

const Offer = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      history.push("/payment", {
        title: data.offers.map((offers, index) => {
          return id === offers._id && offers.product_name;
        }),
        amount: data.offers.map((offers, index) => {
          return id === offers._id && offers.product_price.toFixed(2);
        }),
        id: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div>
      {data.offers.map((offers, index) => {
        return (
          id === offers._id && (
            <div className="offer-body">
              <div className="offer">
                <img
                  className="product-offer"
                  src={
                    offers.product_image.url
                      ? offers.product_image.url
                      : offers.product_pictures.map(
                          (product_pictures, index) => {
                            return product_pictures.url
                              ? product_pictures.url
                              : product_pictures.secure_url;
                          }
                        )
                  }
                  alt=""
                />
                <div className="offer-box">
                  <div className="offer-description">
                    <h2>{offers.product_price.toFixed(2)} €</h2>
                    <div className="flex">
                      <div className="elements">
                        {offers.product_details.map(
                          (product_details, index) => {
                            return (
                              <div>
                                {product_details.MARQUE && <p>MARQUE</p>}
                                {product_details.TAILLE && <p>TAILLE</p>}
                                {product_details.ÉTAT && <p>ÉTAT</p>}
                                {product_details.COULEUR && <p>COULEUR</p>}
                                {product_details.EMPLACEMENT && (
                                  <p>EMPLACEMENT</p>
                                )}
                                {product_details["MODES DE PAIEMENT"] && (
                                  <p>MODES DE PAIEMENT</p>
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div className="elements-info">
                        {offers.product_details.map(
                          (product_details, index) => {
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
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="offer-user">
                    <h2>{offers.product_name}</h2>
                    <p>{offers.product_description}</p>
                    <div className="user-offer">
                      <img
                        className="avatar-offer"
                        src={
                          offers.owner.account.avatar === undefined
                            ? black
                            : offers.owner.account.avatar.url
                        }
                        alt=""
                      />
                      {offers.owner.account.username}
                    </div>

                    <button onClick={handleSubmit}>Acheter</button>
                  </div>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Offer;
