import { connect } from "react-redux";
import { addItem } from "../../Redux/cart/cartActions.js";
import CustomButton from "../CustomButton/CustomButton.js";
import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (<div className = "collectionItem">
    <div
      className = "backgroundImage"
      style = {{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className = "collectionFooter">
      <span className = "itemName">{name}</span>
      <span className = "priceItem">{price}</span>
    </div>
    <CustomButton inverted onClick = {() => addItem(item)}>Add to cart</CustomButton>
  </div>);
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);