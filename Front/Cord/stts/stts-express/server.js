const express = require("express");
const app = express();
const cors = require("cors");

const textToSpeech = require("@google-cloud/text-to-speech");

require("dotenv").config({ path: "dotenv.env" });

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

app.use(cors());
app.use(express.json());

// Google Cloud Text-to-Speech 클라이언트 생성
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: "D:key-hope-389706-a991d39a7ce8.json",
});
// const util = require('util');
// const fs = require('fs');
//
app.post("/synthesize", async (req, res) => {
  const text = req.body.text;

  const request = {
    input: { text: text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: "ko-KR", ssmlGender: "FEMALE" }, // languageCode: 'ko-KR', name: 'ko-KR-Neural2-B', ssmlGender: 'FEMALE'
    // Select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" },
  };

  // Performs the Text-to-Speech request
  const [response] = await client.synthesizeSpeech(request);
  // The response's audioContent is binary.
  const audio = response.audioContent;
  res.send(audio);
});
// 여기에 코딩

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
