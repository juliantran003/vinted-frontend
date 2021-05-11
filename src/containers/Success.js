import { Link } from "react-router-dom";

const Success = () => {
  setTimeout(function () {
    window.location.replace("/");
  }, 5000);
  return (
    <div className="offer-body">
      <div className="success-box">
        <div className="success">
          <h1>Votre paiement a été accepté !</h1>
          <p>
            Vous allez être automatiquement redirigé vers la page d'acceuil dans
            5 secondes...
          </p>

          <Link to="/">
            <button>Retour à la page d'accueil</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Success;
