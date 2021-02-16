import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp";
import {auth, createUserProfileDocument} from "./Firebase/FirebaseUtils";
import {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChange();
        return () => unsubscribe();
    }, []);
    const onAuthStateChange = () => {
        return auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({id: snapShot.id, ...snapShot.data()});
                });
            }
            setCurrentUser(null);
        });
    };

    return (<div className="center">
        <Header currentUser={currentUser}/>
        <Switch>
            <Route path="/" exact strict>
                <HomePage/>
            </Route>
            <Route path="/shop" exact strict>
                <ShopPage/>
            </Route>
            <Route path="/signIn" exact strict>
                <SignInAndSignUp/>
            </Route>
        </Switch>
    </div>);
};

export default App;