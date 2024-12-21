// client.ts
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/random';
import readline from 'readline'


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


function onClientReady() {
// PingPong
    // client.PingPong({message: "Ping"}, (err, result) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log(result);
    // });

// RandomNumbers
    // const stream = client.RandomNumbers({maxVal: 100});
    // stream.on('data', (data) => {
    //     console.log(data);
    // });
    // stream.on('end', () => {
    //     console.log('communication ended');
    // });

// TodoList
    // const stream = client.TodoList((err, result) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log(result);
    // });
    // stream.write({todo: "walk the wife1", status: "Never"});
    // stream.write({todo: "walk the wife2", status: "Done"});
    // stream.write({todo: "walk the wife3", status: "Impossible"});
    // stream.write({todo: "walk the wife4", status: "Done"});
    // stream.end();

// Chat
// npm run client your_username
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const username = process.argv[2];
    if(!username) console.error("No username, can't joit chat"), process.exit();

    const metadata = new grpc.Metadata();
    metadata.set('username', username);
    const call = client.Chat(metadata)

    call.write({
        message: "register"
    });

    call.on("data", (chunk) => {
        console.log(`${chunk.username} ==> ${chunk.message}`);
    });

    rl.on("line", (line) => {
        if (line === "quit"){
            call.end();
        }else{
            call.write({
                message: line
            })
        }

    });
}

