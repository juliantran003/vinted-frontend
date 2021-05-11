import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import black from "../img/black.jpg";

const Item = () => {
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
    <div className="all-items">
      {data.offers.map((offers, index) => {
        return (
          <div className="individual-items">
            <div className="user">
              <img
                className="avatar"
                src={
                  offers.owner.account.avatar === undefined
                    ? black
                    : offers.owner.account.avatar.url
                }
                alt=""
              />
              {offers.owner.account.username}
            </div>
            <Link className="link" to={`/offer/${offers._id}`}>
              <img
                className="product"
                src={
                  offers.product_image.url
                    ? offers.product_image.url
                    : offers.product_pictures.map((product_pictures, index) => {
                        return product_pictures.url
                          ? product_pictures.url
                          : product_pictures.secure_url;
                      })
                }
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
