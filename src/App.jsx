import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import VideoViewer from './VideoViewer';

function App() {
  const webcamRef = useRef(null);

  return (
    <div className="App">
      <h1>Video y Audio Streaming en Tiempo Real</h1>
      <div>
        <Webcam
          audio={true} // Cambiar a true para capturar el audio
          height={480}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
        />
      </div>
      <VideoViewer stream={webcamRef.current ? webcamRef.current.stream : null} />
    </div>
  );
}

export default App;

