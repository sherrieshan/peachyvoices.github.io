import React, { Component } from 'react';
import Landing from './Landing';
import Demos from './Demos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ul className="app-menu">
          <li>Demos</li>
          <li style={{fontSize: 60+'px', color:'white'}}>Sherrie Voices</li>
          <li>About Me</li>
        </ul>
        <Landing></Landing>
        <Demos></Demos>
      </div>
    );
  }
}

export default App;
