// server.ts
import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(express.static(__dirname)); // 루트폴더
app.use(express.json());
app.use(cors());

const httpPORT = Number(process.env.HTTPPORT) || 80;
const httpsPORT = Number(process.env.HTTPSPORT) || 443;

// 서버 시작
app.listen(httpPORT, () => {
    console.log(`Server listening on HTTP port ${httpPORT}`);
});

// =======================================================================================================
import textToSpeech from "@google-cloud/text-to-speech";
import voiceTospeech from '@google-cloud/speech';
// STT
const STTclient = new voiceTospeech.SpeechClient({
    keyFilename: "D:hansol-410700-9ed905e72df6.json",
});
// TTS
const TTSclient = new textToSpeech.TextToSpeechClient({
    keyFilename: "D:hansol-410700-9ed905e72df6.json",
});
// =======================================================================================================
// 오디오 저장 API
// npm install fluent-ffmpeg @types/fluent-ffmpeg --save
// ffmpeg.org에서 설치
import ffmpeg from 'fluent-ffmpeg';

import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        // 고정된 파일명 'UserVoice' 사용
        cb(null, 'UserVoice' + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

app.post('/upload-audio', upload.single('audio'), (req:any, res:any) => {
    const filePath = req.file.path;
    const wavFilePath = 'uploads/UserVoice.mp3';

    // 원본 파일이 .wav가 아니라면 변환
    if (path.extname(filePath) !== '.mp3') {
        ffmpeg(filePath)
            .toFormat('mp3')
            .save(wavFilePath)
            .on('end', () => {
                console.log(`Converted to ${wavFilePath}`);
                // 변환 후 원본 파일 삭제
                fs.unlinkSync(filePath);
                res.status(200).send('Audio uploaded and conversion completed');
            })
            .on('error', (err) => {
                console.error('An error occurred: ' + err.message);
                res.status(500).send('Error during conversion');
            });
    } else {
        // 이미 .wav 파일인 경우
        res.status(200).send('Audio uploaded');
    }
});

// =======================================================================================================
// 파일 STT
// 오디오 파일에 문제가 있는경우가 아니면 작동함
async function STT() {
    const config = {
        encoding: 'mp3',
        sampleRateHertz: 48000,
        languageCode: 'ko-KR',
    };
    const audio = {
        // content: fs.readFileSync('./uploads/synthesis.wav').toString('base64'),
        content: fs.readFileSync('./uploads/UserVoice.wav').toString('base64'),
    };

    const request:any = {
        config: config,
        audio: audio,
    };

    // Detects speech in the audio file
    const [response]:any = await STTclient.recognize(request);
    const transcription = response.results
        .map((result:any) => result.alternatives[0].transcript)
        .join('\n');
    console.log('Transcription: ', transcription);
}
STT();
// =======================================================================================================
// TTS
app.post("/textSynthesize", async (req, res) => {
    const text = req.body.text;

    const request:any = {
        input: { text: text },
        voice: { languageCode: "ko-KR", ssmlGender: "FEMALE" }, // languageCode: 'ko-KR', name: 'ko-KR-Neural2-B', ssmlGender: 'FEMALE'
        audioConfig: { audioEncoding: "MP3" },
        // audioConfig: { audioEncoding: "LINEAR16" },
    };
    const [response]:any = await TTSclient.synthesizeSpeech(request);
    const audio = response.audioContent;
    fs.writeFile('output.wav', audio, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error while saving audio to a file');
            return;
        }
    });
    res.send(audio);
});

async function TTS(){
    const text = "아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 ";

    const request:any = {
        input: { text: text },
        voice: { languageCode: "ko-KR", ssmlGender: "FEMALE" }, // languageCode: 'ko-KR', name: 'ko-KR-Neural2-B', ssmlGender: 'FEMALE'
        audioConfig: { audioEncoding: "MP3" },
        // audioConfig: { audioEncoding: "LINEAR16" },
    };
    const [response]:any = await TTSclient.synthesizeSpeech(request);
    const audio = response.audioContent;
    fs.writeFile('output.wav', audio, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}
// TTS();
// =======================================================================================================
// =======================================================================================================