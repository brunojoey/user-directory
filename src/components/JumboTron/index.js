import React from 'react';
import './style.css';

function Jumbotron(props) {
  return <div className={`jumbotron ${props.fluid ? 'jumbotron-fluid' : ''} jumbo`} {...props}></div>;
}

export default Jumbotron;