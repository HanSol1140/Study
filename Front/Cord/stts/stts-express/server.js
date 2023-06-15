// server.js
const express = require("express");
const app = express();
const cors = require("cors");

const textToSpeech = require("@google-cloud/text-to-speech");
const voiceTospeech = require('@google-cloud/speech');


require("dotenv").config({ path: "dotenv.env" });

const PORT = process.env.PORT || 5000;
const HOST = process.env.PORT || 'localhost';

app.use(cors());
app.use(express.json());

// app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

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
  const base64Audio = req.body.audioData; // Base64 string from the client
  const audioData = Buffer.from(req.body.audioData, 'base64');  // Convert Base64 to Buffer

  const request = {
    audio: { content: audioData.toString('base64') },
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 48000,
      languageCode: 'ko-KR',
    },
  };

  try {
    const [response] = await STTclient.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    res.json({ transcription });
  } catch (error) {
    console.error('Error with speech-to-text conversion! :', error);
    res.status(500).send('Error with speech-to-text conversion!');
  }
});


// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

