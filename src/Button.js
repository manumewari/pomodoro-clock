import React, { Component } from 'react';
import './index.css';

let Button = (props) => {
    return (
        <button onClick={props.clickAction}>{props.label}</button>
    );
}

export default Button;
