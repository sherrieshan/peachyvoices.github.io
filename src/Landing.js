import React, { Component } from 'react';
import './Landing.css';
import landing from './images/landing.jpg';

class Landing extends Component {
    render() {
        return(
            <div> 
                <img src={landing} className="app-landing" alt="landing"/>
                <div className="app-intro">
                    <h1>Hi, I'm Sherrie!</h1>
                    <p>I'm a voice actress.</p>
                </div>
            </div>
        );
    }
}

export default Landing;
