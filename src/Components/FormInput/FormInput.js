import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="formInput" {...otherProps} onChange={handleChange} />
      {
        label ? <label className={`formInputLabel ${otherProps.value.length?"shrink":null}`}> {label}</label> : null
      }
    </div>
  );
};

export default FormInput;