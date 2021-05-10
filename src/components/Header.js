import logo from "../img/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt={logo} className="logo-vinted" />
      </Link>
      <div className="header-input">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Rechercher des articles" />
      </div>

      {userToken ? (
        <button id="disconnect" onClick={() => setUser(null)}>
          Se déconnecter
        </button>
      ) : (
        <>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </>
      )}
      <div>
        <Link to="/publish">
          <button id="sell">Vends tes articles</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
