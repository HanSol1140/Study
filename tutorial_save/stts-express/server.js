"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.static(__dirname)); // 루트폴더
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const httpPORT = Number(process.env.HTTPPORT) || 80;
const httpsPORT = Number(process.env.HTTPSPORT) || 443;
// 서버 시작
app.listen(httpPORT, () => {
    console.log(`Server listening on HTTP port ${httpPORT}`);
});
// =======================================================================================================
const text_to_speech_1 = __importDefault(require("@google-cloud/text-to-speech"));
const speech_1 = __importDefault(require("@google-cloud/speech"));
// STT
const STTclient = new speech_1.default.SpeechClient({
    keyFilename: "D:hansol-410700-9ed905e72df6.json",
});
// TTS
const TTSclient = new text_to_speech_1.default.TextToSpeechClient({
    keyFilename: "D:hansol-410700-9ed905e72df6.json",
});
// =======================================================================================================
// 오디오 저장 API
// npm install fluent-ffmpeg @types/fluent-ffmpeg --save
// ffmpeg.org에서 설치
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        // 고정된 파일명 'UserVoice' 사용
        cb(null, 'UserVoice' + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({ storage: storage });
app.post('/upload-audio', upload.single('audio'), (req, res) => {
    const filePath = req.file.path;
    const wavFilePath = 'uploads/UserVoice.mp3';
    // 원본 파일이 .wav가 아니라면 변환
    if (path_1.default.extname(filePath) !== '.mp3') {
        (0, fluent_ffmpeg_1.default)(filePath)
            .toFormat('mp3')
            .save(wavFilePath)
            .on('end', () => {
            console.log(`Converted to ${wavFilePath}`);
            // 변환 후 원본 파일 삭제
            fs_1.default.unlinkSync(filePath);
            res.status(200).send('Audio uploaded and conversion completed');
        })
            .on('error', (err) => {
            console.error('An error occurred: ' + err.message);
            res.status(500).send('Error during conversion');
        });
    }
    else {
        // 이미 .wav 파일인 경우
        res.status(200).send('Audio uploaded');
    }
});
// =======================================================================================================
// 파일 STT
// 오디오 파일에 문제가 있는경우가 아니면 작동함
function STT() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = {
            encoding: 'mp3',
            sampleRateHertz: 48000,
            languageCode: 'ko-KR',
        };
        const audio = {
            // content: fs.readFileSync('./uploads/synthesis.wav').toString('base64'),
            content: fs_1.default.readFileSync('./uploads/UserVoice.mp3').toString('base64'),
        };
        const request = {
            config: config,
            audio: audio,
        };
        // Detects speech in the audio file
        const [response] = yield STTclient.recognize(request);
        const transcription = response.results
            .map((result) => result.alternatives[0].transcript)
            .join('\n');
        console.log('Transcription: ', transcription);
    });
}
STT();
// =======================================================================================================
// TTS
app.post("/textSynthesize", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const text = req.body.text;
    const request = {
        input: { text: text },
        voice: { languageCode: "ko-KR", ssmlGender: "FEMALE" }, // languageCode: 'ko-KR', name: 'ko-KR-Neural2-B', ssmlGender: 'FEMALE'
        audioConfig: { audioEncoding: "MP3" },
        // audioConfig: { audioEncoding: "LINEAR16" },
    };
    const [response] = yield TTSclient.synthesizeSpeech(request);
    const audio = response.audioContent;
    fs_1.default.writeFile('output.wav', audio, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error while saving audio to a file');
            return;
        }
    });
    res.send(audio);
}));
function TTS() {
    return __awaiter(this, void 0, void 0, function* () {
        const text = "아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 아이스커피 줘 ";
        const request = {
            input: { text: text },
            voice: { languageCode: "ko-KR", ssmlGender: "FEMALE" }, // languageCode: 'ko-KR', name: 'ko-KR-Neural2-B', ssmlGender: 'FEMALE'
            audioConfig: { audioEncoding: "MP3" },
            // audioConfig: { audioEncoding: "LINEAR16" },
        };
        const [response] = yield TTSclient.synthesizeSpeech(request);
        const audio = response.audioContent;
        fs_1.default.writeFile('output.wav', audio, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
}
// TTS();
// =======================================================================================================
// =======================================================================================================
