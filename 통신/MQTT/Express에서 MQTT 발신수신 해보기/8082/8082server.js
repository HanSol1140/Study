var express = require('express');
var mqtt = require('mqtt');
var app = express();
// var client = mqtt.connect('mqtt://192.168.0.3:1883');
// var client = mqtt.connect('mqtt://183.91.206.122:8081');
var client = mqtt.connect('mqtt://192.168.0.71:1884');

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

app.get('/send', function (req, res) {
  client.publish('my_topic', 'Hello MQTT');
  res.send('Message sent to MQTT broker');
  console.log('발신확인용 콘솔메세지');
});

app.listen(8082, function () {
  console.log('포트 8082 서버실행 완료');
}); 