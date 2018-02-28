import React, { Component } from 'react';
import './About.css';
import headshot from './images/headshot_square.jpg';

class About extends Component {
    render() {
        return(
            <div id="about">
                <h1>About Me</h1>
                <div className="headshot-container"> 
                    <img src={headshot} className="about-headshot" alt="headshot"/>
                </div>
                <div className="about-info">
                    <p>
                        I'm Sherrie Shan.
                        <br/>Currently residing in Sunnyvale, CA.
                        <br/>You can contact me at <a href="mailto:shansherrie@gmail.com">shansherrie@gmail.com</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
