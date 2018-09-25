import React, { Component } from 'react';
import './Landing.css';
import landingSmall from './images/landing_small.jpg';  // for mobile landing
import landing from './images/landing.jpg';             // for other landing
import momo from './images/momotransparent.png';        // momo logo

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
                    <li className="app-brand"><img src={momo} className="app-logo" alt="logo"/>Peachy Voices</li>
                    <a onClick={() => this.handleClick("contact")}><li>Contact</li></a>
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
