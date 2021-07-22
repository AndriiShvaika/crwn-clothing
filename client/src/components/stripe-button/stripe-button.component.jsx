import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JCjJYCXC8K5iXgB45cK8lym6KM19C64iYLQqoK2smg7w8fJTfdDLi7iDaE8AX0w8L6LtaEM2TVHKYcSjflgSemn00fTDAZY3L";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment succesful");
      })
      .catch((error) => {
        console.log("Payment error:", JSON.parse(error));
        alert(
          "There was an issue with your payment. \nPlease make sure you used the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
