import React, { useState, useRef } from 'react';
import {Link} from "react-router-dom"

const VideoKYC = () => {
  const videoRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        // You can handle the recorded video blob as needed
        console.log('Recorded Blob:', blob);
      };

      setMediaRecorder(recorder);
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <div>
      <h2>Video KYC</h2>
      <div>
        <video ref={videoRef} width="400" height="300" />
      </div>
      <div>
        {!isRecording ? (
          <button onClick={startRecording}>Start Recording</button>
        ) : (
          <button onClick={stopRecording}>Stop Recording</button>
        )}
      </div>
      <div className="flex-down">
        <button className="start2" >Complete Video KYC</button>
     
        <Link to="/thank-you" className="skip">Skip to Thank You Page</Link>
      </div>
      
    </div>
  );
};

export default VideoKYC;
