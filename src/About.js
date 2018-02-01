import React, { Component } from 'react';
import './About.css';
import headshot from './images/headshot_square.jpg';

class About extends Component {
    componentDidMount() {
        console.log("About mounted");
        // find itself on mount y position and offset
        var e = document.getElementById("about");
        // add the height of the component to the top to get ending y
        var start = e.offsetTop; 
        this.props.setY(start);
    }

    render() {
        return(
            <div id="about">
                <h1>About Me</h1>
                <p>
                    <img src={headshot} className="about-headshot" alt="headshot"/>
                    I'm Sherrie Shan.
                    <br/>Currently residing in Sunnyvale, CA.
                    <br/>You can contact me at <a href="mailto:sherrie@sherrievoices.com">sherrie@sherrievoices.com</a>
                </p>
            </div>
        );
    }
}

export default About;
