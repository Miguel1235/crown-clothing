import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../Redux/cart/cartSelector.js";
import CartItem from "../CartItem/CartItem.js";
import CustomButton from "../CustomButton/CustomButton";
import {toggleCart} from "../../Redux/cart/cartActions.js";
import "./cartDropdown.scss";

const CartDropdown = ({ cartItems, history ,dispatch}) => (
    <div className = "cartDropdown">
      <div className = "cartItems">
        {
          cartItems.length ? cartItems.map(item => <CartItem key = {item.id} item = {item}/>) :
            <span className = "emptyMessage">Ups there are no items in the cart</span>
        }
      </div>
      <CustomButton onClick = {() => {
        dispatch(toggleCart())
        history.push("/checkout")
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
;
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdown));