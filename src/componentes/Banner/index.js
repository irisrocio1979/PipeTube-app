// src/componentes/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({ video }) => {
    return (
        <div className="banner">
            <div className="banner-bg"></div>
            <div className="video-info">
                <div className="info-left">
                    <h2 className="video-category">{video.equipo}</h2>
                    <p className="video-description">{video.nombre} - {video.puesto}</p>
                </div>
                <img src={video.foto} alt="Video Thumbnail" className="video-thumbnail" />
            </div>
        </div>
    );
};

export default Banner;

