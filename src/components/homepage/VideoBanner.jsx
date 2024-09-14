import React, { useState, useEffect } from 'react';

function VideoBanner() {
  return (
    <div className="VideoBanner">
      <video
        src="../src/assets/video/hero-video-home-2022-fall.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="video"
      >
        {/* Fallback content for unsupported browsers */}
        Your browser does not support the video tag.
      </video>
      <div className="banner-text">
        <h3>Hello</h3>
      </div>
    </div>
  );
}

export default VideoBanner;