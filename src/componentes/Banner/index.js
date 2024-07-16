// src/componentes/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({ video }) => {
    return (
        <div className="banner">
            <div className="banner-bg"></div>
            <div className="video-info">
                <div className="info-left">
                    <h2 className="video-category">{video.category}</h2>
                    <p className="video-description">{video.description}</p>
                </div>
                <img src={video.image} alt="Video Thumbnail" className="video-thumbnail" />
            </div>
        </div>
    );
};

export default Banner;

