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




// 컴포넌트 구조
// AudioRecorder 라는 함수형 컴포넌트를 정의하고 있습니다. 이 컴포넌트에서는 사용자의 오디오를 녹음하고, 이를 WAV 파일로 저장하는 기능을 제공합니다.
// 상태(State) 관리
// useState 훅을 사용하여 컴포넌트의 상태를 관리합니다. 상태에는 isRecording (녹음 중인지 여부), mediaRecorder (미디어 레코더 객체), audioUrl (녹음된 오디오의 URL)이 포함됩니다.
// 마이크 설정
// useEffect 훅을 사용하여 컴포넌트가 마운트될 때 마이크를 설정합니다(setupMicrophone 함수 호출).
// setupMicrophone 함수에서는 브라우저의 MediaDevices API를 사용하여 사용자의 오디오 입력(마이크)에 접근합니다.
// AudioContext와 AnalyserNode를 사용하여 오디오 스트림을 분석합니다. 여기서는 오디오 데이터의 평균 에너지 레벨을 계산하고, 이를 기반으로 녹음을 시작합니다.
// 녹음 기능
// startRecording 함수는 실제 녹음을 시작하는 함수입니다. MediaRecorder 객체를 사용하여 사용자의 오디오 입력을 녹음하고, 이 데이터를 audioChunks 배열에 저장합니다.
// MediaRecorder의 ondataavailable 이벤트를 사용하여 녹음된 오디오 데이터를 audioChunks 배열에 추가합니다.
// 녹음이 중지되면 (onstop 이벤트), audioChunks 배열에 저장된 오디오 데이터를 하나의 Blob 객체로 합치고, 이를 URL로 변환하여 audioUrl 상태에 저장합니다.
// 사용자 인터페이스
// 사용자는 "Stop Recording" 버튼을 클릭하여 녹음을 중지할 수 있습니다.
// "Download Recording" 버튼을 클릭하면, 녹음된 오디오 파일(wav 형식)을 다운로드할 수 있습니다.
// isRecording 상태에 따라 녹음 중임을 나타내는 텍스트가 화면에 표시됩니다.
// 마무리
// 이 코드는 웹 브라우저에서 간단한 오디오 녹음 기능을 구현하는 좋은 예시입니다. 사용자의 음성을 녹음하고, 이를 파일로 변환하여 다운로드할 수 있도록 만들어져 있습니다.
// 주의할 점은 사용자의 마이크 접근에 대한 권한 요청이 필요하며, 사용자가 이를 허용해야만 녹음 기능을 사용할 수 있습니다.


// 손님 입장
// 레코딩 시작
// 3초간 음성이 없으면 챗지피티한테 프롬프트 보내기
