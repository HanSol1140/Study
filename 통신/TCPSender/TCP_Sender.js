const net = require('net');

const host = '1.212.172.134';
const port = 8082;

const client = new net.Socket();

client.connect(port, host, () => {
    console.log('Connected to TCP server');

    // HTTP 요청 형태로 메시지 구성
    const httpRequest = `GET /callbackurl.html?sender=01031277711`;

    // 서버에 HTTP 요청 전송
    client.write(httpRequest);
});

client.on('data', (data) => {
    console.log('Received: ' + data);
    client.destroy(); // 데이터 수신 후 연결 종료
});

client.on('close', () => {
    console.log('Connection closed');
});

client.on('error', (err) => {
    console.error('Connection error:', err);
});