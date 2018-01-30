import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import className from 'classnames';

import './Demos.css'; 

class Demos extends Component {

    render() {
        return (
            <div className="demos"> 
                <h1>Demos</h1>
                <iframe title="AudioDemosPlaylist"
                    width="80%" 
                    height="450" 
                    scrolling="yes" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/435708753&amp;color=%23d07991&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true">
                </iframe>
            </div>
        );
    }
}


export default Demos;
