// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState(''); // TTS 사용자 입력을 저장할 state

  const [recorder, setRecorder] = useState(null);
  const [recording, setRecording] = useState(false);
  const [audioData, setAudioData] = useState(null);


// Start recording
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setRecorder(recorder);
    recorder.start();

    const data = [];
    recorder.ondataavailable = e => {
      data.push(e.data);
    };

    recorder.onstop = () => {
      setAudioData(new Blob(data, { type: 'audio/wav' }));
    };

    setRecording(true);
  };

  // Stop recording
  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
      setRecorder(null);
      setRecording(false);
    }
  };

// Send audio data to server when recording stops
useEffect(() => {
  if (audioData) {
    const sendData = async () => {
      try {
        // Convert Blob to Base64
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64data = reader.result.split(",")[1]; // Remove the "data:audio/wav;base64," part
          const response = await axios.post('http://localhost:5000/voiceSynthesize', { audioData: base64data }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data);
        };
        reader.readAsDataURL(audioData);
      } catch (error) {
        console.error('Error with speech-to-text conversion! :', error);
      }
    };
    sendData();
  }
}, [audioData]);


// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

  const handleChange = (event) => {
    setText(event.target.value); // 사용자 입력을 state에 저장 => 저장해야 보낼 수 있음 안하면 ''(공백)보내짐
  }
  const textSynthesize = async () => {
    try{
      const response = await axios.post('http://localhost:5000/textSynthesize', { text }, { responseType: 'arraybuffer' });
      const audioBlob = new Blob([response.data], {type: 'audio/mp3'});
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error){
      console.error('eror with text-to-speech conversion:', error);
    }
  }


  return (
    <div>
      <section id = "TTS">
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={textSynthesize}>Submit</button>
      </section>

      <section id="STT">
        {recording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}
      </section>
    </div>
    
  );
}

export default App;