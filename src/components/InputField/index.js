import "./index.css";

const InputField = ({ placeholder, type }) => {
  return (
    <input className="InputField" placeholder={placeholder} type={type}></input>
  );
};

export default InputField;
