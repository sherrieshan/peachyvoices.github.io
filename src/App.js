import React, { Component } from 'react';
import Landing from './Landing';
import Demos from './Demos';
import About from './About';
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
        <Landing/>
        <Demos/>
        <About/>
        <ul className="contacts"> 
          <a href="https://soundcloud.com/sherrie-shan-744088758">
            <li><i className="fab fa-soundcloud fa-3x"></i></li>
          </a>
          <a href="https://www.linkedin.com/in/sherrieshan/">
            <li><i className="fab fa-linkedin-in fa-3x"></i></li>
          </a>
        </ul>
      </div>
    );
  }
}

export default App;
