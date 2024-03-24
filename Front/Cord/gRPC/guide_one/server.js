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
// server.ts
const path_1 = __importDefault(require("path"));
const grpc = __importStar(require("@grpc/grpc-js"));
const protoLoader = __importStar(require("@grpc/proto-loader"));
const PORT = 8081;
const PROTO_FILE = './proto/random.proto';
const packageDef = protoLoader.loadSync(path_1.default.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(packageDef);
const randomPackage = grpcObj.randomPackage;
function main() {
    const server = getServer();
    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        ;
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Your server as started on port ${port}`);
        server.start();
    });
}
const todoList = {
    todos: []
};
const callObjByUsername = new Map();
function getServer() {
    const server = new grpc.Server();
    server.addService(randomPackage.Random.service, {
        PingPong: (req, res) => {
            console.log(req.request);
            res(null, { message: "Pong" });
        },
        RandomNumbers: (call) => {
            const { maxVal = 10 } = call.request; // any 타입으로 캐스팅 후 request 사용
            let runCount = 0;
            const interval = setInterval(() => {
                runCount++;
                call.write({ num: Math.floor(Math.random() * maxVal) }); // any 타입으로 캐스팅 후 write 사용
                if (runCount >= 10) {
                    clearInterval(interval);
                    call.end(); // any 타입으로 캐스팅 후 end 사용
                }
            }, 500);
        },
        TodoList: (call, callback) => {
            call.on("data", (chunk) => {
                var _a;
                (_a = todoList.todos) === null || _a === void 0 ? void 0 : _a.push(chunk);
                console.log(chunk);
            });
            call.on("end", () => {
                callback(null, { todos: todoList.todos });
            });
        },
        Chat: (call) => {
            const username = call.metadata.get("username")[0];
        }
    });
    return server;
}
main();
