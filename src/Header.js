import React, { Component } from 'react';
import './css/Header.css';

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
        </div>
    );
  }
}

export default Header;
