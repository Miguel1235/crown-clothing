import "./Collection.scss";
import CollectionItem from "../../Components/CollectionItem/CollectionItem.js";
import { selectCollection } from "../../Redux/shop/shopSelector";
import { connect } from "react-redux";

const Collection = ({ collectionName, collection: { title, items } }) => {
  return (
    <div className="collection">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.collectionName)(state),
});

export default connect(mapStateToProps)(Collection);
