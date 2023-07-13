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

app.get('/send', function (req, res) { // JSON 형식으로 요청
  // json 형식으로 message 생성
  var message = {
    planName: "advertplan001, advertplan004",
    cMarksNames : "nnx10, nnx11",
    marqueName : "test0, test1"
  };
  client.publish('outTopic', JSON.stringify(message));
  res.send('Message sent to MQTT broker');
  console.log('발신확인용 콘솔메세지');
});


app.listen(8082, function () {
  console.log('포트 8082 서버실행 완료');
}); 
