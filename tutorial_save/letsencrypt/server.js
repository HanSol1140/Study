"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const httpPORT = 80;
const app = (0, express_1.default)();
app.use(express_1.default.json());
;
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    const requestURL = req.url;
    console.log(`URL: ${requestURL}`);
    next();
});
app.use(express_1.default.static(__dirname));
app.get('/', (req, res) => {
    res.redirect('./index.html');
});
// 서버 시작
app.listen(httpPORT, () => {
    console.log(`Server listening on HTTP port ${httpPORT}`);
});
