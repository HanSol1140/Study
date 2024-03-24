// 필수 모듈 임포트
const {SpeechClient} = require('@google-cloud/speech').v1p1beta1;
const fs = require('fs');  
const recorder = require('node-record-lpcm16');

// 구글 클라이언트 설정
const projectId = 'HanSol'; // GCP 프로젝트 ID
const credentials = require('D:/hansol-410700-9ed905e72df6.json'); // 다운로드한 JSON 키
const client = new SpeechClient({ projectId, credentials, });

// 스트리밍 요청 설정
const request = {
    config: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'ko-KR', // 한국어 설정
    },
    interimResults: true, // 중간 결과를 반환 설정
};

// 스트리밍 시작
const recognizeStream = client
    .streamingRecognize(request)
    .on('error', console.error)
    .on('data', (data:any) =>
        process.stdout.write(
            data.results[0] && data.results[0].alternatives[0]
                ? `Transcript: ${data.results[0].alternatives[0].transcript}\n`
                : '\n\nReached transcription time limit, press Ctrl+C\n'
        ) 
    );

// 오디오 녹음 및 스트림 전송
recorder.record({
    sampleRateHertz: 16000,
    threshold: 0, // 실시간 처리를 위해 오디오 녹음이 즉시 시작되도록 임계값을 0으로 설정
    verbose: false,
    recordProgram: 'rec', // 'rec' for Linux/OS X, 'sox' for Windows
    silence: '10.0', // 오디오 끝난 후 멈추는 시간
})
    .stream()
    .on('error', console.error)
    .pipe(recognizeStream);

console.log('Listening, press Ctrl+C to stop.');
