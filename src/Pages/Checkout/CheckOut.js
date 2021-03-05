import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../Redux/cart/cartSelector.js";
import "./checkOut.scss";
import CheckOutItem from "../../Components/CheckOutItem/CheckOutItem.js";

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
        cartItems.map(item=> <CheckOutItem item={item}/>)
      }
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};
const mapStateToPropos = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  }
);

export default connect(mapStateToPropos)(checkOut);