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
const PORT = 8081;
const PROTO_FILE = './proto/random.proto';
const packageDef = protoLoader.loadSync(path_1.default.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(packageDef);
const client = new grpcObj.randomPackage.Random(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure());
// const deadline = new Date();
// deadline.setSeconds(deadline.getSeconds() + 0.5);
// client.waitForReady(deadline, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     onClientReady();
// });
function onClientReady() {
    client.PingPong({ message: "Ping" }, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(result);
    });
}
client.PingPong({ message: "Ping" }, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
});
