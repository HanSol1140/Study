const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT: Number = 8088;

// 라우터 모듈화
const routerhandler = require('./routerhandler');
// 함수 모듈화
const { setupRobots, cancle } = require('./func');

app.prepare().then(() => {
    const server = express();
    server.use(cors());
    server.use(express.json());    
    server.use(routerhandler);  // 모듈화한 라우터 사용

    server.get('*', (req:any, res:any) => {
        return handle(req, res);
    });

    server.listen(PORT, (err:any) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});