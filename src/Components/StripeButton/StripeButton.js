import StripeCheckout from "react-stripe-checkout";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey =
    "pk_test_51ITeJ3Jixs8DXtX7DmrbbkeTFsmC01VLorEBI7Ph0nxEOWphPpYMjGtbAj74bzilRUseH7r9ommcW6hKaM25Rlti00j0v5ugZG";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CU<.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};
export default StripeButton;
