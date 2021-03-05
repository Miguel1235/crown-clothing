import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import { auth, createUserProfileDocument } from "./Firebase/FirebaseUtils";
import CheckOut from "./Pages/Checkout/CheckOut.js";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp";
import { setCurrentUser } from "./Redux/user/userActions";
import { selectCurrentUser } from "./Redux/user/userSelector.js";

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => unsubscribe();
  }, []);
  const onAuthStateChange = () => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser(user);
    });
  };

  return (
    <div className = "center">
      <Header/>
      <Switch>
        <Route path = "/" exact strict>
          <HomePage/>
        </Route>
        <Route path = "/shop" exact strict>
          <ShopPage/>
        </Route>
        <Route path = "/signIn" exact strict>
          {currentUser ? <Redirect to = "/"/> : <SignInAndSignUp/>}
        </Route>
        <Route path = "/checkOut" exact strict>
          <CheckOut/>
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);