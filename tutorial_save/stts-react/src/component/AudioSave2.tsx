import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AudioSave2: React.FC = () => {
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [volume, setVolume] = useState<number>(0);
    const [volumeTimer, setVolumeTimer] = useState<NodeJS.Timeout | null>(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const options = { mimeType: 'audio/webm' };
        const recorder = new MediaRecorder(stream, options);
        setMediaRecorder(recorder);

        const audioCtx = new AudioContext();
        const analyserNode = audioCtx.createAnalyser();
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyserNode);
        setAudioContext(audioCtx);
        setAnalyser(analyserNode);

        recorder.start();
        monitorVolume();
    };

    const monitorVolume = () => {
        if (analyser) {
            const data = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(data);

            let sum = 0;
            for (let i = 0; i < data.length; i++) {
                sum += data[i];
            }
            const average = sum / data.length;
            setVolume(average);

            // 임계값 체크 및 녹음 중지
            if (average < 30) {
                if (volumeTimer) clearTimeout(volumeTimer);
                const newTimer = setTimeout(() => stopRecording(), 3000);
                setVolumeTimer(newTimer);
            } else {
                if (volumeTimer) clearTimeout(volumeTimer);
            }
        }

        requestAnimationFrame(monitorVolume);
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
        if (audioContext) audioContext.close();
        if (volumeTimer) clearTimeout(volumeTimer);
    };

    return (
        <div>
            <button onClick={startRecording}>녹음 시작</button>
            <button onClick={stopRecording}>녹음 중지 및 저장</button>
        </div>
    );
};

export default AudioSave2;
