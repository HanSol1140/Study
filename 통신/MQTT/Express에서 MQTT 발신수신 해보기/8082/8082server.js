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
    
    // client.publish('temperature', JSON.stringify(message));
    client.publish('ColdBrewMachineSetup', "setTmpPoint1/35");

// // 오디오 전송
//     var filePath = './Voice.wavFUckyo'; 

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