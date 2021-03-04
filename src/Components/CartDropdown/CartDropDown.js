import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem.js";
import CustomButton from "../CustomButton/CustomButton";
import "./cartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
    <div className = "cartDropdown">
      <div className = "cartItems">
        {
          cartItems.map(item => <CartItem key={item.id} item={item}/> )
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
;
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
});
export default connect(mapStateToProps)(CartDropdown);