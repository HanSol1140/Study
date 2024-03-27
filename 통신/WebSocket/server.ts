import * as WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });
let connectionCount = 0;

wss.on('connection', function connection(ws) {
  connectionCount++;
  console.log('Connected clients:', connectionCount);

  ws.on('close', function close() {
    connectionCount--;
    console.log('Connected clients:', connectionCount);
  });
});