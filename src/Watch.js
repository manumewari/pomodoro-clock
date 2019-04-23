import React, { Component } from 'react';
import './Watch.css';
import Actions from './Actions';

class Watch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "Session",
            currentAction: ""
        }
        this.secInterval = null;
    }

    reset = () => {
        this.setState({
            minutes: this.props.sessionLength,
            seconds: 0,
            currentAction: "reset"
        });
    }

    pause = () => {
        clearInterval(this.secInterval);
        this.setState({currentAction:"pause"});
    }

    startTime = () => {
        this.secInterval = setInterval(() => {
            let sec;
            let min;
            let type = this.state.type;
            if(this.state.currentAction === "") {
                this.reset();
                sec = this.state.seconds;
                min = this.state.minutes;
            }
            else {
                sec = this.state.seconds-1;
                min = this.state.minutes;

                if(sec === -1) {
                    sec = 59;
                    min = this.state.minutes-1;
                    if(this.state.minutes === 0) {
                        if(this.state.type === "Session") {
                            type = "Break";
                            min = this.props.breakLength;
                        }
                        else {
                            type = "Session";
                            min = this.props.sessionLength;
                        }
                    }
                }
            }
            this.setState({minutes:min, seconds:sec, type: type, currentAction:"start"})
        },1000);
    }

    formatText = (value) => {
        if(value<10) {
            value = "0"+value;
        }
        return value;
    }

  render() {
        const minuteText = this.formatText((this.state.minutes >= 0)?this.state.minutes:this.props.sessionLength);
        const secondsText = this.formatText(this.state.seconds?this.state.seconds:0);
        return (
            <div className="clock-type">
                <div className="row text-center">
                    <div className={"col "+(this.state.type==='Break'?'break':'')}>
                        <h2>{this.state.type}</h2>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <h2>{minuteText} : {secondsText}</h2>
                    </div>
                </div>
                <Actions startTime={this.startTime} pause={this.pause} reset={this.reset} currentAction={this.state.currentAction}/>
            </div>
        );
    }
}

export default Watch;
