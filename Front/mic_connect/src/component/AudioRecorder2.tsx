import React, { useState, useEffect } from 'react';

const AudioRecorder2 = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);


    useEffect(() => {
        // 기존 타이머 정리
        if (intervalId) clearInterval(intervalId);
    
        if (isRecording) {
            const id = setInterval(() => {
                console.log("녹음중");
            }, 2000);
            setIntervalId(id);
        }
    }, [isRecording]);

    const startRecording = async () => {
        setIsRecording(true);
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        const audioChunks: BlobPart[] = [];
        recorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        recorder.onstop = () => {
            setIsRecording(false);
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const url = URL.createObjectURL(audioBlob);
            setAudioUrl(url);
        };

        recorder.start();
    };

    const stopRecording = () => {
        mediaRecorder?.stop();
    };

    const downloadRecording = () => {
        if (audioUrl) {
            const link = document.createElement('a');
            link.href = audioUrl;
            link.download = 'recording.wav';
            link.click();
        }
    };

    return (
        <div>
            <button onClick={startRecording} disabled={isRecording} style={{ backgroundColor: isRecording ? 'red' : 'green' }}>
                {isRecording ? 'Recording...' : 'Start Recording'}
            </button>
            <button onClick={stopRecording} disabled={!isRecording}>
                Stop Recording
            </button>
            <button onClick={downloadRecording}>
                Download Recording
            </button>

            {isRecording && <div>🎤 녹음 중...</div>}
        </div>
    );
};

export default AudioRecorder2;
