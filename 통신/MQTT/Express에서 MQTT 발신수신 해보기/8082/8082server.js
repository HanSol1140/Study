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

 
var message = {
    robotname : "cleaningbot_01",
    robotstate : true
}
client.publish('cleaningbot_in', JSON.stringify(message));


// client.publish('cleaningbot_in', "123");
