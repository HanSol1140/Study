// client.ts
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from './proto/random';

const PORT = 8081;
const PROTO_FILE = './proto/random.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const client = new grpcObj.randomPackage.Random(
     `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 1);
client.waitForReady(deadline, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    onClientReady();
});


function onClientReady(){
// 핑 하면 퐁 호출받기
    // client.PingPong({message: "Ping"}, (err, result) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log(result);
    // });

// 랜덤숫자 10번 내보내기
    // const stream = client.RandomNumbers({maxVal: 100});
    // stream.on('data', (data) => {
    //     console.log(data);
    // });
    // stream.on('end', () => {
    //     console.log('communication ended');
    // });

// todoLIst
    const stream = client.TodoList((err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(result);
    });
    stream.write({todo: "walk the wife1", status: "Never"});
    stream.write({todo: "walk the wife2", status: "Done"});
    stream.write({todo: "walk the wife3", status: "Impossible"});
    stream.write({todo: "walk the wife4", status: "Done"});
    stream.end();
}

