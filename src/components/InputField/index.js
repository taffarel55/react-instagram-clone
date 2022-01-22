import "./index.css";

const InputField = ({ placeholder, type, name, value }) => {
  return (
    <input
      className="InputField"
      placeholder={placeholder}
      type={type}
      name={name}
      defaultValue={value}
    ></input>
  );
};

export default InputField;
