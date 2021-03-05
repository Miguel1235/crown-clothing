import { connect } from "react-redux";

import Icon from "../../Assets/shopping-bag.svg";
import { toggleCart } from "../../Redux/cart/cartActions";
import "./CartIcon.scss";

import {selectCartItemsCount} from "../../Redux/cart/cartSelector.js";

const CartIcon = ({ toggleCart, quantity}) => (
  <div className = "cartIcon" onClick = {toggleCart}>
    <img className = "shoppingIcon" src = {Icon} alt = "cartIcon"/>
    <span className = "itemCount">{quantity}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});
const mapStateToProps = (state) => ({
  quantity: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);