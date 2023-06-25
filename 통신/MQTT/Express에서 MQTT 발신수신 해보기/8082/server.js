var express = require('express');
var mqtt = require('mqtt');
var app = express();
var client = mqtt.connect('mqtt://192.168.0.3:1883');

app.get('/send', function (req, res) {
client.publish('my_topic', 'Hello MQTT');
res.send('Message sent to MQTT broker');
});

app.listen(8081, function () {
console.log('Example app listening on port 8081!');
});