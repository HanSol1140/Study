"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// client.ts
const path_1 = __importDefault(require("path"));
const grpc = __importStar(require("@grpc/grpc-js"));
const protoLoader = __importStar(require("@grpc/proto-loader"));
const readline_1 = __importDefault(require("readline"));
const PORT = 8081;
const PROTO_FILE = './proto/random.proto';
const packageDef = protoLoader.loadSync(path_1.default.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(packageDef);
const client = new grpcObj.randomPackage.Random(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure());
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
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const username = process.argv[2];
    if (!username)
        console.error("No username, can't joit chat"), process.exit();
    const metadata = new grpc.Metadata();
    metadata.set('username', username);
    const call = client.Chat(metadata);
    call.write({
        message: "register"
    });
    call.on("data", (chunk) => {
        console.log(`${chunk.username} ==> ${chunk.message}`);
    });
    rl.on("line", (line) => {
        if (line === "quit") {
            call.end();
        }
        else {
            call.write({
                message: line
            });
        }
    });
}
