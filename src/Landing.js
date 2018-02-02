import React, { Component } from 'react';
import './Landing.css';
import landing from './images/landing_cropped.jpg';

class Landing extends Component {
    render() {
        return(
            <div className="home"> 
                <img src={landing} className="app-landing" alt="landing"/>
                <ul className="app-menu">
                    <a onClick={() => this.props.handleScroll("demos")}><li>Demos</li></a>
                    <li style={{fontSize: 3.5 +'vw', color:'white'}}>Sherrie Voices</li>
                    <a onClick={() => this.props.handleScroll("about")}><li>About Me</li></a>
                </ul>
                <div className="app-intro">
                    <h1>Hi, I'm Sherrie!</h1>
                    <p>I'm a voice actress.</p>
                </div>
            </div>
        );
    }
}

export default Landing;
