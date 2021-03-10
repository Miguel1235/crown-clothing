import { connect } from "react-redux";
import { clearItemFromCart,addItem,removeItem } from "../../Redux/cart/cartActions.js";
import "./CheckOutItem.scss";

const CheckOutItem = ({ item, dispatch }) =>
  <div className = "checkOutItem">
    <div className = "imageContainer">
      <img src = {item.imageUrl} alt = {item.name}/>
    </div>
    <span className = "name">{item.name}</span>
    <span className = "quantity">
      <div className = "arrow" onClick={()=>dispatch(removeItem(item))}>
        &#10094;
      </div>
      <span className = "value">
        {console.log("HOLA")}
        {item.quantity}
      </span>

      <div className = "arrow" onClick={()=>dispatch(addItem(item))}>
        &#10095;
      </div>

    </span>
    <span className = "price">{item.price}</span>
    <div className = "removeButton" onClick = {() => dispatch(clearItemFromCart(item))}>
      &#10005;
    </div>
  </div>;

export default connect()(CheckOutItem);