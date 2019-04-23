import React, { Component } from 'react';
import './App.css';

let Button = (props) => {
    return (
        <button type="button" class="btn btn-light button" onClick={props.clickAction} disabled={props.isDisabled}>{props.label}</button>
    );
}

export default Button;
