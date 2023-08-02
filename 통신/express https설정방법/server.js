const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');

const cors = require('cors');
const axios = require('axios');
app.use(cors()); // 모든 도메인에서의 요청 허용
app.use(express.static('public'));
app.use(express.json());
// 8083/send로 접속하면 해당 명렁어 실행


app.use(express.static('public'));
app.get('/', (req, res) => {
    res.redirect('/settings.html');
});





// 나머지 코드 (미들웨어, 라우트 등)

// 인증서 옵션
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

// HTTPS 서버 생성
const server = https.createServer(options, app);

// 포트 8084에서 리스닝
server.listen(8084, function() {
  console.log('포트 8084 서버실행 완료');
});