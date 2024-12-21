const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const {SpeechClient} = require('@google-cloud/speech');

const app = express();
const appHttps = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

// 서버 시작
app.listen(80, () => {
  console.log(`Server listening on HTTP port ${80}`);
});

// ====================================================================
// ====================================================================

const projectId = 'HanSol'; // GCP 프로젝트 ID
const credentials = require('D:/hansol-410700-9ed905e72df6.json'); // 다운로드한 JSON 키
const client = new SpeechClient({ projectId, credentials, });

// STT 설정
const config = {
  languageCode: 'ko-KR',
  encoding: 'LINEAR16',
  sampleRateHertz: 48000,
};

// 실시간 스트림 설정
const stream = client.streamingRecognize({ config, interimResults: true, });

// 오디오 데이터 처리
app.post('/stt', (req:any, res:any) => {
  const audioData = req.body.audioData; // base64 encoded audio data

  // 오디오 데이터를 스트림으로 전송
  const audioStream = Buffer.from(audioData, 'base64');
  audioStream.pipe(stream);

  // 결과 처리
  stream.on('data', (response:any) => {
    const transcript = response.results[0].alternatives[0].transcript;
    console.log(transcript);

    // 결과 전송
    res.send({ transcript });
  });

  stream.on('end', () => {
    console.log('STT 완료');
    res.end();
  });

  stream.on('error', (error:any) => {
    console.error(error);
  });
});

