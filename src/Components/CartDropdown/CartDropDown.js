import "./cartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";

const CartDropdown = () => (
  <div className="cartDropdown">
    <div className="cartItems"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
