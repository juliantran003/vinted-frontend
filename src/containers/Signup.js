import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = ({ setUser, userToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        username: username,
        email: email,
        password: password,
      }
    );
    const token = response.data.token;

    setUser(token);
    history.push("/");
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>

        <input
          type="text"
          value={username}
          placeholder="Nom d'utilisateur"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div class="newsletter">
          <input type="checkbox" />
          <p>S'inscrire à notre newsletter</p>
        </div>
        <p className="terms">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Cofidentialité de Vinted. Je confirme avoir
          au moins 18 ans.
        </p>

        <button type="submit">S'inscrire</button>
        <Link className="link-login-signup" to="/login">
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
