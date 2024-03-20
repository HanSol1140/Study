// server.ts
import express from 'express';
import cors from 'cors';
import multer from 'multer'; // 파일 업로드를 위한 미들웨어
import { SpeechClient } from '@google-cloud/speech';

const app = express();
const port = 8000;
const upload = multer();

app.use(cors());

const speechClient = new SpeechClient(); // 구글 STT 클라이언트 초기화



const storage1 = multer.diskStorage({
    destination: 'Audio/',
    filename: function (req:any, file, cb) {
        // 고정된 파일명 'UserVoice' 사용
        cb(null, 'UserVoice')
    }
});
const audioStorage = multer({ storage: storage1 });
app.post('/transcribe', audioStorage.single('audio'), async (req, res) => {
   
});

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
