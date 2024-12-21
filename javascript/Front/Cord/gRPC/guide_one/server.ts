// server.ts
import path from 'path';
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/random'
import { RandomHandlers } from './proto/randomPackage/Random'
import { TodoRequest } from './proto/randomPackage/TodoRequest';
import { TodoResponse } from './proto/randomPackage/TodoResponse';
import { ChatRequest } from './proto/randomPackage/ChatRequest';
import { ChatResponse } from './proto/randomPackage/ChatResponse';

const PORT = 8081;
const PROTO_FILE = './proto/random.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const randomPackage = grpcObj.randomPackage

function main() {
    const server = getServer();

    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            ;
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Your server as started on port ${port}`);
            server.start();
        });
}

const todoList: TodoResponse = {
    todos:[]
};
const callObjByUsername = new Map<string, grpc.ServerDuplexStream<ChatRequest, ChatResponse>>();

function getServer() {
    const server = new grpc.Server()
    server.addService(randomPackage.Random.service, {
        PingPong: (req, res) => { 
            console.log(req.request);
            res(null, { message: "Pong" });
        },

        RandomNumbers: (call: any) => {
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
            call.on("data", (chunk: TodoRequest) => {
                todoList.todos?.push(chunk);
                console.log(chunk);
            });
            call.on("end", () => {
                callback(null, {todos: todoList.todos})
            })
        },

        Chat: (call) =>{
            call.on("data", (req) => {
                const username = call.metadata.get("username")[0] as string;
                const msg = req.message;
                console.log(username, req.message);
                for(let [user, userCall] of callObjByUsername){
                    if(username !== user){
                        userCall.write({
                            username: username,
                            message: msg
                        });
                    }
                }
                if (callObjByUsername.get(username) === undefined){
                    callObjByUsername.set(username, call);
                }
            });
            call.on("end", () => {
                const username = call.metadata.get("username")[0] as string;
                callObjByUsername.delete(username);
                console.log(`${username} is ending their chat seesion`);
                call.write({
                    username : "Server",
                    message: `See you later ${username}`
                })
            });
 
        }
    } as RandomHandlers)
    return server
}
main();