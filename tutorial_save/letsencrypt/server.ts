
import express from "express";

const httpPORT = 80;

const app = express();
app.use(express.json());;

import cors from "cors";
app.use(cors());

app.use((req, res, next) => {
    const requestURL = req.url;
    console.log(`URL: ${requestURL}`);
    next();
});

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.redirect('./index.html');
});

// 서버 시작
app.listen(httpPORT, () => {
    console.log(`Server listening on HTTP port ${httpPORT}`);
});