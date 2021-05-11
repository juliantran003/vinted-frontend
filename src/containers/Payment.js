import { Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const Payment = ({ userToken }) => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  const location = useLocation();
  const { title, amount, id } = location.state;

  return (
    <div>
      {userToken ? (
        <div className="offer-body">
          <div className="offer">
            <div className="payment-item">
              <h1>Récapitulatif de commande</h1>
              <p>{title}</p>
              <p>{amount} €</p>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm title={title} amount={amount} id={id} />
            </Elements>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Payment;
