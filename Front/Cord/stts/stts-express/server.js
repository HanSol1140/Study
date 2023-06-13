const express = require('express');
const app = express();
const cors = require('cors');
const textToSpeech = require('@google-cloud/text-to-speech');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.use(cors());
app.use(express.json());

// Google Cloud Text-to-Speech 클라이언트 생성
const client = new textToSpeech.TextToSpeechClient();
async function quickStart() {
  // The text to synthesize
  const text = 'hello, world!';

  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    // select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
}
quickStart();



// TTS 요청 핸들러
// app.post('/synthesize', async (req, res) => {
//   try {
//     const { text } = req.body;
//     console.log( text );
//     // 음성 변환 요청 생성
//     const request = {
//       input: { text },
//       voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
//       audioConfig: { audioEncoding: 'MP3' },
//     };

//     // 음성 변환 API 호출
//     const [response] = await client.synthesizeSpeech(request);

//     // 변환된 음성 파일을 클라이언트에 응답
//     res.set('Content-Type', 'audio/mpeg');
//     res.send(response.audioContent);
//   } catch (error) {
//     console.error('Text-to-Speech API error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});