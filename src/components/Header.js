import logo from "../img/Vinted_logo.png";

const Header = (props) => {
  return (
    <div>
      {" "}
      <img src={logo} alt={logo} className="logo-vinted" />
      <input type="text" />
      <button>S'inscrire</button>
      <button>Se connecter</button>
      <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
