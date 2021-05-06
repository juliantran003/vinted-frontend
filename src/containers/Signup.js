import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = ({ setUser }) => {
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
    console.log(response.data);
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
        <button type="submit">S'inscrire</button>
        <Link className="link-login-signup" to="/login">
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
