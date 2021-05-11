import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="offer-body">
      <div className="success-box">
        <div className="success">
          <h1>Votre paiement a été accepté !</h1>

          <Link to="/">
            <button>Retour à la page d'accueil</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Success;
