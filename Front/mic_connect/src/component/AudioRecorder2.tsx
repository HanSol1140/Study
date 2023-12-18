import React, { useState, useEffect } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    setupMicrophone();
  }, []);

  const setupMicrophone = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.fftSize = 2048;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const checkAudio = () => {
      analyser.getByteTimeDomainData(dataArray);
      let sum = dataArray.reduce((a, value) => a + value, 0);
      let average = sum / dataArray.length;

      // 임계값 설정 (조정 가능)
      if (average > 60 && !isRecording) {
        startRecording(stream);
      }

      requestAnimationFrame(checkAudio);
    };

    checkAudio();
  };

  const startRecording = (stream: MediaStream) => {
    setIsRecording(true);
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

export default AudioRecorder;
