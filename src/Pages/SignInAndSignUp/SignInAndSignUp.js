import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import "./SignInAndSignUp.scss";

const SignInAndSignUp = () => {
  return (
    <div className="signInAndSignUp">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInAndSignUp;