import "./CollectionOverview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectCollectionForPreview} from "../../Redux/shop/shopSelector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collectionOverview">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
