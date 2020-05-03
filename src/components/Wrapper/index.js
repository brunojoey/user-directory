import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className={`container${props.fluid ? '-fluid' : ''}`} {...props} />};

export default Wrapper;
