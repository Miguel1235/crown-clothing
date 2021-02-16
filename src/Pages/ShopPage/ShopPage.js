import react, { useState } from "react";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import SHOP_DATA from "./ShopData";
const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div>
      {collections.map(({ id, ...otherCollectionsProps}) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};
export default ShopPage;
