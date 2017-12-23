import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SMK N 1 MAS</h1>
        </header>
        <p className="App-intro">
        Widya Ainingrum
        </p>
        <a href="https://github.com/ariningrum">
        Github Link
        </a>
      </div>
    );
  }
}

export default App;
