import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";
import { signInWithGoogle, signInWithEmail } from "../../Firebase/FirebaseUtils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await signInWithEmail(email,password)
      setEmail("");
      setPassword("");
    }
    catch{
        console.log("Ups there was an error...")
    }
  };
  const handleChange = ({ target }) =>
    target.name === "email"
      ? setEmail(target.value)
      : setPassword(target.value);
  return (
    <div className="signIn">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="Email"
          type="text"
          id="email"
          require="true"
          name="email"
          value={email}
        />
        <FormInput
          handleChange={handleChange}
          label="Password"
          type="password"
          id="password"
          require="true"
          name="password"
          value={password}
        />
        <div className="buttons">
          <CustomButton type="submit">Submit form</CustomButton>
          <CustomButton type="submit" isGoogleSignIn onClick={signInWithGoogle}>
            SignIn with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default SignIn;