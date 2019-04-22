import React, { Component } from 'react';
import './index.css';
import Actions from './Actions';

class Watch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "Session"
        }
        this.secInterval = null;
    }

    reset = () => {
        this.setState({
            minutes: this.props.sessionLength,
            seconds: 0
        });
    }

    pause = () => {
        clearInterval(this.secInterval);
    }

    startTime = () => {
        this.secInterval = setInterval(() => {
            let sec;
            let min;
            let type = this.state.type;
            if(!this.state.minutes && !this.state.seconds) {
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
            this.setState({minutes:min, seconds:sec, type: type})
        },1000);
    }

  render() {
    return (
        <div >
            <div className="row text-center">
                <div className="col">
                    <h2>{this.state.type}</h2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <h2>{(this.state.minutes >= 0)?this.state.minutes:this.props.sessionLength} : {this.state.seconds?this.state.seconds:0}</h2>
                </div>
            </div>

            <Actions startTime={this.startTime} pause={this.pause} reset={this.reset} />
        </div>
    );
  }
}

export default Watch;
