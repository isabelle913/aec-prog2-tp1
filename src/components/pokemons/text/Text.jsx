import React from "react";
import "./Text.css";

const Text = (props) => {
  const className = ["text"];

  if (props.className) className.push(props.className);

  switch (props.as) {
    case "h1":
      return <h1 className={className.join(" ")}>{props.text}</h1>;
    case "h2":
      return <h2 className={className.join(" ")}>{props.text}</h2>;
    case "h3":
      return <h3 className={className.join(" ")}>{props.text}</h3>;
    case "h4":
      return <h4 className={className.join(" ")}>{props.text}</h4>;
    case "h5":
      return <h5 className={className.join(" ")}>{props.text}</h5>;
    case "h6":
      return <h6 className={className.join(" ")}>{props.text}</h6>;
    default:
      return <p className={className.join(" ")}>{props.text}</p>;
  }
};

export default Text;
