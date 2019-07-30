import React, { Component } from 'react';
import './css/App.css';
import imgUp from './images/up.png';
import imgDown from './images/down.png';

let Image = (props) => {
    return (
        <img src={props.upImage?imgUp:imgDown} className="img-up-down" alt="increase/decrease time" onClick={props.handleOnClick} />
    );
}

export default Image;
