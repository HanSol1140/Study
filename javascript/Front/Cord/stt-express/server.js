const express = require('express');
const app = express();
const port = 5000;

// Google Cloud Speech-to-Text setup
const speech = require('@google-cloud/speech');
const client = new speech.SpeechClient();

app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));

app.post('/transcribe', async (req, res) => {
    const audioBytes = req.body.audioData;
    const audio = {
        content: audioBytes,
    };
    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
    };
    const request = {
        audio: audio,
        config: config,
    };
    const [response] = await client.recognize(request);
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log(`Transcription: ${transcription}`);
    res.send(transcription);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});