import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import className from 'classnames';

import './Demos.css'; 

class Demos extends Component {
    render() {
        return (
            <div id="demos"> 
                <h1>Demos</h1>
                <div class="demo-content">
                    <iframe title="AudioDemosPlaylist"
                        width="100%" 
                        height="450" 
                        scrolling="yes" 
                        frameBorder="no" 
                        allow="autoplay" 
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/435708753&amp;color=%23d07991&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true">
                    </iframe>
                    <div class="videoWrapper">
                        <iframe title="YoutubePlaylist"
                            width="560" 
                            height="349"
                            src="https://www.youtube.com/embed/videoseries?list=PLN7mqqyg399zpw0u7ZrOSmo_bOnemm8BC" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}


export default Demos;
