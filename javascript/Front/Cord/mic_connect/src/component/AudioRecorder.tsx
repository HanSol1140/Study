import React, { useState } from 'react';
// 기본적인 녹음, 정지, 다운로드
const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

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

export default AudioRecorder;
