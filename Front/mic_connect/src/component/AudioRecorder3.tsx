import React, { useState, useEffect } from 'react';

const AudioRecorder3 = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [silenceStart, setSilenceStart] = useState<number | null>(null);

    useEffect(() => {
        let animationFrameId: any;

        if (isRecording && audioContext && analyser) {
            const dataArray = new Uint8Array(analyser.fftSize);
            // const checkSilence = () => {
            const VOLUME_THRESHOLD = 5; // 볼륨 임계값 설정

            const checkSilence = () => {
                if (!isRecording) return;

                analyser.getByteFrequencyData(dataArray);
                const sum = dataArray.reduce((acc, value) => acc + value, 0);
                const averageVolume = sum / dataArray.length; // 평균 볼륨 계산

                if (averageVolume > VOLUME_THRESHOLD) {
                    console.log('볼륨 감지'); // 평균 볼륨이 임계값을 초과할 경우
                    setSilenceStart(null); // 무음 시작 시간 초기화
                } else {
                    //  if (sum === 0) {
                    if (silenceStart === null) {
                        setSilenceStart(performance.now());
                    } else if (performance.now() - silenceStart > 2000) {
                        console.log('입력 감지 못함');
                        setSilenceStart(null);
                        stopRecording();
                    }
                }
                // else {
                //     if (silenceStart !== null && performance.now() - silenceStart < 2000) {
                //         console.log('저볼륨 감지'); // 낮은 볼륨 감지
                //     }
                //     setSilenceStart(null);
                // }

                animationFrameId = requestAnimationFrame(checkSilence);
            };

            checkSilence();
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isRecording, audioContext, analyser, silenceStart]);

    const startRecording = async () => {
        setIsRecording(true);
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        const newAudioContext = new AudioContext();
        setAudioContext(newAudioContext);
        const newAnalyser = newAudioContext.createAnalyser();
        setAnalyser(newAnalyser);

        const source = newAudioContext.createMediaStreamSource(stream);
        source.connect(newAnalyser);

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
        setIsRecording(false); // 이 부분을 먼저 호출해야 합니다.
        mediaRecorder?.stop();
        // 스트림의 모든 트랙을 반복하여 각 트랙을 중지
        if (mediaRecorder && mediaRecorder.stream) {
            mediaRecorder.stream.getTracks().forEach(track => track.stop());
        }
        audioContext?.close();
        setAudioContext(null);
        setAnalyser(null);
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

export default AudioRecorder3;
