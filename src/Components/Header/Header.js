import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/crown.svg";
import { auth } from "../../Firebase/FirebaseUtils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropDown";

const Header = ({ currentUser, isCartHidden}) => {
  return (
    <div className="header">
      <Link className="logoContainer" to="/">
        <img className="logo" src={Logo} alt="Logo"></img>
      </Link>
      <div className="optionsMenu">
        <Link className="optionMenu" to="/shop">
          SHOP
        </Link>
        <Link className="optionMenu" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <Link className="optionMenu" to="/" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="optionMenu" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  isCartHidden: hidden,
});
export default connect(mapStateToProps)(Header);
