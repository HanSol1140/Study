var express = require('express');
var mqtt = require('mqtt');
var app = express();
var client = mqtt.connect('mqtt://192.168.0.137:1883');


client.on('connect', function () {
    console.log('Connected to MQTT broker');
});

client.on('error', function (err) {
    console.log('MQTT Error: ', err);
});

client.on('offline', function () {
    console.log('MQTT client is offline');
});

client.on('reconnect', function () {
    console.log('MQTT client is trying to reconnect');
});

// app.get('/send', function (req, res) {
//   client.publish('outTopic', 'Hello MQTT');
//   res.send('Message sent to MQTT broker');
//   console.log('발신확인용 콘솔메세지');
// });
// app.get('/send', function (req, res) { // JSON 형식으로 요청

// json 형식으로 message 생성
//   var message = {
//     cMarksNames : "nanonix_did01",
//     cMarksNames : "nnx10, nnx11",
//     planName: "1, advert004-006",
//     planName: "hansol image advert 004, hansol image advert 005, hansol image advert 006",
//     marqueName : "test0"
//     marqueName : "test1, test2"
//   };
//   client.publish('did_in', JSON.stringify(message));
//   res.send('Message sent to MQTT broker');
//   console.log('발신확인용 콘솔메세지');
// });

// app.get('/send', function (req, res) { // JSON 형식으로 요청
// //   json 형식으로 message 생성
//   var message = {
//     timestamp: "2023-7-17 14:00",
//     phonenumber : "01031277711",
//     bluetoothmac : "5C:52:30:42:B5:CA"

//   };
//   client.publish('door_in', JSON.stringify(message));
//   res.send('Message sent to MQTT broker');
//   console.log('발신확인용 콘솔메세지');
// });
// var message = {
//     cleaningRobotState: true,
// };
// client.publish('cleaningbot_in', JSON.stringify(message));
// console.log('발신확인용 콘솔메세지');
// client.publish('table_in', 'Hello MQTT')    ;

// setInterval(()=> {
// var message1 = {
// servingAPI: "movePoint",
// robotName: "robot2",
// point: "5",
// };
// client.publish('servingbot_in', JSON.stringify(message1));
// },10000)
var message2 = {
    servingAPI: "movePoint",
    robotName: "robot1",
    point: "4",
};
client.publish('servingserver', JSON.stringify(message2));



setTimeout(() => {
    console.log("!");
    var message2 = {
        servingAPI: "moverCoordinates",
        robotName: "robot1",
        coordinatesX: "1.78",
        coordinatesY: "4.44",
        coordinatesTheta: "90.90",
    };
    client.publish('servingserver', JSON.stringify(message2));
}, 3000);
setTimeout(() => {
    console.log("!!!");
    var message2 = {
        servingAPI: "movePoint",
        robotName: "robot1",
        point: "4",
    };
    client.publish('servingserver', JSON.stringify(message2));
}, 6000);
// set
// app.listen(8082, function () {
//     console.log('포트 8082 서버실행 완료');
// }); 
