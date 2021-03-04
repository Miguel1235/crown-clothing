import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import "./cartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
    <div className = "cartDropdown">
      {console.log(cartItems)}
      <div className = "cartItems"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
;
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
});
export default connect(mapStateToProps)(CartDropdown);