import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Watch from './Watch';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breakLength:10,
            sessionLength:25
        }
    }

  render() {
    return (
        <div className="container-fluid">

            <Header sessionLength={this.state.sessionLength} breakLength={this.state.breakLength} />

            <Watch sessionLength={this.state.sessionLength} breakLength={this.state.breakLength} />

        </div>
    );
  }
}

export default App;
