const express = require("express");
const expressSanitizer = require("express-sanitizer");
const https = require("https");
const fs = require("fs");
const path = require("path");
const options = {
  key: fs.readFileSync("./cert.key"),
  cert: fs.readFileSync("./cert.crt"),
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use("/", express.static("public"));
const cors = require('cors');
app.use(cors()); // 모든 도메인에서의 요청 허용





const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

https.createServer(options, app).listen(8080, () => {
  console.log(`HTTPS server started on port 8080`);
});




// const OpenAI = require("openai");
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY // 환경 변수에서 API 키 사용
// });
// app.get('/audiotest2', async (req, res) => {
//     const completion = await openai.chat.completions.create({
//     messages: [
//         // { role: "system", content: "로스트아크 게임 디렉터" }
//         { role: "user", content: "html이 프로그래밍 언어가 맞나?" }
//     ],
//     model: "ft:gpt-3.5-turbo-0613:personal::8X3IU6ID", // 기본
//     // model: "gpt-4", // 기본
//     // model: "gpt-3.5-turbo", // 파인튜닝시킴
//     });

//     console.log(completion.choices[0].message.content);
//     res.send(completion.choices[0].message.content);
// });

// app.get('/audiotest', (req, res) => {
//     const filePath = path.join(__dirname, './audio/InMember.mp3');
//     res.sendFile(filePath); 
// });
// app.get('/audiotest3', (req, res) => {
//     const filePath = path.join(__dirname, './audio/InMember.wav');
//     res.sendFile(filePath); 
// });
