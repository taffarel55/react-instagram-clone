import "./index.css";

const CardBox = ({ children }) => {
  return <div className="CardBox">{children}</div>;
};

const CardBoxStore = ({ children }) => {
  return <div className="CardBox-store">{children}</div>;
};

export { CardBox, CardBoxStore };
