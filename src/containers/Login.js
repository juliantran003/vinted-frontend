import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      const token = response.data.token;
      if (token) {
        setUser(token);
        history.push("/publish");
      } else {
        console.log("No token");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Se connecter</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Se connecter</button>
        <Link className="link-login-signup" to="/signup">
          <p>Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
