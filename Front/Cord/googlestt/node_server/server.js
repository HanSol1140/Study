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
const multer_1 = __importDefault(require("multer")); // 파일 업로드를 위한 미들웨어
const speech_1 = require("@google-cloud/speech");
const app = (0, express_1.default)();
const port = 8000;
const upload = (0, multer_1.default)();
app.use((0, cors_1.default)());
const speechClient = new speech_1.SpeechClient(); // 구글 STT 클라이언트 초기화
const storage1 = multer_1.default.diskStorage({
    destination: 'Audio/',
    filename: function (req, file, cb) {
        // 고정된 파일명 'UserVoice' 사용
        cb(null, 'UserVoice');
    }
});
const audioStorage = (0, multer_1.default)({ storage: storage1 });
app.post('/transcribe', audioStorage.single('audio'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
