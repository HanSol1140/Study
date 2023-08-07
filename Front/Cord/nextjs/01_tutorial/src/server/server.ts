const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 8083;  // 원하는 포트로 변경 가능

app.prepare().then(() => {
  const server = express();

  // CORS 설정 적용
  server.use(cors()); // 모든 도메인에서의 요청 허용

  server.get('*', (req: any, res : any) => {
    return handle(req, res);
  });

  server.listen(PORT, (err : any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
