// src/componentes/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({ video }) => {
    return (
        <div className="banner">
            <div className="banner-bg"></div>
            <div className="video-info">
                <div className="info-text">
                    <div className="info-box category-box">
                        <h2 className="video-category">{video.categoria}</h2>
                    </div>
                    <div className="info-box description-box">
                        <p className="video-description">{video.descripcion}</p>
                    </div>
                </div>
                <div className="video-container">
                    <iframe 
                        className="video-frame" 
                        src={video.urlVideo} 
                        title={video.titulo}
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Banner;
