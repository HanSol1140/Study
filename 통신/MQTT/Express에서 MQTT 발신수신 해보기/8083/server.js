var express = require('express');
var mqtt = require('mqtt');
var app = express();
var client = mqtt.connect('mqtt://192.168.0.3:1883');

client.on('connect', function () {
client.subscribe('my_topic', function (err) {
    if (!err) {
    console.log('Connected to MQTT broker');
    }
});
});

client.on('message', function (topic, message) {
// message is Buffer
console.log(message.toString());
});

app.listen(8082, function () {
console.log('Example app listening on port 8082!');
});