import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper text-center">{props.children}</div>;
}

export default Wrapper;
