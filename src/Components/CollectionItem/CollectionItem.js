import "./CollectionItem.scss";
const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="collectionItem">
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collectionFooter">
        <span className="itemName">{name}</span>
        <span className="priceItem">{price}</span>
      </div>
    </div>
  );
};
export default CollectionItem;
