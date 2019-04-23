import React, { Component } from 'react';
import './App.css';
import Button from "./Button";

let Actions = (props) => {

    return (
        <div >
            <div className="row actions">
                <div className="col text-center">
                    <Button clickAction={props.startTime} label="START" isDisabled={props.currentAction==="start"}></Button>
                    <Button clickAction={props.pause} label="PAUSE"></Button>
                    <Button clickAction={props.reset} label="RESET"></Button>
                </div>
            </div>
        </div>
    );
}

export default Actions;
