var express = require('express');
var mqtt = require('mqtt');
var app = express();
var client = mqtt.connect('mqtt://192.168.0.3:1883');
// var client = mqtt.connect('mqtt://183.91.206.122:8081');

client.on('connect', function () {
  console.log('Connected to MQTT broker');
});

client.on('error', function (err) {
  console.log('MQTT Error: ', err);
});

app.get('/send', function (req, res) {
  client.publish('my_topic', 'Hello MQTT');
  res.send('Message sent to MQTT broker');
  console.log('발신확인용 콘솔메세지');
});

app.listen(8082, function () {
  console.log('Example app listening on port 8082!');
}); 