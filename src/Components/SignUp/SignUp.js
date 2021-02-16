import "./SignUp.scss";

import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import {useState} from "react";
import {auth,createUserProfileDocument} from "../../Firebase/FirebaseUtils.js"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument({email:user.email,displayName:name,uid:user.uid})
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setName("");
        } catch (error) {
            console.log(error)
        }
    };
    const handleChange = ({target}) => {
        switch (target.name) {
            case "email":
                setEmail(target.value);
                break;
            case "password":
                setPassword(target.value);
                break;
            case "name":
                setName(target.value);
                break;
            case "passwordConfirm":
                setConfirmPassword(target.value);
                break;
            default:
                break;
        }
    };
    return (<div className="signUp">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="signUpForm" onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    label="Name"
                    type="text"
                    id="nameSignUp"
                    require="true"
                    name="name"
                    value={name}
                />
                <FormInput
                    handleChange={handleChange}
                    label="Email"
                    type="email"
                    id="emailSgp"
                    require="true"
                    name="email"
                    value={email}
                />
                <FormInput
                    handleChange={handleChange}
                    label="Password"
                    type="password"
                    id="passwordSignUp"
                    require="true"
                    name="password"
                    value={password}
                />
                <FormInput
                    handleChange={handleChange}
                    label="Confirm password"
                    type="password"
                    id="passwordSignUpConfirm"
                    require="true"
                    name="passwordConfirm"
                    value={confirmPassword}
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign up</CustomButton>
                </div>
            </form>
        </div>);
};
export default SignUp;