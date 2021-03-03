import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/crown.svg";
import {auth} from "../../Firebase/FirebaseUtils"
import {connect} from "react-redux"

const Header = ({ currentUser }) => {
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
          <Link className="optionMenu" to="/" onClick={()=>auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="optionMenu" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>({
    currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Header);
