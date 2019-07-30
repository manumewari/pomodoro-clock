import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import Timer from './Timer';
import Image from './Image';
import {TimerState, TimerType, TimerConstants, MAX_SESSION_TIME, MIN_SESSION_TIME, MAX_BREAK_TIME, MIN_BREAK_TIME} from './Constants';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breakLength:TimerConstants.breakLength,
            sessionLength:TimerConstants.sessionLength,
            type: TimerType.SESSION,
            timerState: TimerState.NOTSTARTED
        }
        this.increaseSessionLength = this.increaseSessionLength.bind(this);
        this.decreaseSessionLength = this.decreaseSessionLength.bind(this);
        this.increaseBreakLength = this.increaseBreakLength.bind(this);
        this.decreaseBreakLength = this.decreaseBreakLength.bind(this);
    }

    reset = () => {
        this.setState({
            breakLength:TimerConstants.breakLength,
            sessionLength:TimerConstants.sessionLength,
            type: TimerType.SESSION,
            timerState: TimerState.RESET
        });
    }

    increaseSessionLength = () => {
        if(this.state.timerState !== TimerState.START) {
            this.setState({sessionLength: (this.state.sessionLength < MAX_SESSION_TIME )?this.state.sessionLength+1:this.state.sessionLength});
        }
    }

    decreaseSessionLength = () => {
        if(this.state.timerState !== TimerState.START) {
            this.setState({sessionLength: (this.state.sessionLength > MIN_SESSION_TIME)?this.state.sessionLength-1:this.state.sessionLength});
        }
    }

    increaseBreakLength = () => {
        if(this.state.timerState !== TimerState.START) {
            this.setState({breakLength: (this.state.breakLength < MAX_BREAK_TIME)?this.state.breakLength+1:this.state.breakLength});
        }
    }

    decreaseBreakLength = () => {
        if(this.state.timerState !== TimerState.START) {
            this.setState({breakLength: (this.state.breakLength > MIN_BREAK_TIME)?this.state.breakLength-1:this.state.breakLength });
        }
    }

    setTimerState = (timerState) => {
        this.setState({timerState: timerState});
    }

    setTimerType = (type) => {
        this.setState({type: type});
    }

  render() {
    return (
        <div className="container-fluid">

            <Header />

            <div className="row text-center">
                <div className="col timer-details">
                    <h2>Session Length
                    <p>
                    <Image upImage={true} handleOnClick={this.increaseSessionLength}/>
                    {this.state.sessionLength}
                    <Image upImage={false} handleOnClick={this.decreaseSessionLength}/></p></h2>
                </div>
                <div className="col timer-details">
                    <h2>Break Length <p>
                    <Image upImage={true} handleOnClick={this.increaseBreakLength}/>
                    {this.state.breakLength}
                    <Image upImage={false} handleOnClick={this.decreaseBreakLength}/></p></h2>
                </div>
            </div>

            <Timer key={this.state.sessionLength} sessionLength={this.state.sessionLength} breakLength={this.state.breakLength} reset={this.reset}
                    timerType={this.state.type} timerState={this.state.timerState} setTimerType={this.setTimerType}
                    setTimerState={this.setTimerState} />

        </div>
    );
  }
}

export default App;
