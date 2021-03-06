import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const CheckoutForm = ({ amount, title, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const protection = 0.4;
  const port = 0.8;

  const [paymentState, setPaymentState] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElements = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElements, {
        name: id,
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: parseFloat(amount) * 100,
        }
      );
      if (response.status === 200) {
        setPaymentState(true);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return !paymentState ? (
    <div className="payment-container">
      <form onSubmit={handleSubmit}>
        <h1>Paiement</h1>
        <div className="total">
          <span>Commande</span>
          <span>{amount} €</span>
        </div>
        <div className="total">
          <span>Frais protection Acheteurs</span>
          <span>{protection.toFixed(2)} €</span>
        </div>
        <div className="total">
          <span>Frais de port</span>
          <span>{port.toFixed(2)} €</span>
        </div>
        <div className="line"></div>
        <div className="total">
          <span>Total</span>
          <span> {amount} €</span>
        </div>
        <div className="line"></div>
        <CardElement />
        <input type="submit" value="Payer" />
      </form>
    </div>
  ) : (
    <Redirect to="/success" />
  );
};

export default CheckoutForm;
