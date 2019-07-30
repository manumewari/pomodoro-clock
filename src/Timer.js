import React, { Component } from 'react';
import './css/Timer.css';
import Button from "./Button";
import Alarm from "./Alarm";
import {TimerState, TimerType, TimerLabel, TimerStateLabel, TimerConstants} from "./Constants";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: this.props.sessionLength,
            seconds: 0,
            breakCount: 0
        }
        this.secInterval = null;
    }

    reset = () => {
        this.setState({
         minutes: TimerConstants.sessionLength,
         seconds: 0
        });
        this.props.reset();
    }

    pause = () => {
        clearInterval(this.secInterval);
        this.props.setTimerState(TimerState.PAUSE);
    }

    updateTimer = (min, sec, type, timerState, breakCount) => {
        this.props.setTimerState(timerState);
        this.props.setTimerType(type);
        this.setState({minutes:min, seconds:sec, breakCount:breakCount});
    }

    startTime = () => {
        this.secInterval = setInterval(() => {
            let sec = this.state.seconds;
            let min = this.state.minutes;
            let type = this.props.timerType;
            let breakCount = this.state.breakCount;
            if(sec-- === 0) {
                if(min-- === 0) {
                    [type, min, sec, breakCount] = this.changeTimerState();
                }
                else {
                    sec = 59;
                }
            }
            this.updateTimer(min, sec, type, TimerState.START, breakCount);
        },1000);
    }

    changeTimerState = () => {
        let breakCount = this.state.breakCount;
        if(this.props.timerType === TimerType.SESSION) {
            if(++breakCount === TimerConstants.longBreakNumber) {
                return [TimerType.BREAK, TimerConstants.longBreakLength, 0, 0];
            }
            return [TimerType.BREAK, this.props.breakLength, 0, breakCount];
        }
        else {
            return [TimerType.SESSION, this.props.sessionLength, 0, breakCount];
        }
    }

    timerStateLabel = () => {
        return this.props.timerType === TimerType.SESSION?TimerLabel.SESSION:TimerLabel.BREAK;
    }

    isDisabled = (buttonType) => {
        switch(buttonType) {
            case TimerState.START:
                return this.props.timerState===TimerState.START;

            case TimerState.PAUSE:
                return this.props.timerState!==TimerState.START;

            case TimerState.RESET:
                return this.props.timerState===TimerState.NOTSTARTED || this.props.timerState===TimerState.START;
        }

    }

    minuteText = () => {
        return this.formatText((this.state.minutes >= 0)?this.state.minutes:this.props.sessionLength);
    }

    secondsText = () => {
        return this.formatText(this.state.seconds?this.state.seconds:0);
    }

    formatText = (value) => {
        return (value<10)?"0"+value:value;
    }

    timerClass = () => {
        return (this.props.timerType===TimerType.BREAK?'break':'session');
    }

    render() {
        let timerClass = this.timerClass();
        return (
            <div className="clock-type">
                <div className="row text-center">
                <div className={"col "+timerClass}>
                    <h2>{this.timerStateLabel()}</h2>
                </div>
            </div>
            <div className="row text-center">
                <div className={"col "+timerClass}>
                    <h1>{this.minuteText()} : {this.secondsText()}</h1>
                </div>
            </div>
            <div className="row actions">
                <div className="col text-center">
                    <Button clickAction={this.startTime} label={TimerStateLabel.START} isDisabled={this.isDisabled(TimerState.START)}></Button>
                    <Button clickAction={this.pause} label={TimerStateLabel.PAUSE} isDisabled={this.isDisabled(TimerState.PAUSE)}></Button>
                    <Button clickAction={this.reset} label={TimerStateLabel.RESET} isDisabled={this.isDisabled(TimerState.RESET)}></Button>
                </div>
            </div>
            <Alarm playAlarm={this.props.timerType===TimerType.BREAK}/>
        </div>
    );
    }
}

export default Timer;
