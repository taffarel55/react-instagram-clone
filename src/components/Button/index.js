import "./index.css";

function Button({caption, state}) {
  return (
    <button className={`Button ${state && "active"}`}>
      {caption}
    </button>
  );
}

export default Button;
