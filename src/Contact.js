import React, { Component } from 'react';
import './Contact.css';
// import headshot from './images/headshot_square.jpg';

const url = "https://formspree.io/";
const emailName = "shansherrie";
const emailDomain = "gmail.com";

class Contact extends Component {
    constructor() {
        super();

        // prevent spam bots
        this.state = {
            link: url + emailName + "@" + emailDomain
        };
    }

    // submit form and recieve a thanks/notification
    handleSubmit() {
        console.log("submit clicked")
    }

    render() {
        return(
            <div id="contact">
                <h1>Contact</h1>
                <p>
                    Please contact me for rates and inquiries!
                </p>
                <form method="POST" action={this.state.link}>
                    <input type="email" name="_replyto" placeholder="Your email"/>
                    <input type="hidden" name="_subject" value="From Peachy Voices!" />
                    <textarea name="message" placeholder="Your message" style={{height:200+'px'}}></textarea>
                    <input type="text" name="_gotcha" style={{display:'none'}} />
                    <input type="hidden" name="_next" value="https://peachyvoices.com/#contact" />
                    <button onClick={() => this.handleSubmit()} className="contact-button" type="submit">Send</button>
                </form>
            </div>
        );
    }
}

export default Contact;
