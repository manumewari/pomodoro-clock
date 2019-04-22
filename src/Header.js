import React, { Component } from 'react';
import './index.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div >
            <div className="row text-center">
                <div className="col">
                    <h1>Pomodoro Clock</h1>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <h2>Session Length: {this.props.sessionLength}</h2>
                </div>
                <div className="col">
                    <h2>Break Length: {this.props.breakLength}</h2>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
