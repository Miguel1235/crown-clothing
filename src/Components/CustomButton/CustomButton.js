import "./CustomButton.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (<button
    className={`customButton ${inverted ? "inverted" : ""} ${isGoogleSignIn ? "googleSignIn" : ""}`}
    {...otherProps}
>
    {children}
</button>);
export default CustomButton;