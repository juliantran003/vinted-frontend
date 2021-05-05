import logo from "../img/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      {" "}
      <Link to="/">
        <img src={logo} alt={logo} className="logo-vinted" />
      </Link>
      <input type="text" />
      <button>S'inscrire</button>
      <button>Se connecter</button>
      <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
