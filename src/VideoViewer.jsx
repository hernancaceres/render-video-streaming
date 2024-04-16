import React, { useEffect } from 'react';

const VideoViewer = ({ stream }) => {
  useEffect(() => {
    const videoElement = document.getElementById('videoElement');
    if (stream && videoElement) {
      videoElement.srcObject = stream;
    }
  }, [stream]);

  return (
    <div>
      <h2>Video y Audio Transmitidos en Tiempo Real</h2>
      <video id="videoElement" width="640" height="480" autoPlay></video>
    </div>
  );
};

export default VideoViewer;
