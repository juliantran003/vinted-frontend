import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState();
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        // params,
        formData,
        {
          headers: {
            // authorization: `Bearer ${token}`,
          },
        }
      );

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form className="form-container" onSumbit={handleSubmit}>
        <h3>Title</h3>
        <input
          type="text"
          placeholder="e.g. Zara denim trousers"
          onChange={(event) => setTitle(event.target.value)}
        />
        <h3>Description</h3>
        <input
          type="text"
          placeholder="e.g. Black jeans..."
          onChange={(event) => setDescription(event.target.value)}
        />
        <h3>Price</h3>
        <input
          type="number"
          placeholder="e.g. 25"
          onChange={(event) => setPrice(event.target.value)}
        />
        <h3>Condition</h3>
        <input
          type="text"
          placeholder="Used, new..."
          onChange={(event) => setCondition(event.target.value)}
        />
        <h3>Brand</h3>
        <input
          type="text"
          placeholder="Nike, Adidas..."
          onChange={(event) => setBrand(event.target.value)}
        />
        <h3>Size</h3>
        <input
          type="number"
          placeholder="e.g. 44"
          onChange={(event) => setSize(event.target.value)}
        />
        <h3>Color</h3>
        <input
          type="text"
          placeholder="e.g. Blue"
          onChange={(event) => setColor(event.target.value)}
        />
        <h3>Picture</h3>
        <input
          type="file"
          onChange={(event) => setPicture(event.target.files[0])}
        />
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default Publish;
