const fs = require('fs');
var express = require('express');
var mqtt = require('mqtt');
var app = express();
// 모든 접속허용시 IP만 입력
// var client = mqtt.connect('mqtt://127.0.0.1:1883');

// MQTT 브로커에 연결할 때 사용자 이름과 패스워드를 포함한 옵션 설정
var options = {
    clientId: 'admin' ,
    username: 'admin', // 사용자 이름
    password: 'admin',  // 패스워드
    // clientId: 'coldbrewESP32_1' ,
    // username: 'coldbrewESP32_1', // 사용자 이름
    // password: 'coldbrewESP32_1',  // 패스워드
    host: '192.168.0.254',
    port: 1883

};
var client = mqtt.connect(options);

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
// ////////////////////////////////////////////////
// client.publish('coffee', "bean/clear");
// client.publish('coffee', "coffeeLong/on");
// client.publish('coffee', "espresso/on");
// client.publish('packing1', "movement/5");
// client.publish('packing2', "movement/5");
// client.publish('packing1', "positionMove/0/2");
// client.publish('packing1', "positionMove/0/2");
// client.publish('packing1', "left/0/50000");
// client.publish('packing1', "left/1/50000");
// client.publish('packing1', "left/2/50000");
// client.publish('packing1', "left/3/50000");
// client.publish('packing1', "left/4/50000");
// client.publish('packing1', "left/5/50000");
// client.publish('packing1', "left/6/50000");
// client.publish('packing1', "left/7/50000");
// client.publish('packing1', "left/8/50000");
// client.publish('packing1', "left/9/50000");
// client.publish('packing1', "left/10/50000");
// client.publish('packing2', "left/0/50000");
// client.publish('packing2', "left/1/50000");
// client.publish('packing2', "left/2/50000");
// client.publish('packing2', "left/3/50000");
// client.publish('packing2', "left/4/50000");
// client.publish('packing2', "left/5/50000");
// client.publish('packing2', "left/6/50000");
// client.publish('packing2', "left/7/50000");
// client.publish('packing2', "left/8/50000");
// client.publish('packing2', "left/9/50000");
// client.publish('packing2', "left/10/50000");
// ////////////////////////////////////////////////

// setTimeout(() => {
// client.publish('packing1', "stop/00");
// client.publish('packing1', "stop/01");
// client.publish('packing1', "stop/02");
// client.publish('packing1', "stop/03");
// client.publish('packing1', "stop/04");
// client.publish('packing1', "stop/05");
// client.publish('packing1', "stop/06");
// client.publish('packing1', "stop/07");
// client.publish('packing1', "stop/08");
// client.publish('packing1', "stop/09");
// client.publish('packing1', "stop/10");
// client.publish('packing2', "stop/0");
// client.publish('packing2', "stop/01");
// client.publish('packing2', "stop/02");
// client.publish('packing2', "stop/03");
// client.publish('packing2', "stop/04");
// client.publish('packing2', "stop/05");
// client.publish('packing2', "stop/06");
// client.publish('packing2', "stop/07");
// client.publish('packing2', "stop/08");
// client.publish('packing2', "stop/9");
// client.publish('packing2', "stop/10");
// }, 5000);
// //////////////////////////////////////////////////////?