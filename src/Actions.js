import React, { Component } from 'react';
import './index.css';
import Button from "./Button";

let Actions = (props) => {

    return (
        <div >
            <div className="row text-center">
                <div className="col">
                    <Button clickAction={props.startTime} label="Start"></Button>
                    <Button clickAction={props.pause} label="Pause"></Button>
                    <Button clickAction={props.reset} label="Reset"></Button>
                </div>
            </div>
        </div>
    );
}

export default Actions;
