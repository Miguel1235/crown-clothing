import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection.js";
import { Route, useRouteMatch } from "react-router-dom";

const ShopPage = () => {
  const match = useRouteMatch("/shop/:collectionId");
  return (
    <div>
      <Route exact path="/shop">
        <CollectionOverview />
      </Route>
      {
        match?
      <Route>
        <Collection collectionName={match.params.collectionId} />
      </Route>
      :null
      }
    </div>
  );
};
export default ShopPage;
