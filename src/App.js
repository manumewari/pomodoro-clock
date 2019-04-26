import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import Timer from './Timer';
import Image from './Image';
import {TimerConstants, MAX_SESSION_TIME, MIN_SESSION_TIME, MAX_BREAK_TIME, MIN_BREAK_TIME} from './Constants';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breakLength:TimerConstants.breakLength,
            sessionLength:TimerConstants.sessionLength
        }
        this.increaseSessionLength = this.increaseSessionLength.bind(this);
        this.decreaseSessionLength = this.decreaseSessionLength.bind(this);
        this.increaseBreakLength = this.increaseBreakLength.bind(this);
        this.decreaseBreakLength = this.decreaseBreakLength.bind(this);
    }

    reset = () => {
        this.setState({
            breakLength:TimerConstants.breakLength,
            sessionLength:TimerConstants.sessionLength
        });
    }

    increaseSessionLength = () => {
        this.setState({sessionLength: (this.state.sessionLength < MAX_SESSION_TIME )?this.state.sessionLength+1:this.state.sessionLength});
    }

    decreaseSessionLength = () => {
        this.setState({sessionLength: (this.state.sessionLength > MIN_SESSION_TIME)?this.state.sessionLength-1:this.state.sessionLength});
    }

    increaseBreakLength = () => {
        this.setState({breakLength: (this.state.breakLength < MAX_BREAK_TIME)?this.state.breakLength+1:this.state.breakLength});
    }

    decreaseBreakLength = () => {
        this.setState({breakLength: (this.state.breakLength > MIN_BREAK_TIME)?this.state.breakLength-1:this.state.breakLength });
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

            <Timer sessionLength={this.state.sessionLength} breakLength={this.state.breakLength} reset={this.reset} />

        </div>
    );
  }
}

export default App;
