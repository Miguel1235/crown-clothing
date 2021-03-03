import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../Redux/cart/cartActions";

import Icon from "../../Assets/shopping-bag.svg";

const CartIcon = ({ toggleCart }) => (
  <div className="cartIcon" onClick={toggleCart}>
    <img className="shoppingIcon" src={Icon} alt="cartIcon"></img>
    <span className="itemCount">0</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
