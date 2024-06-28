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

var message = {
    tableNumber: 1,
    cleaningRobotState: false
}
var message1 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
var message2 = '{ "tmpInput1": 24.41496468, "tmpInput2": 24.48269844, "tmpOutput1": 255, "tmpOutput2": 226.95, "setTmpPoint1": 35, "setTmpPoint2": 33, "tmpOutLimit1": 100, "tmpOutLimit2": 89, "scale1": 120, "scale2": 120, "limitScale1": 33, "limitScale2": 65, "convertedScale1": 0, "convertedScale2": 0, "FlowRate1": 0, "FlowRate2": 0, "flowLimit1": 522, "flowLimit2": 1111, "totalFlow1": 0, "totalFlow2": 17.98245708, "pvLevel": 22, "limitLevel": 111, "limitLevelMin": 222, "limitLevelMax": 55, "decafCleanCount": 1, "decafCleanTime": 60, "cbCleanCount": 1, "cbCleanTime": 60, "timer1": 1, "timer2": 10, "timer3": 30, "timer4": 60 }'

// client.publish('machineServerResponse', "coldbrewMachine/status/true");
client.publish('coldbrewMachineSetup', "initInfo");
// client.publish('ColdbrewMachineSetup', "setTmpPoint1/35");
// client.publish('ColdBrewMachineSetup', "tmpOutLimit1/100");
// client.publish('ColdBrewMachineSetup', "setTmpPoint2/35");
// client.publish('ColdBrewMachineSetup', "tmpOutLimit2/100");
// client.publish('ColdBrewMachineSetup', "scale1/120");
// client.publish('ColdBrewMachineSetup', "scale2/120");
// client.publish('ColdBrewMachineSetup', "limitScale2/30");
// client.publish('ColdBrewMachineSetup', "limitScale2/60");
// client.publish('ColdBrewMachineSetup', "flowLimit1/500");
// client.publish('ColdBrewMachineSetup', "flowLimit2/1000");
// client.publish('ColdBrewMachineSetup', "limitLevel/200");
// client.publish('ColdBrewMachineSetup', "limitLevelMin/300");
// client.publish('ColdBrewMachineSetup', "limitLevelMax/100");
// client.publish('ColdBrewMachineSetup', "decafCleanCount/2");
// client.publish('ColdBrewMachineSetup', "decafCleanTime/60");
// client.publish('ColdBrewMachineSetup', "cbCleanCount/2");
// client.publish('ColdBrewMachineSetup', "cbCleanTime/60");
// client.publish('ColdBrewMachineSetup', "timer1/1");
// client.publish('ColdBrewMachineSetup', "timer2/10");
// client.publish('ColdBrewMachineSetup', "timer3/30");
// client.publish('ColdBrewMachineSetup', "timer4/60");

// // 오디오 전송
//     var filePath = './Voice.wav'; 

//     client.on('connect', function () {
//         console.log('Connected to MQTT broker');
//         const stream = fs.createReadStream(filePath, { highWaterMark: 1024 }); // 메시지 크기를 1KB로 설정
//         let partIndex = 0;

//         stream.on('data', function (chunk) {
//             // 파일의 각 부분(chunk)을 base64 인코딩하여 MQTT로 전송합니다.
//             client.publish('JR01_1', JSON.stringify({ index: partIndex, data: chunk.toString('base64') }));
//             partIndex++;
//         });

//         stream.on('end', function () {
//             // 파일의 마지막 부분을 보낸 후, 전송이 완료되었음을 알리는 메시지를 전송합니다.
//             client.publish('JR01_1', JSON.stringify({ index: partIndex, end: true }));
//         });
//     });