const fs = require('fs');
var express = require('express');
var mqtt = require('mqtt');
var app = express();
var client = mqtt.connect('mqtt://192.168.0.44:1883');
// var client = mqtt.connect('mqtt://127.0.0.1:1883');

// 일반 메세지 전송
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

client.publish('middleServer1_Response', "coffeeMachine/status/3", { qos: 2 });
// }, 200)



// ESP32_1 설정변경 MQTT메세지
// 설정값 받기
// client.publish('coldbrewMachineSetup', "initInfo");

// client.publish('coldbrewMachineSetup', "setTmpPoint1/35");
// client.publish('coldbrewMachineSetup', "setTmpPoint2/40");
// client.publish('coldbrewMachineSetup', "tmpOutLimit1/55");
// client.publish('coldbrewMachineSetup', "tmpOutLimit2/80");
// client.publish('coldbrewMachineSetup', "coolingStatus/true");
// client.publish('coldbrewMachineSetup', "coldbrewCoolingStatus/false");

// client.publish('coldbrewMachineSetup', "scale1/120");
// client.publish('coldbrewMachineSetup', "scale2/120");
// client.publish('coldbrewMachineSetup', "limitScale2/30");
// client.publish('coldbrewMachineSetup', "limitScale2/60");
// client.publish('coldbrewMachineSetup', "totalFlow1/0.0");
// client.publish('coldbrewMachineSetup', "totalFlow2/0.0");
// client.publish('coldbrewMachineSetup', "flowLimit1/500");
// client.publish('coldbrewMachineSetup', "flowLimit2/1000")
;
// client.publish('coldbrewMachineSetup', "limitLevel/200");
// client.publish('coldbrewMachineSetup', "limitLevelMin/300");
// client.publish('coldbrewMachineSetup', "limitLevelMax/100");
// client.publish('coldbrewMachineSetup', "decafCleanCount/2");
// client.publish('coldbrewMachineSetup', "decafCleanTime/60");
// client.publish('coldbrewMachineSetup', "cbCleanCount/2");
// client.publish('coldbrewMachineSetup', "cbCleanTime/60");
// client.publish('coldbrewMachineSetup', "timer1/1");
// client.publish('coldbrewMachineSetup', "timer2/10");
// client.publish('coldbrewMachineSetup', "timer3/30");
// client.publish('coldbrewMachineSetup', "timer4/60");
