import "./CustomButton.scss";
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`customButton ${isGoogleSignIn ? "googleSignIn" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
