import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Item from "../components/Item";
import axios from "axios";

const Home = (props) => {
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
      <Header />
      <div className="all-items">
        {data.offers.map((offers, index) => {
          return (
            <Item
              avatar={offers.owner.account.avatar.url}
              username={offers.owner.account.username}
              image={offers.product_pictures.map((product_pictures, index) => {
                return product_pictures.url;
              })}
              price={offers.product_price.toFixed(2)}
              size={offers.product_details.map((product_details, index) => {
                return product_details.TAILLE;
              })}
              brand={offers.product_details.map((product_details, index) => {
                return product_details.MARQUE;
              })}
            />
          );
        })}
      </div>
      <Link to="/offer">Offer</Link>
    </div>
  );
};

export default Home;
