const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());



app.use(express.static("public"))
app.listen(8000, () => {
    console.log(`Example app listening on port 8000`)
})


// 웹소켓 서버 열기
const { WebSocketServer } = require("ws")
const wss = new WebSocketServer({ port: 8001 })

// 웹소켓 서버 연결 이벤트 바인드

// 1. 메세지를 수신
// wss.on("connection", ws => {
//     // 데이터 수신 이벤트 바인드
//     ws.on("message", data => {
//         console.log(`Received from user: ${data}`)
//     })
// })


// 2. 메세지 수신후 응답(send로 보낼 수 있음)
// wss.on("connection", ws => {
//     // 데이터 수신 이벤트 바인드
//     ws.on("message", data => {
//         console.log(`Received from user: ${data}`)
//         ws.send(`Received ${data}`) // 서버의 답장
//     })
// })

// 3. 접속 환영 메세지
// wss.on("connection", (ws, request) => {
//     // request: 클라이언트로 부터 전송된 http GET 리퀘스트 정보

//     ws.on("message", data => {
//         console.log(`Received from user: ${data}`)
//         ws.send(`Received ${data}`)
//     })

//     ws.send(`Hello, ${request.socket.remoteAddress}`)
//     // 연결 직후 해당 클라이언트로 데이터 전송
// })

wss.broadcast = (msg) => {
    wss.clients.forEach((client) => {
       client.send(msg) ;
    });
}

wss.on("connection", (ws, request) => {
// 새로운 유저 접속 알림
    wss.broadcast(`새로운 유저가 접속했습니다. 현재 유저 ${wss.clients.size} 명`);
    console.log(`새로운 유저 접속: ${request.socket.remoteAddress}`);

// 여기에 close 이벤트를 추가합니다.
    ws.on("close", () => {
        wss.broadcast(`유저 한 명이 떠났습니다. 현재 유저 ${wss.clients.size} 명`);
        console.log(`유저가 연결을 끊음: ${request.socket.remoteAddress}`);
    });

// 채팅 브로드캐스트
    ws.on("message", data => {
        wss.broadcast(data.toString());
        console.log(data.toString());
    })

});






// 중복코드 줄이기전(broadcast로 코드를 줄일 수 있음)
// wss.on("connection", (ws, request) => {
//     // 새로운 유저 접속 알림
//     wss.clients.forEach(client => {
//         client.send(`새로운 유저가 접속했습니다. 현재 유저 ${wss.clients.size} 명`);
//     });

//     console.log(`새로운 유저 접속: ${request.socket.remoteAddress}`);

//     // 여기에 close 이벤트를 추가합니다.
//     ws.on("close", () => {
//         wss.clients.forEach(client => {
//             client.send(`유저 한 명이 떠났습니다. 현재 유저 ${wss.clients.size} 명`);
//         });

//         console.log(`유저가 연결을 끊음: ${request.socket.remoteAddress}`);
//     });

//     // 채팅 브로드캐스트
//     ws.on("message", data => {
//         wss.clients.forEach(client => {
//             client.send(data.toString())
//         })
//         console.log(data.toString());
//     })

// });

