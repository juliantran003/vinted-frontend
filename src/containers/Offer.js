import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Offer = ({ data }) => {
  const { id } = useParams();

  return (
    <div>
      <Header />

      {data.map((offers, index) => {
        return (
          <img
            src={offers.product_pictures.map((product_pictures, index) => {
              return product_pictures.url;
            })}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default Offer;
