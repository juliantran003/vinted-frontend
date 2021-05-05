import logo from "../img/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt={logo} className="logo-vinted" />
      </Link>
      <div className="header-input">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Rechercher des articles" />
      </div>

      <div>
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </div>

      <button id="sell">Vends tes articles</button>
    </div>
  );
};

export default Header;
