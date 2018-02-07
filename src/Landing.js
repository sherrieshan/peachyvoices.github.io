import React, { Component } from 'react';
import './Landing.css';
import landingSmall from './images/landing_small.jpg';  // for mobile landing
import landing from './images/landing.jpg';     // for other landing

class Landing extends Component {
    // send the click back to parent to handle scroll
    handleClick(id) {
        this.props.handleScroll(id);
    }

    render() {
        return(
            <div className="home"> 
                <picture>
                    <source srcSet={landingSmall} media="(max-width:600px)" />
                    <img src={landing} className="app-landing" alt="landing"/>
                </picture>
                <ul className="app-menu">
                    <a onClick={() => this.handleClick("demos")}><li>Demos</li></a>
                    <li className="app-brand">Sherrie Voices</li>
                    <a onClick={() => this.handleClick("about")}><li>About Me</li></a>
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
