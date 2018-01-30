import React, { Component } from 'react';
import './About.css';
import headshot from './images/headshot_square.jpg';

class About extends Component {
    render() {
        return(
            <div className="about">
                <h1>About Me</h1>
                <p>
                    <img src={headshot} className="about-headshot" alt="headshot"/>
                    I'm Sherrie Shan.
                    <br/>Currently residing in Sunnyvale, CA.
                    <br/>You can contact me at sherrie@sherrievoices.com.
                </p>
            </div>
        );
    }
}

export default About;
