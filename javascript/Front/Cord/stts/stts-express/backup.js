// server.js
const express = require("express");
const app = express();
const cors = require("cors");

const textToSpeech = require("@google-cloud/text-to-speech");
const voiceTospeech = require('@google-cloud/speech');


require("dotenv").config({ path: "dotenv.env" });

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Google Cloud Text-to-Speech 클라이언트 생성
const TTSclient = new textToSpeech.TextToSpeechClient({
  keyFilename: "D:key-hope-389706-a991d39a7ce8.json",
});


app.post("/textSynthesize", async (req, res) => {
  const text = req.body.text;

  const request = {
    input: { text: text },
    voice: { languageCode: "ko-KR", ssmlGender: "FEMALE" }, // languageCode: 'ko-KR', name: 'ko-KR-Neural2-B', ssmlGender: 'FEMALE'
    audioConfig: { audioEncoding: "MP3" },
  };
  const [response] = await TTSclient.synthesizeSpeech(request);
  const audio = response.audioContent;
  res.send(audio);
});


// Google Cloud Speech-to-Text 클라이언트 생성
const STTclient = new voiceTospeech.SpeechClient({
  keyFilename: "D:key-hope-389706-a991d39a7ce8.json",
});
app.post("/voiceSynthesize", async (req, res) => {
  const audioData = req.body.audioData; // This would be the audio data from the client

  const request = {
    audio: { content: audioData },
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'ko-KR',
    },
  };

  const [response] = await STTclient.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');

  res.send(transcription);
});


// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
