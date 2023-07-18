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

client.on('offline', function() {
  console.log('MQTT client is offline');
});

client.on('reconnect', function() {
  console.log('MQTT client is trying to reconnect');
});

// app.get('/send', function (req, res) {
//   client.publish('outTopic', 'Hello MQTT');
//   res.send('Message sent to MQTT broker');
//   console.log('발신확인용 콘솔메세지');
// });


// app.get('/send', function (req, res) { // JSON 형식으로 요청
//   // json 형식으로 message 생성
//   var message = {
//     planName: "advertplan001",
//     cMarksNames : "nnx10",
//     marqueName : "test0"
//   };
//   client.publish('outTopic', JSON.stringify(message));
//   res.send('Message sent to MQTT broker');
//   console.log('발신확인용 콘솔메세지');
// });

app.get('/send', function (req, res) { // JSON 형식으로 요청
//   json 형식으로 message 생성
  var message = {
    timestamp: "2023-7-17 14:00",
    phonenumber : "01031277711",
    bluetoothmac : "5C:52:30:42:B5:CA"
    
  };
  client.publish('bluetooth_door_in', JSON.stringify(message));
  res.send('Message sent to MQTT broker');
  console.log('발신확인용 콘솔메세지');
});

app.listen(8082, function () {
  console.log('포트 8082 서버실행 완료');
}); 
