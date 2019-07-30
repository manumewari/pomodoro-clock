import React from 'react';
import './css/App.css';

let Button = (props) => {
    return (
        <button type="button" className="btn btn-light button" onClick={props.clickAction} disabled={props.isDisabled}>{props.label}</button>
    );
}

export default Button;
