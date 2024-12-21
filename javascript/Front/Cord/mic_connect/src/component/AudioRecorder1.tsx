import React, { useState, useRef } from 'react';
//기본적인 녹음, 정지, 다운로드 / 다운로드 없이 바로 재생(현재 휴대폰에서 재생안됨)
const AudioRecorder1 = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null); // 오디오 엘리먼트 참조

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
        console.log('Current Recorder State:', mediaRecorder?.state);
        mediaRecorder?.stop();
        console.log('Recorder State after stop:', mediaRecorder?.state);
    };

    const downloadRecording = () => {
        if (audioUrl) {
            const link = document.createElement('a');
            link.href = audioUrl;
            link.download = 'recording.wav';
            link.click();
        }
    };

    const playRecording = () => {
        if (audioUrl && audioRef.current) {
            audioRef.current.src = audioUrl;
            audioRef.current.play();
        }
    };


    const requestMicrophoneAccess = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            // 마이크 접근이 허용
            console.log('마이크 접근 허용됨', stream);
        } catch (error) {
            // 마이크 접근이 거부
            console.error('마이크 접근 거부됨 또는 에러 발생', error);
        }
    }
    requestMicrophoneAccess();


    const playAudioFile1 = () => {
        if (audioRef.current) {
            audioRef.current.src = '../audio/InMember.wav';
            audioRef.current.play();
        }
    };
    const playAudioFile2 = () => {
        if (audioRef.current) {
            audioRef.current.src = '../audio/InMember.mp3';
            audioRef.current.play();
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
            <button onClick={playRecording} disabled={!audioUrl}>
                Play Recording
            </button>
            <button onClick={playAudioFile1}>
                Play Audio File(wav)
            </button>
            <button onClick={playAudioFile2}>
                Play Audio File(mp3)
            </button>
            {/* 나머지 컴포넌트 내용 */}
            {isRecording && <div>🎤 녹음 중...</div>}

            <audio ref={audioRef} controls style={{ display: 'block' }} />
        </div>
    );
};

export default AudioRecorder1;
