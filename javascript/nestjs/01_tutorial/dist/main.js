"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http = require("http");
const fs = require("fs");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
const path = require("path");
console.log(path.resolve(__dirname, '../build/index.html'));
console.log(path.join(__dirname, '../build/index.html'));
async function bootstrap() {
    const server = express();
    const httpsOptions = {
        key: fs.readFileSync("./https/private.key.pem"),
        cert: fs.readFileSync("./https/domain.cert.pem"),
        ca: fs.readFileSync("./https/intermediate.cert.pem")
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server), {
        httpsOptions
    });
    app.enableCors();
    server.use(express.static(path.join(__dirname, "../build/")));
    server.get('', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });
    await app.listen(443, () => console.log('HTTPS server started on port 443'));
    http.createServer((req, res) => {
        const host = req.headers.host?.replace('80', '443');
        res.writeHead(301, { "Location": `https://${host}${req.url}` });
        res.end();
    }).listen(80, () => {
        console.log('HTTP server listening on port 80');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map