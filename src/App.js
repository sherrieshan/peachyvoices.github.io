import React, { Component } from 'react';
import landing from './images/landing.jpg';
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
        <div className="app-landing">
          <img src={landing} alt="landing"/>
          <h1>Hi, I'm Sherrie!</h1>
          <p>I'm a voice actress.</p>
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
