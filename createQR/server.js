// http://localhost:3000/generate-qr?phoneNumber=123-456-7890으로 요청하면 해당 전화번호로 QR 코드가 생성됩니다.

const express = require('express');
const QRCode = require('qrcode');
const app = express();
const port = 3000;

app.get('/generate-qr', (req, res) => {
    // 전화번호는 요청의 쿼리 매개변수에서 가져옵니다.
    const phoneNumber = req.query.phoneNumber;
    if (!phoneNumber) {
        return res.status(400).send('전화번호가 필요합니다.');
    }

    const qrText = `tel:${phoneNumber}`;
    
    // QR 코드 생성
    QRCode.toDataURL(qrText, { errorCorrectionLevel: 'H' }, function (err, url) {
        if (err) {
            return res.status(500).send('QR 코드 생성 중 오류 발생');
        }
        res.send(`<img src="${url}"/>`);
    });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
