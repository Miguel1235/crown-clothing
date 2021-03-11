import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../Components/CheckOutItem/CheckOutItem.js";
import { selectCartItems, selectCartTotal } from "../../Redux/cart/cartSelector.js";
import  StripeButton from "../../Components/StripeButton/StripeButton"
import "./checkOut.scss";

const checkOut = ({ total, cartItems }) => {
  return (
    <div className = "checkOutPage">
      <div className = "checkOutHeader">
        <div className = "headerBlock">
          <span>Product</span>
        </div>
        <div className = "headerBlock">
          <span>Description</span>
        </div>
        <div className = "headerBlock">
          <span>Price</span>
        </div>
        <div className = "headerBlock">
          <span>Quantity</span>
        </div>
        <div className = "headerBlock">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item => <CheckOutItem key = {item.id} item = {item}/>)
      }
      <div className = "total">
        <span>Total: ${total}</span>
        <StripeButton price={total}/>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  }
);

export default connect(mapStateToProps)(checkOut);