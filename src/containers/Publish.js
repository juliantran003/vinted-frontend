import { useState } from "react";
import { Redirect } from "react-router-dom";
import Dropzone from "react-dropzone";
import axios from "axios";

const Publish = ({ userToken }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState();
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();

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

        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );

      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {userToken ? (
        <div className="offer-body-2">
          <div className="success-box">
            <div className="publish">
              <form className="form-container " onSubmit={handleSubmit}>
                <h1>Publier une annonce</h1>
                <h3>Titre</h3>
                <input
                  type="text"
                  placeholder="ex : Pantalon Denim Zara"
                  onChange={(event) => setTitle(event.target.value)}
                />
                <h3>Description</h3>
                <input
                  type="text"
                  placeholder="ex : Jeans..."
                  onChange={(event) => setDescription(event.target.value)}
                />
                <h3>Prix</h3>
                <input
                  type="number"
                  placeholder="ex : 25"
                  onChange={(event) => setPrice(event.target.value)}
                />
                <h3>État</h3>
                <input
                  type="text"
                  placeholder="ex : Usé, neuf..."
                  onChange={(event) => setCondition(event.target.value)}
                />
                <h3>Marque</h3>
                <input
                  type="text"
                  placeholder="ex: Nike, Adidas..."
                  onChange={(event) => setBrand(event.target.value)}
                />
                <h3>Taille</h3>
                <input
                  type="number"
                  placeholder="ex : 44"
                  onChange={(event) => setSize(event.target.value)}
                />
                <h3>Couleur</h3>
                <input
                  type="text"
                  placeholder="ex : Bleu"
                  onChange={(event) => setColor(event.target.value)}
                />
                <h3>Image</h3>

                <Dropzone
                  onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()} className="dropzone">
                        <input
                          {...getInputProps()}
                          onChange={(event) =>
                            setPicture(event.target.files[0])
                          }
                        />
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>

                <button type="submit">Publier</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Publish;
