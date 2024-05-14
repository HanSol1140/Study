import React, { useState } from 'react';
import axios from 'axios';

const AudioSave: React.FC = () => {
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const options = { mimeType: 'audio/webm' };
        const recorder = new MediaRecorder(stream, options);
        setMediaRecorder(recorder);
        recorder.start();
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            mediaRecorder.ondataavailable = async (e) => {
                const formData = new FormData();
                formData.append('audio', e.data);
                await axios.post('http://localhost:80/upload-audio', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            };
        }
    };

    return (
        <div>
            <button onClick={startRecording}>녹음 시작</button>
            <button onClick={stopRecording}>녹음 중지 및 저장</button>
        </div>
    );
};

export default AudioSave;