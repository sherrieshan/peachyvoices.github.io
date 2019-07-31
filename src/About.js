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
                        Hello there, I'm Sherrie Shan and I would love to be a voice in your project!
                        <br/>
                        <br/>
                        {/* I am suitable in all mid-high range female roles but am especially proficient in children and young adult voices. */}
                        {/* I am a native American English speaker and grew up speaking Mandarin Chinese as a second language. I have also studied and majored in Japanese. */}
                        {/* I naturally have a general American accent and can perform a general Southern American accent as well. */}
                        <br/>
                        If you have any questions or would like a copy of my resume, please contact me with the form above!
                        <br/><br/>
                        You can also find me on <a href="https://www.fiverr.com/sherrieshan/voice-your-female-characters">fiverr</a>!
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
