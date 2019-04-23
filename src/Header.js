import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div id="header">
            <div className="row text-center">
                <div className="col header-text">
                    <h1>Pomodoro Clock</h1>
                </div>
            </div>
            <div className="row text-center">
                <div className="col timer-details">
                    <h2>Session Length <p>{this.props.sessionLength}</p></h2>
                </div>
                <div className="col timer-details">
                    <h2>Break Length <p>{this.props.breakLength}</p></h2>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
