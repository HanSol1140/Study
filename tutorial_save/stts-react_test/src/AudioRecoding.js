import React, { useState } from 'react';

const App = () => {
    const [transcription, setTranscription] = useState('');

    const startRecording = async () => {
        try {
            console.log("!!!!");
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            
            mediaRecorder.start();
            let chunks = [];

            mediaRecorder.ondataavailable = (event) => {
                chunks.push(event.data);
            };

            mediaRecorder.onstop = async () => {
                const blob = new Blob(chunks, { type: 'audio/wav' });
                const audioData = await blob.arrayBuffer();
                const base64Audio = Buffer.from(audioData).toString('base64');

                const response = await fetch('http://localhost:5000/voiceSynthesize', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ audioData: base64Audio }),
                });

                const data = await response.json();
                setTranscription(data.transcription);
            };
        } catch (err) {
            console.error('Error starting recording:', err);
        }
    };

    return (
        <div>
            <button onClick={startRecording}>Start Recording</button>
            <p>Transcription: {transcription}</p>
        </div>
    );
};

export default App;