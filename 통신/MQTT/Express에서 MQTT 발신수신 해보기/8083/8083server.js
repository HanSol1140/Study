var express = require('express');
var mqtt = require('mqtt');
var app = express();
// var client = mqtt.connect('mqtt://192.168.0.3:1883');
// var client = mqtt.connect('mqtt://183.91.206.122:8081');
// var client = mqtt.connect('mqtt://localhost:1883');
// var client = mqtt.connect('mqtt://192.168.0.2:1884');
var client = mqtt.connect('mqtt://192.168.0.137:1883');


client.on('connect', function () {

    client.subscribe('outTopic', function (err) {
        if (!err) {
        console.log('Connected to MQTT broker');
        }
    });

});

client.on('message', function (topic, message) {
// message is Buffer
console.log(message.toString());
});

app.listen(8083, function () {
console.log('포트 8083 서버실행 완료');
});